---
title: "Building a Native Node.js Addon with N-API and C++"
date: "2026-01-15"
summary: "How I bridged C++ and JavaScript using Node.js N-API to build high-performance native addons. The setup, the gotchas, and why it's worth it."
tag: "Systems"
readTime: "8 min"
---

## Why Native Addons?

JavaScript is fast. V8 has made it fast enough for almost everything. But sometimes you hit a wall: you need to call an OS-specific API, you need to squeeze every microsecond out of a hot loop, or you need to link against a C or C++ library that has no JavaScript bindings.

That's where Node.js native addons come in. They let you write C++ code that Node can load and call just like any other `require()`.

## N-API vs. the Old Way

Historically, addons were written using V8's internal C++ API directly. This worked, but it meant every time Node upgraded V8, your addon might break.

**N-API** (Node-API) changed that. It's a stable C ABI that's version-agnostic. An addon compiled for Node 18 will (in theory) work on Node 20. The stability guarantee is real.

```cpp
#include <node_api.h>

napi_value Add(napi_env env, napi_callback_info info) {
  size_t argc = 2;
  napi_value args[2];
  napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);

  double a, b;
  napi_get_value_double(env, args[0], &a);
  napi_get_value_double(env, args[1], &b);

  napi_value result;
  napi_create_double(env, a + b, &result);
  return result;
}
```

## Setting Up the Build

You'll need `node-gyp`. It reads a `binding.gyp` file and generates build files for the platform.

```json
{
  "targets": [{
    "target_name": "addon",
    "sources": ["src/addon.cpp"],
    "include_dirs": ["<!@(node -p \"require('node-addon-api').include\")"],
    "defines": ["NAPI_DISABLE_CPP_EXCEPTIONS"]
  }]
}
```

Install the dependency and build:

```bash
npm install node-addon-api
node-gyp configure
node-gyp build
```

This drops a `.node` file in `build/Release/` which you can `require()` directly.

## The Gotchas

**Memory management is manual.** You're back in C++ land. No garbage collector is going to save you. Every allocation needs a deallocation. RAII patterns (smart pointers, RAII wrappers) are your friends.

**Thread safety.** N-API callbacks run on the Node.js main thread. If you want to do work on a background thread and call back to JS when done, you need `napi_threadsafe_function`. This is genuinely complex but essential for non-blocking I/O.

**Error handling.** N-API uses error codes (`napi_status`) rather than exceptions. Every API call can fail. You need to check return values or use the C++ wrapper (`node-addon-api`) which re-introduces exceptions in a controlled way.

## What I Learned from `win-track`

My `win-track` project uses this approach to hook into Win32 APIs from Node.js. The Win32 `GetForegroundWindow` and `GetWindowTextW` functions aren't available in pure JavaScript. You need a native layer.

The C++ side is about 150 lines. The JavaScript side is a clean wrapper that makes it feel native to the Node.js ecosystem. The boundary between the two almost disappears.

> The best native addon is one where the consumer forgets it's native.

## Should You Use It?

Use native addons when:
- You need OS-specific APIs (Win32, macOS frameworks, Linux ioctls)
- You're binding to an existing C/C++ library
- You have a hot path where the V8 overhead is measurable

Don't use them for general business logic. The build complexity and maintenance cost is real. But when you need them, N-API is the right tool.
