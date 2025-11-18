---
title: "How to change php.ini for some configuration in ubuntu"
date: 2025-11-19
slug: "how-to-change-php-ini-for-some-configuration-in-ubuntu"
summary: "This is snippet or simple guide to edit php ini for some php configuration you might need in ubuntu distroy. "
tags: ["Ubuntu", "Linux", "PHP"]
categories: ["DevOps", "Web Development"]
draft: false
------------------------------------------

## Step 1 — Edit your PHP config
```bash
sudo nano /etc/php/*/apache2/php.ini
```

Search any settings and bump them. You can use `ctrl+R` in nano editor to search:
```bash
upload_max_filesize=500MB
```

## Step 2 - Save and get out of nano editor.

## Step 3 - Restart Apache Server. 
```bash
sudo service apache2 restart
```
