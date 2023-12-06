class Matchers {
    constructor(actual) {
        this.actual = actual
    }

    toBe(expected) {
        if (expected === this.actual) {
            console.log(`Succeeded`)
        } else {
            console.log(`Fail - Actual: ${this.actual}, Expected: ${expected}`)
        }
    }

    toBeTruthy() {
        if (this.actual) {
            console.log(`Succeeded`)
        } else {
            console.log(
                `Fail - Expected value to be truthy but got ${this.actual}`
            )
        }
    }
}

function it(testName, fn) {
    console.log(`Test: ${testName}`)
    fn()
}

const expect = (actual) => {
    return new Matchers(actual)
}

it("Tests boolean values", () => {
    expect(true).toBe(false)
})

it("Tests numbers", () => {
    expect(3).toBe(2)
})

it("Tests truthy value", () => {
    expect("abc").toBeTruthy()
})
