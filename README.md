# Password-Generator

### Author: Jeffrey Taylor


## Description

Site URL https://jtpheonix13.github.io/Password-Generator/

The goal of this challenge was to add code to the script.js file that allowed the 
site to generate a random password based on user input.

### Steps taken

1. I added variables to hold the user input based off of prompts given to the user
2. I added prompts to the functions then used if statements to test if the users input fit within the parameters given.
3. I prompted the user to either confirm or deny the four character types to be included in the list of characters.
4. If the user denied all four I added an if statement that prompts the user to select at least one type of characters for the generator.
5. I used the Math.Random method and a for loop to select the user specified number of characters from the types of characters the user approved.
6. I converted the items in the array of randomly selected characters into a string to return and display on the screen.
7. Lastly in the writepassword function a set the characters array back to empty after the password is displayed so that the user can generate another password without having to click the refresh button to start the generator over.

### Site Screenshot

![website-screenshot](./assets/images/03-javascript-homework-demo.png)