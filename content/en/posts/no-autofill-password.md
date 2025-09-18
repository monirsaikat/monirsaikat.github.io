---
title: "No Autofill Password while developing pages with HTML"
date: 2025-09-18
slug: "no-autofill-password"
summary: "Stop browsers from auto-filling your password fields while developing."
tags: ["tips", "tricks", "html"]
categories: ["Technology", "Web Development"]
cover:
  image: "/images/no-autofill-password.png"
  alt: "No Autofill Password while developing pages with HTML"
draft: false
---

When building login or form pages in **HTML**, browsers often try to *autofill* saved usernames and passwords.  
This can interfere with testing or styling your inputs.

👉 The quick fix:  

```html
<input type="password" name="password" autocomplete="new-password" />
