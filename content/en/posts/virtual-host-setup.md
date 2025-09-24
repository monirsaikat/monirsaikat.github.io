---
title: "Setup Virtual Host on Windows & Ubuntu (Laragon/XAMPP/WAMP)"
date: 2025-09-24
slug: "virtual-host-setup"
summary: "A simple guide to set up a custom virtual host like somefolder.test on both Windows (Laragon, XAMPP, WAMP) and Linux (Ubuntu) with Apache."
tags: ["Apache", "Virtual Host", "Windows", "Ubuntu", "Laragon", "XAMPP", "WAMP"]
categories: ["Programming", "Web Development"]
cover:
  image: "/images/virtual-host-setup.png"
  alt: "Virtual host setup illustration"
draft: false
---


## What is a Virtual Host?
A virtual host lets you access your project with a custom domain (like `somefolder.test`) instead of `localhost/project-name`. This makes local development cleaner and more professional.

---

## Step 1: Edit Apache Virtual Hosts
Find and open the Apache `httpd-vhosts.conf` (or Laragon/WAMP sites config):

- **Laragon** → `C:\laragon\etc\apache2\sites-enabled\00-default.conf`  
- **XAMPP** → `C:\xampp\apache\conf\extra\httpd-vhosts.conf`  
- **WAMP** → `C:\wamp64\bin\apache\apacheX.X.X\conf\extra\httpd-vhosts.conf`  
- **Ubuntu/Linux** → `/etc/apache2/sites-available/somefolder.conf`

Add this block (adjust the path to your project folder):

```apache
<VirtualHost *:80>
    ServerName somefolder.test
    DocumentRoot "C:/xampp/htdocs/somefolder"   # Windows example
    <Directory "C:/xampp/htdocs/somefolder">
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

### For Ubuntu, the path will look like:
```apache
<VirtualHost *:80>
    ServerName somefolder.test
    DocumentRoot /var/www/somefolder
    <Directory /var/www/somefolder>
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

## Step 2: Update Hosts File
Tell your system to point somefolder.test to localhost.
- Windows → open C:\Windows\System32\drivers\etc\hosts
- Ubuntu/Linux → edit /etc/hosts
```apache
127.0.0.1 somefolder.test
```

## Step 3: Enable & Restart Apache
- Windows (XAMPP/Laragon/WAMP): restart Apache from control panel.
- Ubuntu/Linux:
```bash
sudo a2ensite somefolder.conf
sudo systemctl reload apache2
```

## Step 4: Test It
Open your browser and visit:
```apache
http://somefolder.test
```
You should now see your Laravel (or any) project.

### Multiple Projects? 
No problem. Just repeat steps 1 & 2 with different names like:
```apache
127.0.0.1 searches.test
127.0.0.1 videos.test
127.0.0.1 somefolder.test
```
Each gets its own `<VirtualHost>` block pointing to its folder.

✅ That’s it! Now you can serve as many projects as you want with clean `.test` domains on both Windows and Ubuntu.