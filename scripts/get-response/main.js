function getResponse(score, machineActive) {
    let response;

    if (machineActive) {
        if (score === true) {
            response = "This is not possible, an error has occurred.";
        } else if (score === null) {
            response = "This is not possible, an error has occurred.";
        } else if (isNaN(score)) { // isNaN() comprueba si un valor no se puede convertir en un número válido. Recurso consultado para resolver las UT 17, 18 y 19: https://www.w3schools.com/jsref/jsref_isnan.asp
            response = "This is not possible, an error has occurred.";
        } else {
            response = score < 0 || score > 100
                ? "This is not possible, an error has occurred."
                : score <= 19
                    ? "That was a terrible score — total fail!"
                    : score <= 39
                        ? "You know some things, but it's a pretty bad score. Needs improvement."
                        : score <= 69
                            ? "You did a passable job, not bad!"
                            : score <= 89
                                ? "That's a great score, you really know your stuff."
                                : "What an amazing score! Did you cheat? Are you for real?";
        }
    } else {
        response = "Please switch the machine on.";
    }

    return response;
}







