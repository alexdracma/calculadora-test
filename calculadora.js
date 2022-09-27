function suma(num1, num2) {
    return num1 + num2;
}

function resta(num1, num2) {
    return num1 - num2;
}

function multiplicacion(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    if (num2 === 0) {
        return "NaN";
    }
    return num1 / num2;
}

module.exports = {
    suma,
    resta,
    multiplicacion,
    division
};