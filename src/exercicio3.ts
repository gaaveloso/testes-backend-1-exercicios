export interface User {
    id: string
    name: string
    role: string
}

export const users: User[] = [
    { id: "u001", name: "Astrodev", role: "ADMIN"},
    { id: "u002", name: "João", role: "NORMAL"},
    { id: "u003", name: "PEDRO", role: "NORMAL"},
]

// const astrodevExists = users.find((user) => user.name === "Astrodev")
// console.log(astrodevExists)