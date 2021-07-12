# Team Profile Generator


This project is a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Once it is created it allows the user to have easy access to each employees name, id and email to easily contact anyone on the team. Each email is linked to directly email the employee you need to contact. You have 3 choices for employees; a manager, engineer and intern with varying information questions for each role. 
  * [Installation](#install)
  * [Tests](#tests)
  * [Usage](#usage)
  * For a video on using the app click [here.](https://drive.google.com/file/d/16I2oHlp4BGfhdQ6lG-6sOZBrRcYuVOAZ/view?usp=sharing)



## Criteria

- GIVEN a command-line application that accepts user input
- WHEN I am prompted for my team members and their information
- THEN an HTML file is generated that displays a nicely formatted team roster based on user input
- WHEN I click on an email address in the HTML
- THEN my default email program opens and populates the TO field of the email with the address
- WHEN I click on the GitHub username
- THEN that GitHub profile opens in a new tab
- WHEN I start the application
- THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
- WHEN I enter the team manager’s name, employee ID, email address, and office number
- THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
- WHEN I select the engineer option
- THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
- WHEN I select the intern option
- THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
- WHEN I decide to finish building my team
- THEN I exit the application, and the HTML is generated



## Install

Clone project.
Run the following line of code in your terminal to install all the needed packages: 
```
npm i
```

## Tests

Run the following line of code in the terminal to run the tests for this app : 
```
npm run test
```
You will see all 4 test pages and all 14 tests pass for the app. 

## Usage

Once all the packages have been installed, open terminal and run the following code in command line : 
```
node index.js
```
You will be prompted with questions to fill out employee information. Each type of employee you select will ask an additional question specific to the role of the employee. Once you have added all the employees you need select 'Im all done'. Your employee cards will then generate to the generateTeam.html where you can then view your team. 

## Built With
- HTML
- CSS
- Bootstrap 
- JavaScript
- Node.js
  - Inquirer
  - Jest

## Screen shots

![Shot-1](images/app-shot.png)
![Shot-2](images/test-shot.png)