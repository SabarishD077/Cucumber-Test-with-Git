$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:\\Users\\SABARISH\\eclipse-workspace\\CucumberPractice\\src\\Features\\Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 12,
  "name": "Test Login Page",
  "description": "",
  "id": "login-feature;test-login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@PracticeSession"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of the page is",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user clicks on Sign in",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"sabarishd077@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user types \"sabarish123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Login_page()"
});
formatter.result({
  "duration": 17122042479,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_the_page_is()"
});
formatter.result({
  "duration": 31513486,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_Sign_in()"
});
formatter.result({
  "duration": 2931934624,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sabarishd077@gmail.com",
      "offset": 13
    }
  ],
  "location": "LoginStepDefinition.user_enters_username(String)"
});
formatter.result({
  "duration": 716838573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sabarish123",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_types_password(String)"
});
formatter.result({
  "duration": 2459357462,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Test Login Page",
  "description": "",
  "id": "login-feature;test-login-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@PracticeSession"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of the page is",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user clicks on Sign in",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"sabarishd077@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user types \"sabarish124\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Login_page()"
});
formatter.result({
  "duration": 10370174095,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_the_page_is()"
});
formatter.result({
  "duration": 24582993,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_Sign_in()"
});
formatter.result({
  "duration": 2667088977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sabarishd077@gmail.com",
      "offset": 13
    }
  ],
  "location": "LoginStepDefinition.user_enters_username(String)"
});
formatter.result({
  "duration": 446696443,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sabarish124",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_types_password(String)"
});
formatter.result({
  "duration": 1666656403,
  "status": "passed"
});
});