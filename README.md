# Generate-password-project
This project was to test and push my understanding of JacaScript, specifically using maths, arrays and functions. The user is asked if they would like to use any mixture of letters, capital letters, numbers and or special characters, I created a number of mathematical equations to divide their desired password length by the amount of the arrays using the % element and the / to get a close-to-equal amount of characters from each array containing each type of character. then using this i used the Math.Random() function to select random elements from the arrays into new arrays. then i combined these together to create a singular array with all characters that will be used in the users password. After this, the password is shuffled using my shuffle function to stop all types of characters being in groups as they were when they entered the new array, the final step was to .join() the string together into one singular string of text, creating the randomly generated password.  

## Screenshot
[image of webpage](assets/password-generator.PNG)  

## Links
Deployed Webpage: https://jake-orch.github.io/Generate-password-project/  
Github Repo: https://github.com/Jake-Orch/Generate-password-project
