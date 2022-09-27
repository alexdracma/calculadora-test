// documentación https://philbarresi.com/jest-test-guide/

const {suma,resta,multiplicacion,division} = require("./calculadora");

describe("sumas", () => {
    test("1 + 1 = 2", () => {
        expect(suma(1,1)).toEqual(2);
    })
});

describe("resta", () => {
    test("1 - 3 = -2", () => {
        expect(resta(1,3)).toEqual(-2);
    })
});

describe("multiplicacion", () => {
    test("-5 * 0 = 0", () => {
        expect(multiplicacion(-5,0)).toEqual(0 || -0);
    }),
    test("-5 * -5 = 25", () => {
        expect(multiplicacion(-5,-5)).toEqual(25);
    })
});

describe("division", () => {
    test("1 / 0 = Indef", () => {
        expect(division(1,0)).toEqual("NaN");
    }),
    test("1 / -5 = -0.2", () => {
        expect(division(1,-5)).toEqual(-0.2);
    })
});