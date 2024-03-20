const report = require("multiple-cucumber-html-reporter");
report.generate({
    theme: "bootstrap",
    jsonDir: "./report/JSON",  // ** Path of .json file **//
    reportPath: "./report",
    reportSuiteAsScenarios: true,

    scenarioTimestamp: true,
    pageTitle : "Fixpdq Automation Test Results Report",
    reportName : "Fixpdq Automation Test Results Report",
    launchReport: true,
    metadata: {
        browser: {
            name: "Chrome",
            version: "94",
        },
        device: "Local test machine",
        platform: {
            name: "Windows",
            version: "21H1",
        },
    },
});