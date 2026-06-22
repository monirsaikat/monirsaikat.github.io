---
title: "Building Desktop Apps with Electron.js: What Nobody Tells You"
date: "2026-04-01"
summary: "Electron.js lets you ship a desktop app with web technology, but it comes with real trade-offs. Here's what I learned building production desktop apps with it."
tag: "Desktop"
readTime: "9 min"
---

## Why Electron?

The pitch is compelling: you already know HTML, CSS, and JavaScript. Why learn a whole new native framework when you can build a desktop app with the same tools you use every day?

That's the appeal of Electron.js. It bundles Chromium and Node.js into a single runtime so your web app runs as a native desktop application on Windows, macOS, and Linux.

For TimoDesk, my time tracking SaaS, the desktop client needed to run silently in the background, hook into system events, track active windows, and send data to a server. Electron was the right tool. Here's what I learned shipping it.

## The Architecture That Actually Works

Electron has two process types: the **main process** (Node.js) and **renderer processes** (Chromium). Most bugs I see come from treating them like one process.

```
Main Process (Node.js)
  app lifecycle
  native OS APIs
  system tray
  IPC broker
      |
      | IPC (ipcMain / ipcRenderer)
      |
Renderer Process (Chromium)
  your React/Vue/HTML UI
  NO direct Node.js access (contextIsolation)
```

**Always enable `contextIsolation: true` and `nodeIntegration: false`.** It's the default now, but older tutorials show the unsafe way. Never expose Node.js APIs directly to the renderer.

Instead, use a preload script to expose only what you need:

```typescript
// preload.ts
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
  getActiveWindow: () => ipcRenderer.invoke('get-active-window'),
  onTick: (cb: (data: unknown) => void) =>
    ipcRenderer.on('tick', (_event, data) => cb(data)),
});
```

The renderer only sees `window.api`. Nothing else. Clean boundary.

## IPC Patterns That Scale

The naive pattern is to `ipcMain.on` everything and `ipcRenderer.send` from the UI. This works until you have 20 events and no idea which ones are request/response vs. fire-and-forget.

Use `ipcMain.handle` + `ipcRenderer.invoke` for request/response:

```typescript
// main process
ipcMain.handle('get-stats', async () => {
  return await collectSystemStats();
});

// renderer (via preload)
const stats = await window.api.getStats();
```

Use `ipcMain.on` + `webContents.send` only for server-push events where you're pushing data to the UI.

## System Tray and Background Behavior

For productivity tools, you often want the app to run without a visible window. This means:

```typescript
app.on('window-all-closed', (e) => {
  e.preventDefault(); // don't quit when window closes
});

const tray = new Tray(iconPath);
tray.setContextMenu(Menu.buildFromTemplate([
  { label: 'Show', click: () => mainWindow.show() },
  { label: 'Quit', click: () => app.quit() },
]));
```

One gotcha: on macOS you also need `app.dock.hide()` if you want no Dock icon. On Windows, the tray icon IS the presence indicator.

## The Packaging Problem

Shipping an Electron app means bundling Chromium. Your "hello world" is 150MB. There's no avoiding this. Strategies to minimize the damage:

- Use `electron-builder` with NSIS installer on Windows (compressed install is much smaller than the raw app)
- Enable ASAR packaging so your app code is in an archive rather than loose files
- Strip dev dependencies aggressively before packaging

```json
{
  "build": {
    "appId": "com.yourapp.id",
    "win": { "target": "nsis" },
    "asar": true,
    "files": ["dist/**/*", "!node_modules/.cache"]
  }
}
```

## When to Use Native Addons

Sometimes you need something Electron can't give you purely from JS. For win-track, I needed to read the active window title and URL on Windows. That requires Win32 API calls.

The solution: a native Node.js addon (N-API) loaded by the main process.

```typescript
// main process
import addon from '../native/build/Release/tracker.node';

ipcMain.handle('get-active-window', () => {
  return addon.getActiveWindow(); // C++ doing the heavy lifting
});
```

The renderer never knows C++ was involved. It just called `window.api.getActiveWindow()` and got a string back.

## Auto-Update

Don't ship without auto-update. Users won't manually update a tray app.

`electron-updater` from the `electron-builder` ecosystem handles this cleanly:

```typescript
import { autoUpdater } from 'electron-updater';

app.whenReady().then(() => {
  autoUpdater.checkForUpdatesAndNotify();
});
```

Point it at a GitHub release, an S3 bucket, or your own update server. It handles differential updates, download progress, and graceful restarts.

## The Real Trade-offs

Electron is not the answer to every desktop problem. Be honest about the costs:

- **Memory**: Chromium is hungry. A minimal Electron app uses 80-150MB RAM at idle.
- **Startup time**: Slower than a native app. Acceptable for productivity tools, not for utilities that need to launch in milliseconds.
- **Distribution size**: 150MB+ installers. Users notice.

If you need a lightweight system tray utility, consider alternatives: Tauri (Rust + system WebView, much lighter), or going fully native with WinForms/.NET on Windows.

But if you need a cross-platform desktop app with a rich UI and you're already shipping web tech, Electron gives you the fastest path to something real. Just go in with open eyes.
