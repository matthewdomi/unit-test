const { divide, multiply, substract, sum } = require("./math")
describe("Math", () => {
    it("should sum 2+2 to be 4", () => {
        const result = sum(2, 2);
        expect(result).toBe(4);
        expect(result).toBeGreaterThan(3);
    })

})

it("Should sum 2+2 to be 4", () => {
    const result = sum(2, 2);
    expect(result).toBe(4)
})

it("Should multiply 3*3 to  result to 9", () => {
    const result = multiply(3, 3);
    expect(result).toBe(9);
})

it("Should divide 4 by 2 to result to 2", () => {
    const result = divide(4, 2)
    expect(result).toBe(2)
})

it("Should substract 6 from 10 to result in 4", () => {
    const result = substract(10, 6)
    expect(result).toBe(4)
})

it("Should be falsy", () => {
    expect(undefined).toBeFalsy()
})

test("Array", () => {
    let days = ["Monday", "Tuesday", "Wednesday"]
    expect(days).not.toContain("Friday")
    expect(days).toContain("Monday")
})

test("Array", () => {
    let days = ["Monday", "Tuesday", "Wednesday"]
    expect(days).not.toContain("Friday")
})