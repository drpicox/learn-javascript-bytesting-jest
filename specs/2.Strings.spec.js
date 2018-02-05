describe("Strings", () => {

  describe("constants", () => {

    it("\"hello\", \"a\", \"long word\" are constans", () => {
      expect("hello").toBe("hello");
      expect("a").toBe("a");
      expect("long word").toBe("long word");
    });

    it("can be written with 'single quotes' instead of double quoetes", () => {
      expect('hello').toBe('hello');
      expect('a').toBe('a');
      expect('long word').toBe('long word');
    });

    it("can be written with `back-tick` instead of double quotes", () => {
      expect('hello').toBe(`hello`);
      expect('a').toBe(`a`);
      expect('long word').toBe(`long word`);
    });

    it("strings with `back-tick` are called template literals", () => {
      expect('hello 2 you').toBe(`hello ${2} you`);
    });

    it("template literals can be multiline, adds \\n automatically", () => {
      expect('hello\nworld').toBe(`hello
world`)
    });

    it('template literals can use interpolation with ${expression}', () => {
      const saluteTo = "world";

      expect('hello world').toBe(`hello ${saluteTo}`);
      expect('the answer is 42').toBe(`the answer is ${2 + 2 * 20}`);
    });

    it("character is a string with length 1", () => {
      expect("e").toBe("hello"[1])
    });

  });

  describe("encoded as UCS-2", () => {

    it("each position is 16bits and most characters are length 1", () => {
      expect(5).toBe("hello".length);
      expect(6).toBe("mataró".length);
      expect(4).toBe("νερό".length);
      expect(2).toBe("中国".length);
      expect(1).toBe("水".length);
    });

    it("some characters have double length", () => {
      expect(2).toBe("𝄞".length);
    });

  });

  describe("operators", () => {

    it("a + b concatenates two strings", () => {
      expect('hello world').toBe("hello " + "world");
    });

  });

  describe("comparisons", () => {

    it("are alphabetically", () => {
      expect(false).toBe("jon" < "cersei");
      expect(false).toBe("sansa" <= "arya");
      expect(true).toBe("jaime" >= "davos");
      expect(true).toBe("samwell" > "daenerys");
    });

    it("two strings are equal if have the same length and same characters", () => {
      expect(false).toBe("jon" === "jonnas");
      expect(true).toBe("podrick" !== "hodor");
    });

    it("things are equal only if they are of the same type", () => {     
      expect(false).toBe("2" === 2);
      expect(true).toBe("2" !== 2);
    });

    it("do not trust abstract equality comparisons (a == b, a != b)", () => {
      expect(true).toBe("" == false);
      expect(true).toBe("" == []);
      expect(true).toBe("tywin" != true);
      expect(false).toBe("joffrey" != ["joffrey"]);
    });

  });

  describe("methods", () => {

    it("slice(begin, end) gets a substring from the string", () => {
      expect('hell').toBe("hello".slice(0, 4));
    });

    it("slice(begin) gets the substring starting at begin", () => {
      expect('world').toBe("hello world".slice(6));
    });

    it("slice(-begin) gets the substring starting at the last character count", () => {
      expect('world').toBe("hello world".slice(-5));
    });

    it("indexOf finds the first occurrence of a substring", () => {
      expect(3).toBe("foobar".indexOf("bar"));
    });

    it("indexOf returns -1 if no matching", () => {
      expect(-1).toBe("foobar".indexOf("pop"));
    });

    it("includes true if there is an occurrence of a substring", () => {
      expect(true).toBe("foobar".includes("bar"));
    });

    it("includes returns false if no matching", () => {
      expect(false).toBe("foobar".includes("pop"));
    });

    it("toUpperCase converts a string to uppercase", () => {
      expect('HELLO').toBe("Hello".toUpperCase());
    });

    it("toLowerCase converts a string to lowercase", () => {
      expect('hello').toBe("Hello".toLowerCase());
    });

  });

  describe("cast to String", () => {

    it("can convert any object to string with String()", () => {
      expect('3').toBe(String(3));
    });

  });

});
