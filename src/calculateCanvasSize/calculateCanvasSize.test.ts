import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  test("returns correct result", () => {
    const result = calculateCanvasSize("10", "100");

    expect(result).toEqual(1000);
  })
});

test("should return 0 if either length or width is 0", () => {
  const result = calculateCanvasSize("0", "100");
  expect(result).toEqual(0);
});

test("should return 0 if both length and width are 0", () => {
  const result = calculateCanvasSize("0", "0");
  expect(result).toEqual(0);
});

test("should handle negative values", () => {
  const result = calculateCanvasSize("-10", "100");
  expect(result).toEqual(-1000);
});

test("should handle non-numeric input", () => {
  const result = calculateCanvasSize("abc", "100");
  expect(result).toBeNaN(); // Expecting NaN for invalid input
});

test("should return NaN if length or width is an empty string", () => {
  const result = calculateCanvasSize("", "100");
  expect(result).toBeNaN();
});


