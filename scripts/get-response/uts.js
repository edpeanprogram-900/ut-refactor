console.log("| testNum | Pass/Fail | score | machineActive | [expectedResponse] | [response] |");
console.log("|-|-|-|-|-|-|");

let fails = 0;
let response;
let expectedResponse;
let testResult;

response = getResponse(75, false);
expectedResponse = "Please switch the machine on.";

if (response === expectedResponse) {
    testResult = "Pass";
} else {
    testResult = "Fail";
    fails++;
}

if (testResult === "Pass") {
    console.log("| 1 | " + testResult + " | 75 | false |");
} else {
    console.log("| 1 | " + testResult + " | 75 | false | " + expectedResponse + " | " + response + " |");
}

response = getResponse(75, true);
expectedResponse = "That's a great score, you really know your stuff.";

if (response === expectedResponse) {
    testResult = "Pass";
} else {
    testResult = "Fail";
    fails++;
}

if (testResult === "Pass") {
    console.log("| 2 | " + testResult + " | 75 | true");
} else {
    console.log("| 2 | " + testResult + " | 75 | true | " + expectedResponse + " | " + response + " |");
}

response = getResponse(150, true);
expectedResponse = "This is not possible, an error has occurred.";

if (response === expectedResponse) {
    testResult = "Pass";
} else {
    testResult = "Fail";
    fails++;
}

if (testResult === "Pass") {
    console.log("| 3 | " + testResult + " | 150 | true");
} else {
    console.log("| 3 | " + testResult + " | 150 | true | " + expectedResponse + " | " + response + " |");
}

console.log("");
console.log("Fails: " + fails);
