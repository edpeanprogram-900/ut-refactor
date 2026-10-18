function getResponse(score, machineActive) {
    let response;

    if (machineActive) {
        if (score === true) {
            response = "This is not possible, an error has occurred.";
        } else if (score === null) {
            response = "This is not possible, an error has occurred.";
        } else if (isNaN(score)) { // isNaN() devuelve true si un valor es NaN. Recurso consultado para resolver las UT 17, 18 y 19: https://www.w3schools.com/jsref/jsref_isnan.asp
            response = "This is not possible, an error has occurred.";
        } else if (score < 0 || score > 100) {
            response = "This is not possible, an error has occurred.";
        } else if (score <= 19) {
            response = "That was a terrible score — total fail!";
        } else if (score <= 39) {
            response = "You know some things, but it's a pretty bad score. Needs improvement.";
        } else if (score <= 69) {
            response = "You did a passable job, not bad!";
        } else if (score <= 89) {
            response = "That's a great score, you really know your stuff.";
        } else if (score <= 100) {
            response = "What an amazing score! Did you cheat? Are you for real?";
        }
    } else {
        response = "Please switch the machine on.";
    }

    return response;
}





