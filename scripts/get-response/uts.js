console.log("| testNum | Pass/Fail | score | machineActive | [expectedResponse] | [response] |");
console.log("|-|-|-|-|-|-|");

let scores = [75, 75, 150];

let machineStates = [false, true, true];

let expectedResponses = [
    "Please switch the machine on.",
    "That's a great score, you really know your stuff.",
    "This is not possible, an error has occurred."
];

let fails = 0;
let response;
let expectedResponse;
let testResult;

for (let i = 0; i < scores.length; i++) {
    response = getResponse(scores[i], machineStates[i]);
    expectedResponse = expectedResponses[i];

    if (response === expectedResponse) {
        testResult = "Pass";
    } else {
        testResult = "Fail";
        fails++;
    }

    if (testResult === "Pass") {
        console.log("| " + (i + 1) + " | " + testResult + " | " + scores[i] + " | " + machineStates[i] + " |");
    } else {
        console.log("| " + (i + 1) + " | " + testResult + " | " + scores[i] + " | " + machineStates[i] + " | " + expectedResponse + " | " + response + " |");
    }
}

console.log("");
console.log("Fails: " + fails);
