console.log("| testNum | score | machineActive | expectedResponse | response |");
console.log("|-|-|-|-|-|");

let response;

response = getResponse(75, false);
console.log("| 1 | 75 | false | Please switch the machine on. | " + response + " |");

response = getResponse(75, true);
console.log("| 2 | 75 | true | That's a great score, you really know your stuff. | " + response + " |");

response = getResponse(150, true);
console.log("| 3 | 150 | true | This is not possible, an error has occurred. | " + response + " |");
