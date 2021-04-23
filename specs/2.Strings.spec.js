describe("Strings", () => {
  describe("constants", () => {
    it('"hello", "a", "long word" are constans', () => {
      expect(solveme).toBe("hello");
      expect(solveme).toBe("a");
      expect(solveme).toBe("long word");
    });

    it("can be written with 'single quotes' instead of double quoetes", () => {
      expect(solveme).toBe("hello");
      expect(solveme).toBe("a");
      expect(solveme).toBe("long word");
    });

    it("can be written with `back-tick` instead of double quotes", () => {
      expect(solveme).toBe(`hello`);
      expect(solveme).toBe(`a`);
      expect(solveme).toBe(`long word`);
    });

    it("strings with `back-tick` are called template literals", () => {
      expect(solveme).toBe(`hello ${2} you`);
    });

    it("template literals can be multiline, adds \\n automatically", () => {
      expect(solveme).toBe(`hello
world`);
    });

    it("template literals can use interpolation with ${expression}", () => {
      const saluteTo = "world";

      expect(solveme).toBe(`hello ${saluteTo}`);
      expect(solveme).toBe(`the answer is ${2 + 2 * 20}`);
    });

    it("character is a string with length 1", () => {
      expect(solveme).toBe("hello"[1]);
    });
  });

  describe("encoded as UCS-2", () => {
    it("each position is 16bits and most characters are length 1", () => {
      expect(solveme).toBe("hello".length);
      expect(solveme).toBe("mataró".length);
      expect(solveme).toBe("νερό".length);
      expect(solveme).toBe("中国".length);
      expect(solveme).toBe("水".length);
    });

    it("some characters have double length", () => {
      expect(solveme).toBe("𝄞".length);
    });
  });

  describe("operators", () => {
    it("a + b concatenates two strings", () => {
      expect(solveme).toBe("hello " + "world");
    });
  });

  describe("comparisons", () => {
    it("are alphabetically", () => {
      expect(solveme).toBe("jon" < "cersei");
      expect(solveme).toBe("sansa" <= "arya");
      expect(solveme).toBe("jaime" >= "davos");
      expect(solveme).toBe("samwell" > "daenerys");
    });

    it("two strings are equal if have the same length and same characters", () => {
      expect(solveme).toBe("jon" === "jonnas");
      expect(solveme).toBe("podrick" !== "hodor");
    });

    it("things are equal only if they are of the same type", () => {
      expect(solveme).toBe("2" === 2);
      expect(solveme).toBe("2" !== 2);
    });

    it("do not trust abstract equality comparisons (a == b, a != b)", () => {
      expect(solveme).toBe("" == false);
      expect(solveme).toBe("" == []);
      expect(solveme).toBe("tywin" != true);
      expect(solveme).toBe("joffrey" != ["joffrey"]);
    });
  });

  describe("methods", () => {
    it("slice(begin, end) gets a substring from the string", () => {
      expect(solveme).toBe("hello".slice(0, 4));
    });

    it("slice(begin) gets the substring starting at begin", () => {
      expect(solveme).toBe("hello world".slice(6));
    });

    it("slice(-begin) gets the substring starting at the last character count", () => {
      expect(solveme).toBe("hello world".slice(-5));
    });

    it("indexOf finds the first occurrence of a substring", () => {
      expect(solveme).toBe("foobar".indexOf("bar"));
    });

    it("indexOf returns -1 if no matching", () => {
      expect(solveme).toBe("foobar".indexOf("pop"));
    });

    it("includes true if there is an occurrence of a substring", () => {
      expect(solveme).toBe("foobar".includes("bar"));
    });

    it("includes returns false if no matching", () => {
      expect(solveme).toBe("foobar".includes("pop"));
    });

    it("toUpperCase converts a string to uppercase", () => {
      expect(solveme).toBe("Hello".toUpperCase());
    });

    it("toLowerCase converts a string to lowercase", () => {
      expect(solveme).toBe("Hello".toLowerCase());
    });
  });

  describe("cast to String", () => {
    it("can convert any object to string with String()", () => {
      expect(solveme).toBe(String(3));
    });
  });
});
