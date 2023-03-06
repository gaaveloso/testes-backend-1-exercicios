import {users} from "../src/exercicio3"

describe("testando arquivo exercicio3.ts", () => {
    test("", () => {
        const astrodevExists = users.find((user) => user.name === "Astrodev")
        expect(astrodevExists).toBeDefined()
    })
})

//Use .toBeDefined para verificar que uma variável não "undefined"