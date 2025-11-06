+++
date = '2025-09-02T17:40:00+06:00'
draft = false
title = 'Packaging a PySide6 App for Windows & Linux — My Quick Dev Notes'
+++

Building desktop apps with **PySide6** is honestly super fun — until you reach that final boss:  
**“How do I turn this into an actual EXE or Linux binary?”**

So here’s my personal notebook entry on how I packaged my PySide6 app (Simdoro) into a clean distributable for **Windows** (and Linux too).  
Raw, simple, and straight from my dev flow.

---

## 🚀 Why this guide exists
I was building a small productivity tool with PySide6. The Python part was easy.  
Shipping it? Not so much.

Most tutorials were either outdated, too complex, or straight-up confusing.

So, here’s the **real world**, **dev-friendly**, **no jargon** version of how I actually built my installer.

---

## ✅ What you need installed
Before running anything:

- Python (3.10+ recommended)
- A virtual environment (always a good idea)
- PySide6
- PyInstaller (for EXE builds)
- Optional: cx_Freeze (for MSI installers)

Inside your project:

```
myapp/
│─ classes/
│─ helpers.py
│─ pomo.py
│─ sounds.py
│─ icon.ico
│─ sound.mp3
```
Pretty standard setup.

## 🪟 Packaging for Windows (EXE)

### ✅ Method 1 — PyInstaller (the fastest way)

If you're using **PowerShell / CMD**:

```powershell
pyinstaller ^
  --noconfirm ^
  --onefile ^
  --windowed ^
  --name Simdoro ^
  --icon icon.ico ^
  --collect-submodules PySide6 ^
  --collect-data PySide6 ^
  --collect-binaries PySide6 ^
  --add-data "sound.mp3;." ^
  --add-data "classes;classes" ^
  pomo.py
```

If you're in Git Bash (MINGW64):
```bash
pyinstaller \
  --noconfirm \
  --onefile \
  --windowed \
  --name Simdoro \
  --icon icon.ico \
  --collect-submodules PySide6 \
  --collect-data PySide6 \
  --collect-binaries PySide6 \
  --add-data 'sound.mp3;.' \
  --add-data 'classes;classes' \
  pomo.py
```

✅ After running it:
```dist/Simdoro.exe```
And that’s it — a clean portable EXE.

📦 Bonus: MSI Installer (Windows)
If you want a real installer (Add/Remove Programs, Start Menu, etc.):
Install:
```bash
pip install cx-Freeze
```
Create `setup.py`:
```python
from cx_Freeze import setup, Executable

build_exe_options = {
    "packages": ["PySide6"],
    "include_files": [
        "icon.ico",
        "sound.mp3",
        "classes",
    ],
}

setup(
    name="Simdoro",
    version="0.1.0",
    description="Simple PySide6 Pomodoro App",
    options={"build_exe": build_exe_options},
    executables=[Executable("pomo.py", base="Win32GUI", icon="icon.ico")],
)
```
### Build MSI:
`python setup.py bdist_msi`

Installer goes into:
`dist/Simdoro-0.1.0.msi`

🐧 Packaging for Linux
Linux builds are actually easier:
```bash
pyinstaller \
  --noconfirm \
  --onefile \
  --windowed \
  --name simdoro \
  pomo.py
```

The output is a single binary under:
`dist/simdoro`

If you want a .deb or .rpm package, tools like fpm or appimage-builder can do that — but honestly, the single binary works great for small utilities.