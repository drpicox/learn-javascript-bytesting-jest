describe("Booleans", () => {

  describe("constants", () => {

    it("false and true are the only existing booleans", () => {
      expect(solveme).toEqual(jasmine.any(Boolean));
      expect(solveme).toEqual(jasmine.any(Boolean));
    });

  });

  describe("operations", () => {

    it("logical and, or, and not", () => {
      expect(solveme).toBe(true && true);
      expect(solveme).toBe(true || false);
      expect(solveme).toBe(!false);
    });

  });

  describe("cast", () => {

    it("use Boolean() to convert from truthy/falsy booleans to boolean", () => {
      expect(solveme).toBe(Boolean(true));
      expect(solveme).toBe(Boolean(false));
    });

    it("use Boolean() to convert from truthy/falsy objects to boolean", () => {
      expect(solveme).toBe(Boolean([]));
      expect(solveme).toBe(Boolean({}));
      expect(solveme).toBe(Boolean(null));
      expect(solveme).toBe(Boolean(undefined));
    });

    it("use Boolean() to convert from truthy/falsy strings to boolean", () => {
      expect(solveme).toBe(Boolean("0"));
      expect(solveme).toBe(Boolean("false"));
      expect(solveme).toBe(Boolean(""));
    });

    it("use Boolean() to convert from truthy/falsy numbers to boolean", () => {
      expect(solveme).toBe(Boolean(1));
      expect(solveme).toBe(Boolean(0));
      expect(solveme).toBe(Boolean(NaN));
    });

  });

  describe("if conditions follows truthy/falsy rules", () => {

    it("example with \"3\"", () => {
      let a = "original";
      if ("3") {
        a = "changed";
      }
      expect(solveme).toBe(a);
    });

    it("example with 0", () => {
      let a = "original";
      if (0) {
        a = "changed";
      }
      expect(solveme).toBe(a);
    });

    it("example with undefined", () => {
      let a = "original";
      if (undefined) {
        a = "changed";
      }
      expect(solveme).toBe(a);
    });

    it("example with \"false\"", () => {
      let a = "original";
      if ("false") {
        a = "changed";
      }
      expect(solveme).toBe(a);
    });

  });

  describe("ternary", () => {

    it('? operator works like a C-like', () => {
      const aValue = 'a';
      const bValue = 'b';
      const result = 1 < 2 ? aValue : bValue;
      expect(solveme).toBe(result);
    });

    it('&& and || combination behaves very close to ? operator', () => {
      const aValue = 'a';
      const bValue = 'b';
      const result = 1 < 2 && aValue || bValue;
      expect(solveme).toBe(result);
    });

    it('&& has lazy evaluation, if first falsy returns first', () => {
      const result = null && 'second';
      expect(solveme).toBe(result);
    });

    it('&& has lazy evaluation, if first truthy returns second', () => {
      const result = 'first' && 'second';
      expect(solveme).toBe(result);
    });

    it('|| has lazy evaluation, if first falsy returns second', () => {
      const result = null || 'second';
      expect(solveme).toBe(result);
    });

    it('|| has lazy evaluation, if first truthy returns first', () => {
      const result = 'first' || 'second';
      expect(solveme).toBe(result);
    });

    it('|| can be used to define default values', () => {
      const user = { name: 'John' };
      const role = user.role || 'guest';
      expect(solveme).toBe(role);
    });

    it('|| can be used to define ensure null instead of undefined', () => {
      const user = { name: 'John' };
      const role = user.role || null;
      expect(solveme).toBe(role);
    });

  });

});
