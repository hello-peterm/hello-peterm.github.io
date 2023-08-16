const computerChooses = require("../core.js");

test("computerChooses returns positive integer", () => {
    expect(computerChooses()).not.toBeLessThan(0)
}),

test("computerChooses returns a value less than 3", () => {
    expect(computerChooses()).not.toBeGreaterThan(3)
})