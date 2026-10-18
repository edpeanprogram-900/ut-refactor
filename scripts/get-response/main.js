function getResponse(score, machineActive) {
    let response;

    if (machineActive) {
        switch (true) {
            case score === true:
                response = "This is not possible, an error has occurred.";
                break;
            case score === null:
                response = "This is not possible, an error has occurred.";
                break;
            case isNaN(score): // isNaN() comprueba si un valor no se puede convertir en un número válido. Recurso consultado: https://www.w3schools.com/jsref/jsref_isnan.asp
                response = "This is not possible, an error has occurred.";
                break;
            case score < 0 || score > 100:
                response = "This is not possible, an error has occurred.";
                break;
            case score <= 19:
                response = "That was a terrible score — total fail!";
                break;
            case score <= 39:
                response = "You know some things, but it's a pretty bad score. Needs improvement.";
                break;
            case score <= 69:
                response = "You did a passable job, not bad!";
                break;
            case score <= 89:
                response = "That's a great score, you really know your stuff.";
                break;
            default:
                response = "What an amazing score! Did you cheat? Are you for real?";
        }
    } else {
        response = "Please switch the machine on.";
    }

    return response;
}