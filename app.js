class TestMatchers {
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

function expect(actual) {
    return new TestMatchers(actual)
}

function describe(suiteName, fn) {
    try {
        console.log(`suite: ${suiteName}`)
        fn()
    } catch (err) {
        console.log(err.message)
    }
}

function it(testName, fn) {
    console.log(`test: ${testName}`)
    try {
        fn()
    } catch (err) {
        console.log(err)
        throw new Error("test run failed")
    }
}

describe("suite will fail", () => {
    it("should fail, true to be false", () => {
        expect(true).toBe(false)
    })

    it("tests numbers, 3 === 3", () => {
        expect(3).toBe(3)
    })

    it("tests truthy value, 'abc' to be truthy", () => {
        expect("abc").toBeTruthy()
    })
})

describe("second suite", () => {
    it("should succeed, true === true", () => {
        expect(true).toBe(true)
    })

    it("should succeed, 3 === 3", () => {
        expect(3).toBe(3)
    })

    it("should succeed, 'abc' to be truthy", () => {
        expect("abc").toBeTruthy()
    })
})
