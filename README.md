# Firebase Basics - Create a Basic Firebase App with Firebase, Node, Google

Setup a simple Web Application that leverages Firebase. The application presents the user with an option to login to google and shows them Credential and Token(JWT) information.

# Reference https://firebase.google.com/docs/cli

## Getting Started

Clone this repository.

### Prerequisites

# Sign up for a google Account
https://accounts.google.com/

# Install Node & Tools
Install Node.js - https://nodejs.org/ (v12) or greater

Install Firebase Tools
```
npm install firebase-tools -g
```

# Firebase Sign Up

Signup for Google Firebase - https://console.firebase.google.com/

Sign in to Google

## To run the code (Locally)
switch to the command line. cd to the directory where you downloaded the code.
```cd ``` to the directory where the code exists

initialize the hosting servive
```
firebase login
firebase init hosting 
```

Choose - Create a new project and specify a project id (e.g. my-project-2020)

What would you like to call your project? (Accept default)

What do you want to use as your public directory? public (default)

Configure as a single-page app? Yes

File public/index.html already exists. Overwrite? N


```
firebase serve 
```

Navigate to ```http://localhost:5000``` in your browser to view the application

https://console.firebase.google.com/

# Turn on Google Authentication

Navigate to https://console.firebase.google.com/ in your browser.

Select the project you initialized. Navigate to Authentication --> Sign-in method. Choose Google and enable support. Provide the project support email. Save settings.

Navigate to ```http://localhost:5000``` in your browser, click on 'Login with Gooole'. It will take you to content that is fully functional, logging in shows you your token.

# Publish App on the www

Command line. ```firebase deploy```. 

Navigate to your app using the Hosting URL: https://xxxxx.web.app.

You can also try the app that is currently hosted at https://cb-firebasics.web.app/