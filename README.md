# Root Code
## Introduction
**RootCode** is not exist developer team, this website is about what we can do for our customers, this website contains four web pages, here we cover them:
<br>
* **Main:** It's the landing page, it contain the links to all other pages, contain reviews and subscription part which can be used by user to follow our works with, and it describe
        <br>- *What are we?* We are a group of developers in all new technology fields.
        <br>- *What can we do?* We can build Websites, Mobile apps and Computer apps and make them secure, either We can link them together to build a massive system.
<br>
* **Login/Registration:** User can login or register, to access some feature that guest can not access.
<br>
* **About Us:** Here the user can see *who we are?* and *what does each of us know?*, and they can get our social media links to follow each of Us. 
<br>
* **Ask a service:** On this page the user can ask the cost of the service/s that he/she needs. 

<hr>

## Issues
**1- Parallel-shell package:** In "node_modules\parallelshell\index.js" has a small bug, let's catch it 😀<br>
&emsp; **Solution:** Replace line 105:(cwd: process.versions.node < **'8.0.0'** ? process.cwd : process.cwd(),) with (cwd: process.versions.node < **8.0** ? process.cwd : process.cwd(),)