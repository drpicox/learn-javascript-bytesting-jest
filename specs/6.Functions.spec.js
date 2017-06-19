describe("Functions", () => {

  describe("shorthand notation", () => {

    it("() => {} is the shortest function", () => {
      expect(solveme).toEqual(jasmine.any(Function));
    });

    it("(a,b) => {} accepts arguments", () => {
      expect(solveme).toEqual(jasmine.any(Function));
    });

    it("a => {} is a shorthand for one argument", () => {
      expect(solveme).toEqual(jasmine.any(Function));
    });

    it("() => n returns n", () => {
      const fn = () => 3;
      expect(solveme).toBe(fn());
    });

    it("n => n is identity", () => {
      const fn = n => n;
      expect(solveme).toBe(fn(5));
    });

    it("(a,b) => a+b sums two numbers", () => {
      const fn = (a,b) => a+b;
      expect(solveme).toBe(fn(2,3));
    });

    it("() => ({ hello: \"world\" }) requires parenthesis to return a constant object", () => {
      const fn = (a) => ({ hello: a });
      expect(solveme).toEqual(fn("world"));
      expect(solveme).toEqual(fn("you"));
    });

      it("() => { /*code*/ } accepts any arbitrary code inside brackets", () => {
        const fn = a => {
          if (a > 3) { return a; }
          else return 3;
        };
        expect(solveme).toEqual(fn(2));
        expect(solveme).toEqual(fn(5));
      });

  });

  describe("object function shorthand", () => {

    it("you can use parenthesis to declare a function in an object", () => {
      const object = {
        incr(a) { 
          return a + 1;
        },
      };
      expect(solveme).toBe(object.incr(2));
    });

  });

  describe("long notation", () => {

    it("function() {} was the shortest function", () => {
      expect(solveme).toEqual(jasmine.any(Function));
    });

    it("function(a,b) {} accepts arguments", () => {
      expect(solveme).toEqual(jasmine.any(Function));
    });

    it("function(a) {} there is no shorthand for one argument", () => {
      expect(solveme).toEqual(jasmine.any(Function));
    });

    it("function() { return n; } returns n", () => {
      const fn = function() { return 3; };
      expect(solveme).toBe(fn());
    });

    it("function name() { … } can have named", () => {
      function fn() { return 3; };
      expect(solveme).toBe(fn());
    });

    it("function (n) { return n; } is identity", () => {
      const fn = function (n) { return n; };
      expect(solveme).toBe(fn(5));
    });

    it("function (a, b) { return a + b; } sums two numbers", () => {
      const fn = (a,b) => a+b;
      expect(solveme).toBe(fn(2,3));
    });

    it("function() { return { hello: \"world\" }; } requires nothing special to return a constant object", () => {
      const fn = function(a) { return { hello: a }; };
      expect(solveme).toEqual(fn("world"));
      expect(solveme).toEqual(fn("you"));
    });

      it("function() { /*code*/ } accepts any arbitrary code inside brackets", () => {
        const fn = function(a) {
          if (a > 3) { return a; }
          else return 3;
        };
        expect(solveme).toEqual(fn(2));
        expect(solveme).toEqual(fn(5));
      });
      
  });

  describe("missmatching parameters / returns", () => {

    it("ignores extra parameters", () => {
      const fn = (a,b) => a + b;
      expect(solveme).toBe(fn(1,2,3));
    });

    it("converts missing parameters into undefined", () => {
      const fn = n => n;
      expect(solveme).toBe(fn());
    });

    it("always returns something, returns undefined by default", () => {
      const fn = () => {};
      expect(solveme).toBe(fn());
    });

    it("returns return undefined if no value specified", () => {
      const fn = () => { return; };
      expect(solveme).toBe(fn());
    });

  });

  describe("default arguments", () => {
    it('allows arguments with default value', () => {
      const fn = (n = 3) => n;

      const three = fn();
      const four = fn(4);
      expect(solveme).toBe(three);
      expect(solveme).toBe(four);
    });
  });

  describe("return standarized bug", () => {

    it("return does not need ; to finish", () => {
      const fn = () => {
        return 
          1 +
          1;
      };
      expect(solveme).toBe(fn());
    });

  });

  describe("high order functions", () => {

    it("functions can receive other functions", () => {
      const twice = (fn, value) => fn(fn(value));
      const incr = a => a + 1;
      const double = a => a * 2;

      expect(solveme).toBe(twice(incr, 2));
      expect(solveme).toBe(twice(double, 3));
    });

    it("functions can be defined in place as expressions", () => {
      const twice = (fn, value) => fn(fn(value));

      expect(solveme).toBe(twice(n => n / 2, 4));
    });

    it("functions can return other functions", () => {
      const compose = (fn1, fn2) => value => fn2(fn1(value));
      const incr = a => a + 1;
      const double = a => a * 2;

      expect(solveme).toBe(compose(incr, double)(3));
    });

  });

});
