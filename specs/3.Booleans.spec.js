describe("Booleans", () => {

  describe("constants", () => {

    it("false and true are the only existing booleans", () => {
      expect(true).toEqual(jasmine.any(Boolean));
      expect(false).toEqual(jasmine.any(Boolean));
    });

  });

  describe("operations", () => {

    it("logical and, or, and not", () => {
      expect(true).toBe(true && true);
      expect(true).toBe(true || false);
      expect(true).toBe(!false);
    });

  });

  describe("cast", () => {

    it("use Boolean() to convert from truthy/falsy booleans to boolean", () => {
      expect(true).toBe(Boolean(true));
      expect(false).toBe(Boolean(false));
    });

    it("use Boolean() to convert from truthy/falsy objects to boolean", () => {
      expect(true).toBe(Boolean([]));
      expect(true).toBe(Boolean({}));
      expect(false).toBe(Boolean(null));
      expect(false).toBe(Boolean(undefined));
    });

    it("use Boolean() to convert from truthy/falsy strings to boolean", () => {
      expect(true).toBe(Boolean("0"));
      expect(true).toBe(Boolean("false"));
      expect(false).toBe(Boolean(""));
    });

    it("use Boolean() to convert from truthy/falsy numbers to boolean", () => {
      expect(true).toBe(Boolean(1));
      expect(false).toBe(Boolean(0));
      expect(false).toBe(Boolean(NaN));
    });

  });

  describe("if conditions follows truthy/falsy rules", () => {

    it("example with \"3\"", () => {
      let a = "original";
      if ("3") {
        a = "changed";
      }
      expect('changed').toBe(a);
    });

    it("example with 0", () => {
      let a = "original";
      if (0) {
        a = "changed";
      }
      expect('original').toBe(a);
    });

    it("example with undefined", () => {
      let a = "original";
      if (undefined) {
        a = "changed";
      }
      expect('original').toBe(a);
    });

    it("example with \"false\"", () => {
      let a = "original";
      if ("false") {
        a = "changed";
      }
      expect('changed').toBe(a);
    });

  });

  describe("ternary", () => {

    it('? operator works like a C-like', () => {
      const aValue = 'a';
      const bValue = 'b';
      const result = 1 < 2 ? aValue : bValue;
      expect('a').toBe(result);
    });

    it('&& and || combination behaves very close to ? operator', () => {
      const aValue = 'a';
      const bValue = 'b';
      const result = 1 < 2 && aValue || bValue;
      expect('a').toBe(result);
    });

    it('&& has lazy evaluation, if first falsy returns first', () => {
      const result = null && 'second';
      expect(null).toBe(result);
    });

    it('&& has lazy evaluation, if first truthy returns second', () => {
      const result = 'first' && 'second';
      expect('second').toBe(result);
    });

    it('|| has lazy evaluation, if first falsy returns second', () => {
      const result = null || 'second';
      expect('second').toBe(result);
    });

    it('|| has lazy evaluation, if first truthy returns first', () => {
      const result = 'first' || 'second';
      expect('first').toBe(result);
    });

    it('|| can be used to define default values', () => {
      const user = { name: 'John' };
      const role = user.role || 'guest';
      expect('guest').toBe(role);
    });

    it('|| can be used to define ensure null instead of undefined', () => {
      const user = { name: 'John' };
      const role = user.role || null;
      expect(null).toBe(role);
    });

  });

});
