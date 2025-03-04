# Integration-Testing-using-Postman

## Problem Scenario
# dmoney REST API Testing Project

## Overview
This project focuses on testing the **dmoney REST API** using **Postman and Newman**. It includes test cases for various scenarios, a Postman collection with both positive and negative cases, a Newman test execution report, and API documentation.

### Requirements
- **Postman** for API testing
- **Newman** for command-line execution of Postman collections
- **GitHub** to store and document the project
- **Google Drive** to store issue reports and screenshots

## Test Scenarios

1. **Admin creates an Agent, 2 Customers, and a Merchant**
2. **Deposit money from the SYSTEM account to the Agent**
3. **Agent deposits money to a Customer**
4. **Check Agent's balance**
5. **Customer 1 sends money to Customer 2**
6. **Customer withdraws money to the Agent**
7. **Check Customer's balance and transaction statement by trnxId**
8. **Customer 2 makes a payment to the Merchant**
9. **Customer 2 checks balance and transaction statement**
10. **Merchant checks balance**

## Technology Used:
1. Postman
2. Newman

## Pre requisite:
1. NodeJs
2. Newman
3. Newman-html-extra

## To Generate Report:
- ``` git clone ```
- ``` npm i ```
- add the .env file(on request)
- ``` npm test ``` or ``` node report.js ```
## Documentataion

### API Documentation
https://documenter.getpostman.com/view/42431548/2sAYdkGoDy

### Bug and Improvement Report link
https://docs.google.com/spreadsheets/d/1bji32Pf5ZbYFP466-QcfxHNnQ99zST_h/edit?usp=sharing&ouid=102981712591594829857&rtpof=true&sd=true

### Newman Report


Each scenario includes **positive and negative test cases**.

### Setup Instructions

#### 1. Clone the Repository
```sh
 git clone <your-repository-url>
 cd dmoney-api-testing
```

#### 2. Import Postman Collection
- Open Postman
- Go to **File > Import**
- Select the Postman collection JSON file

#### 3. Run Tests Using Newman
Ensure you have **Newman** installed:
```sh
 npm install -g newman
```
Run the tests:
```sh
 newman run dmoney.postman_collection.json -r cli,html --reporter-html-export newman-report.html
```

#### 4. Generate Newman Report
Run the following command to generate an HTML report:
```sh
 newman run dmoney.postman_collection.json -r html --reporter-html-export report.html
```

#### 5. Publish Postman Documentation
- Go to **Postman > Collections**
- Click on `Share` → `Publish Documentation`
- Copy the generated link and update it in this README.

#### 6. Upload Screenshots to GitHub README
Add screenshots of your Newman report to the `README.md` under the **Reports** section.

### Postman Documentation
[Postman API Documentation](#) (Replace `#` with the actual link after publishing)

### Reports
![Newman Report Screenshot](screenshots/newman-report.png) (Replace with actual screenshot path)

### Issues and Suggestions
- A Google Sheet containing at least **5 bugs or improvements** has been created.
- The sheet includes detailed issue descriptions, steps to reproduce, expected vs actual results, priority, severity, and screenshots.
- [Google Sheet Link](#) (Replace `#` with the actual link to your issue report)

### API Authentication
- **Admin Credentials:**
  - Email: `admin@roadtocareer.net`
  - Password: `1234`
- **API Authentication Header:**
  - `X-AUTH-SECRET-KEY: ROADTOSDET`

### API Endpoints
- **User API Documentation**: [dmoney User API](https://dmoney.roadtocareer.net/api-docs/user)
- **Transaction API Documentation**: [dmoney Transaction API](https://dmoney.roadtocareer.net/api-docs/transaction)
