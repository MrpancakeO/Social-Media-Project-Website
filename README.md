# Social-Media-Project-Website
## Created by Brandon Chansamone & Aman Tewolde


### Table of Contents
- Status
- Files
- Public
- Description of Project
- Workload/ How Things Were Divided
- Design Choices
- Technology Used
- Installation  Guide
- Neat Things


# Files
We have decided to break up the files using the best practices as taught in class, with HTML files being seperated from CSS & JS files. We have:
## Controllers
- errorController.js (For controlling throwing errors)
- homeController.js (For handling GET request from the root folder)
- usersController.js (For handling GET request in signup and signin)
- postController.js (for handling posting on the homepage)
## Models
- user.js (For the fields on what a user should have)
- post.js (For handling the fields on what a post can contain)
## Views
- homepage.ejs (For displaying the end-user signup page)
- signin.ejs (For displaying the end-user signin page)
- homepage.ejs (For displaying the end-user homepage)
- googleBookSearch.html (For displaying the google Book search api) (ASSIGNMENT 2)
- layout.ejs (For having a base layout for the other pages)
- index.ejs(For formatting on signup and signin pages)
- thanks. ejs (For wehen user sucessfully signup)
## Post
-Post contains .ejs files for handling the posting function
-User contains .ejs files for handling users
# Public
## CSS
- homepage.css (styling for homepage.html)
- styles.css (styling for signup.html)

## JS
- signup.js (script for running the signup screen)
- script.js (script for running the google search api, currently not in use)
- main.js (script for the validation function and google book search api)
- bookdisplay.js (for the main componets in the google book search api)

## Description of project
Assignment 1: The goal for this project is to create a functional social media site that is easy to use and simplistic in design.

Assignment 2 & 3: After the response from Assignment 1, we have decided to focus more of our efforts into getting the functionality and usability of our social media site, then clean up/modernize as we go on with the assignments. This can be seen currently with our implementation for Assignment 3, with cleaning up how the homepage interacts with the signup and signin features. We are still trying to keep the simplistic look, but being more confident with our abilities in stylizing.

Assignment 4: Adding user authentication and recent post showed to be quite the challenge for us, not only in the implementation through how to actually get users to authenticate, but a time constaint as well. Thank you Dr. Jafarian for giving us the time extension to fully complete our work to our best knowledge, was really appreciated! -Aman & Brandon

## Workload/ How things Were Divided
Our development happened mostly during planned meetings/sessions, with both members (Brandon & Aman) working on the documents together, and at the end of the meeting dividing off the work for the other to devlopment before the next meeting. 

Brandon took lead with the html and implementation of the google search api, with Aman giving supoport when needed. Similarlly, Aman took lead with the functions and scripts, with Brandon giving support as well.

This process has been ramping it with the trnasfering of files over to ejs. In hindsight we should have either made a new branch or new repository to keep things in order, since we are not using the googleBookSearch function in this build.



## Design Choices
We wanted to create a social media site similar to the sites we grew up with like Facebook and Twitter, before they were heavily revamped. the name BAS comes from the full name of the website, Brandon & Aman's Site. We felt the bas fish was a very fitting mascot for the website as well.

# Technology Used
- An internet connection is needed to connect to Bootstrap to use the formating tools implemented.
- VS Code and Windows Terminal were used by both group members.
- CSS Files in user can be found via Bootstrap as well

# Installation Guide
As long as you have the basic software listed below, you will be able to run/edit this code.
- JS Installed
- IDE of choice
- nodemon installed
- MongoDB installed
- npm (use "npm install" into your console)
# How to run our web site
Firstly, be sure to have MonoDB and nodemon installed.
- use "npm install" to install the dependecies
- To populate the database with fake users, we have provided a "seed.js" script, please enter "node seed" into your console
- After this, run "npm start" and eneter "localhost:3000" into your browser, and you will be good to go!

# Neat Things
- Password requirements are hidden when not entering a password, and shows when password is being entered.
- One of the fake users was inspired by a midlane champ :)
- MongoseDB logs signin from users as well
- Recent Post on the homepage presents post!


