# End to End FixPDQ testing
How to install the cypress setup
1. Install Node.js
3. Install Cypress
```bash
npm install cypress 
```
4. Install “cypress-cucumber-preprocessor”: “^3.0.0"
```bash
npm cypress-cucumber-preprocessor
```
5. Install “mocha”: “5.2.0"
```bash
npm mocha
```
6. Install “mochawesome”: “4.1.0"
```bash
npm mochawesome
```
7. Install “mochawesome-merge”: “2.0.1"
```bash
mochawesome-merge
```
8. Install “mochawesome-report-generator”: “4.0.1"
```bash
mochawesome-report-generator
```
# How to run cypress tests
1. Clone repo - https://dev.azure.com/fixPDQ/fixPDQ/_git/fixPDQ
2. Open New Terminal
3. Go to project path/fixPDQ
4. For UI Cypress
 ==> Run Command <npx cypress open>
OUT: It will open the Ui of cypress and shows all feature files
3. For headless
 ==> Run Command <npm run test>
 
# Remote Repository
https://dev.azure.com/fixPDQ/fixPDQ/_git/fixPDQ

# Definition of the Prerequisite
1. Cypress-Cucumber-Preprocessor ==> cypress-cucumber-preprocessor allows you to use “common” steps
2. Mocha ==>Mocha is a feature-rich JavaScript test framework running on node. ... Mocha tests run serially, allowing for flexible and accurate reporting.
3. Mochawesome ==>Mochawesome is a customized Javascript testing reporter for mocha.
4. mochawesome-merge ==>mochawesome-merge is use to merge multiple report for mocha.
5. mochawesome-report-generator = >mochawesome-merge is use to generate report in (.html).
