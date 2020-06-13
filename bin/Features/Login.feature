Feature: Login Feature
@PracticeSession
Scenario Outline: Test Login Page
Given user is already on Login page
When title of the page is
When user clicks on Sign in 
Then user enters "<username>"
Then user types "<password>"

Examples:
 | username || password |
 | sabarishd077@gmail.com | | sabarish123 |
 | sabarishd077@gmail.com | | sabarish124 |
