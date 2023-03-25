const columnToNumber = require("./column-to-number");

test("'A' to equal 0", () => {
    expect(columnToNumber('A')).toBe(0);
});

test("'B' to equal 1", () => {
    expect(columnToNumber('B')).toBe(1);
});

test("'Z' to equal 25", () => {
    expect(columnToNumber('Z')).toBe(25);
});

test("'AA' to equal 26", () => {
    expect(columnToNumber('AA')).toBe(26);
});

test("'AB' to equal 27", () => {
    expect(columnToNumber('AB')).toBe(27);
});
