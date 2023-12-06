class Matchers {
    constructor(actual) {
        this.actual = actual
    }

    toBe(expected) {
        if (expected === this.actual) {
            console.log(`Succeeded`)
        } else {
            throw new Error(
                `Fail - Actual: ${this.actual}, Expected: ${expected}`
            )
        }
    }

    toBeTruthy() {
        if (this.actual) {
            console.log(`Succeeded`)
        } else {
            console.log(
                `Fail - Expected value to be truthy but got ${this.actual}`
            )
            throw new Error(
                `Fail - Expected value to be truthy but got ${this.actual}`
            )
        }
    }
}

function it(testName, fn) {
    console.log(`Test: ${testName}`)
    try {
        fn()
    } catch (err) {
        console.log(err)
        throw new Error("Test run failed")
    }
}

function describe(suiteName, fn) {
    try {
        console.log(`Suite: ${suiteName}`)
        fn()
    } catch (err) {
        console.log(err.message)
    }
}

const expect = (actual) => {
    return new Matchers(actual)
}

describe("Test suite", () => {
    it("Tests boolean values", () => {
        expect(true).toBe(false)
    })

    it("Tests numbers", () => {
        expect(3).toBe(3)
    })

    it("Tests truthy value", () => {
        expect("abc").toBeTruthy()
    })
})

describe("Second suite", () => {
    it("Tests boolean values", () => {
        expect(true).toBe(true)
    })

    it("Tests numbers", () => {
        expect(3).toBe(3)
    })

    it("Tests truthy value", () => {
        expect("abc").toBeTruthy()
    })
})
