import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
  test("should return expected result", () => {
    const result = paintRequiredCalculator(50, 10);

    expect(result).toEqual(5);
  });
});

test("should return 0 if area is 0", () => {
  const result = paintRequiredCalculator(0, 10);
  expect(result).toEqual(0);
});

test("should handle non-numeric input for coverage per liter", () => {
  const result = paintRequiredCalculator(50, "abc");
  expect(result).toBeNaN(); // Expecting NaN for invalid input
});

test("should correctly handle large area values", () => {
  const result = paintRequiredCalculator(1000000, 10);
  expect(result).toEqual(100000); // 1000000 / 10 = 100000
});

test("should handle small coverage values", () => {
  const result = paintRequiredCalculator(50, 0.1);
  expect(result).toEqual(500); // 50 / 0.1 = 500
});

