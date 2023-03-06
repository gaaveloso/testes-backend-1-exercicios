import {exercicio1} from "../src/exercicio1"

describe("testando arquivo exercicio1.ts", () => {
    test("", () => {
        const result = exercicio1("5")
        expect(result).toBe(5)
    })
})