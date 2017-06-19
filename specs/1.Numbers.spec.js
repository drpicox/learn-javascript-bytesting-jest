describe("Numbers", () => {

  describe("constants", () => {

    it("1,2,5000 are numbers", () => {
      expect(solveme).toEqual(jasmine.any(Number));
      expect(solveme).toEqual(jasmine.any(Number));
      expect(solveme).toEqual(jasmine.any(Number));
    });

    it("1.2 -2.3 1e2 are also numbers", () => {
      expect(solveme).toEqual(jasmine.any(Number));
      expect(solveme).toEqual(jasmine.any(Number));
      expect(solveme).toEqual(jasmine.any(Number));
    });

    it("numbers are IEEE-754, they have low resolution", () => {
      // write only one number in the expectation, remember hint
      expect(solveme).toBe(0.1 + 0.2);
    });

    it("1/0 gives Infinity", () => {
      expect(solveme).toBe(Infinity);
    });

    it("gives NaN when something goes wrong, example 0 divided by 0", () => {
      expect(solveme).toEqual(NaN);
    });

  });

  describe("operations", () => {

    it("operate over numbers like in C/Java/C#", () => {
      expect(solveme).toBe(2 + 2 * 3 - 1);
    });

    it("has reminder", () => {
      expect(solveme).toBe(18 % 5);
    });

  });

  describe("comparisons", () => {

    it("has standard comparators", () => {
      expect(solveme).toBe(1 < 2);
      expect(solveme).toBe(1 <= 1);
      expect(solveme).toBe(1 >= 2);
      expect(solveme).toBe(1 > 1);
    });

    it("equal and different uses strict equality comparissions (a === b & a !== b)", () => {
      expect(solveme).toBe(1 === 2);
      expect(solveme).toBe(1 !== 2);
    });

    it("never use abstract equality (a == b or a != b) you cannot trust it", () => {     
      expect(solveme).toBe(2 == "2");
      expect(solveme).toBe(0 == []);
      expect(solveme).toBe(2 != "2");
      expect(solveme).toBe(0 != []);
    });

  });

  describe("methods", () => {

    it("toFixed converts a number into a string with a fixed number of decimals", () => {
      expect(solveme).toBe((3.14159).toFixed(2));
    });

  });

  describe("Math", () => {

    it("Math.max gets the maximum of two numbers", () => {
      expect(solveme).toBe(Math.max(2, 12));
    });

    it("Math.min gets the minimum of two numbers", () => {
      expect(solveme).toBe(Math.min(2, 12));
    });

    it("Math.floor gets the number without decimals rounded down", () => {
      expect(solveme).toBe(Math.floor(3.9));
      expect(solveme).toBe(Math.floor(-3.1));
    });

    it("Math.ceil gets the number without decimals rounded up", () => {
      expect(solveme).toBe(Math.ceil(3.2));
      expect(solveme).toBe(Math.ceil(-3.1));
    });

    it("Math.round gets the nearest integer", () => {
      expect(solveme).toBe(Math.round(5.1));
    });

  });

  describe("Cast to number", () => {

    it("use Number(string) to convert a string to a number", () => {
      expect(solveme).toBe(Number("5"));
      expect(solveme).toBe(Number("7.5"));
    });

    it("Number(string) gives NaN if string cannot be converted", () => {
      expect(solveme).toEqual(Number("e11.1"));
      expect(solveme).toEqual(Number("5pm"));
    });

  });

  describe("NaN", () => {

    it("NaN is NOT a NaN", () => {
      expect(solveme).toBe(NaN === NaN);
    });

    it("use isNaN(number) to know if it is NaN", () => {
      expect(solveme).toBe(isNaN(NaN));
    });

  });
  

});
