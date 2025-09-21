---
title: "Axios Interceptors: Before & After Requests"
date: 2025-09-21
slug: "axios-request-response-interceptors"
summary: "Learn how to use Axios interceptors in 2025 to handle authentication, logging, request/response transformations, and centralized error handling."
tags: ["Axios", "JavaScript", "React", "API", "Web Development"]
categories: ["Programming", "Web Development"]
cover:
  image: "/images/axios-interceptors.png"
  alt: "Axios interceptors illustration"
draft: false
---

When working with APIs in modern JavaScript apps, **Axios interceptors** are game-changers.  
They let you plug in logic that runs:

- **Before the request leaves your app** → great for attaching tokens, normalizing params, or logging.  
- **After the response comes back** → perfect for unwrapping data, error handling, retries, and performance tracking.  

---

## 🚀 Why Use Axios Interceptors?

- Centralize **authentication token management**  
- Track **API performance** with timestamps  
- Catch and handle **errors globally** (401s, 500s)  
- Transform request/response payloads automatically  
- Retry failed requests when a token refresh succeeds  

---

## ⚙️ Setting Up Axios Instance

Instead of modifying the global Axios, create a **dedicated instance**:

```js
// api/request.js
import axios from "axios";

export const request = axios.create({
  baseURL: "https://api.example.com/v1",
  timeout: 15000, // optional
});
```

### 📝 Adding a Request Interceptor (Before)

- Things you usually do before the request leaves:
- Pull the latest token from localStorage
- Attach headers (Authorization, X-Request-Id)
- Add request metadata (start time for performance logs)
```js
// api/interceptors.js
import { request } from "./request";

request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("builder_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Add request ID
    config.headers["X-Request-Id"] = crypto.randomUUID?.() || Date.now();

    // Track timing
    config.metadata = { startTime: Date.now() };

    return config;
  },
  (error) => Promise.reject(error)
);
```


### 📝 Adding a Response Interceptor (After)
Things you usually do after the response comes back:
- Measure duration
- Unwrap nested response data
- Handle common error cases
- Retry failed requests if token refresh works
```js
// api/interceptors.js
request.interceptors.response.use(
  (response) => {
    const endTime = Date.now();
    const duration = endTime - response.config.metadata.startTime;
    console.log(`[API] ${response.config.url} took ${duration}ms`);

    // Unwrap data structure
    return response.data?.data || response.data;
  },
  async (error) => {
    // Handle 401 (unauthorized)
    if (error.response?.status === 401) {
      console.warn("Unauthorized — maybe refresh token?");
      // Example: trigger token refresh + retry logic
    }

    return Promise.reject(error);
  }
);
```

### ✅ Usage Example
```js
import { request } from "./api/interceptors";

async function fetchProfile() {
  try {
    const user = await request.get("/me");
    console.log("Profile:", user);
  } catch (err) {
    console.error("API error:", err.message);
  }
}
```

🎯 Key Takeaways

1. Request interceptor (before): Add tokens, IDs, metadata.
1. Response interceptor (after): Measure, unwrap, handle errors.
1. Keep logic centralized, so every request benefits.
1. Perfect for React, Vue, Next.js, Node.js, or any modern JS stack in 2025.

> 🔥 With Axios interceptors, you stop repeating yourself in every request and gain centralized, predictable API behavior.