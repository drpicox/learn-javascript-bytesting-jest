describe("Objects", () => {

  describe("JSON", () => {

    it("{} is an empty object", () => {
      expect(solveme).toEqual(jasmine.any(Object));
    });

    it('{hello: "world"} is an object with one field', () => {
      expect(solveme).toEqual(jasmine.any(Object));
    });

    it("JSON.parse converts JSON strings to obejcts", () => {
      expect(solveme).toEqual(JSON.parse('{"a":1,"b":[2,3]}'));
    });

    it("JSON.stringify converts any object to JSON", () => {
      expect(solveme).toEqual(JSON.stringify({b:3}));
    });

  });

  describe("get set", () => {

    let object;
    beforeEach(() => {
      object = {
        hello: "world",
        all: 42,
      };
    });

    it("you can use . to get the value of a property", () => {
      expect(solveme).toBe(object.all);
    });

    it("you can use [string] to get the value of a property", () => {
      expect(solveme).toBe(object["hello"]);
    });

    it("you can use . to set the value of a property", () => {
      object.hello = "you";
      expect(solveme).toEqual(object);
    });

    it("you can use [string] to set the value of a property", () => {
      object["hello"] = "here";
      expect(solveme).toEqual(object);
    });

    it("return undefined if the property is not defined", () => {
      expect(solveme).toBe(object.foo);
      expect(solveme).toBe(object["bar"]);
    });

    it("you can add dynamically any property", () => {
      object.foo = "banana";
      object["bar"] = "apple";
      expect(solveme).toEqual(object);
    });

  });

  describe("walk", () => {

    let object;
    beforeEach(() => {
      object = {
        hello: "world",
        all: 42,
      };
    });

    it("Object.keys() gets an array with all the property keys", () => {
      expect(solveme).toEqual(Object.keys(object));
    });

    it("Object.values() gets an array with all property values", () => {
      expect(solveme).toEqual(Object.values(object));
    });

    it("Object.keys() can be used to walk all properties of an object", () => {
      let result;
      Object.keys(object).forEach(key => {
        let value = object[key];
        if (typeof value === 'string') {
          result = `${key}=${value}`
        }
      });
      expect(solveme).toBe(result);
    });

  });

  describe("spread", () => {

    let salute;
    let source;
    beforeEach(() => {
      salute = {
        hello: "world",
      };
      meaning = {
        all: 42,
      };
    });

    it("makes a copy of the object", () => {
      let copy = {...salute};
      salute.hello = 'catelyn';

      expect(solveme).toEqual(copy);
    });

    it("merges objects", () => {
      let merge = {...salute, ...meaning};

      expect(solveme).toEqual(merge);
    });

    it("last merge prevails", () => {
      let saluteLoras = { hello: 'loras' }
      let merge = { ...salute, ...meaning, ...saluteLoras };

      expect(solveme).toEqual(merge);
    });

    it("it can combine with other properties", () => {
      let merge = { ...salute, child: 'joffrey' };

      expect(solveme).toEqual(merge);
    });
  });

  describe("destructuring", () => {

    let main;
    beforeEach(() => {
      main = {
        peter: "tyrion",
        kit: 'jon',
      };
    });

    it("can get a property value", () => {
      let { peter } = main;

      expect(solveme).toEqual(peter);
    });

    it("can remaining an property", () => {
      let { peter, ...rest } = main;

      expect(solveme).toEqual(rest);
    });

  });

  describe("computed keys", () => {

    let main;
    beforeEach(() => {
      main = {
        peter: "tyrion",
      };
    });

    it("can get a property value", () => {
      let other = { ['sophie']: 'sansa' };

      expect(solveme).toEqual(other);
    });

    it("can be combined with destructuring", () => {
      let other = { ...main, ['maisie']: 'arya' };

      expect(solveme).toEqual(other);
    });

    it("can be be used to substitute existing elements", () => {
      let other = { ...main, ['peter']: 'arthur' };

      expect(solveme).toEqual(other);
    });

  });

  xdescribe("complete later", () => {

    describe("get set", () => {
      let object;
      beforeEach(() => {
        object = {
          hello: "world",
          all: 42,
        };
      });

      it("you can use delete to remove properties", () => {
        object.foo = "bar";
        delete object.hello;
        delete object["all"];
        expect(solveme).toEqual(object);
      });

      it("non string keys are converted into string", () => {
        object[123] = {some: "value"};
        expect(solveme).toEqual(object["123"]);
      });

      it("non string keys are converted into string, consider using Map", () => {
        const redCar = {color: 'red'};
        const blueCar = {color: 'blue'};
        object[redCar] = 'is the fastest';
        object[blueCar] = 'is the slowest';
        expect(solveme).toEqual(object[redCar]);
      });

    });
  });

});

// BEGIN Shim to support old versions of node
(function() {
  const reduce = Function.bind.call(Function.call, Array.prototype.reduce);
  const isEnumerable = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable);
  const concat = Function.bind.call(Function.call, Array.prototype.concat);
  const keys = Reflect.ownKeys;

  if (!Object.values) {
    Object.values = function values(O) {
      return reduce(keys(O), (v, k) => concat(v, typeof k === 'string' && isEnumerable(O, k) ? [O[k]] : []), []);
    };
  }
})();
// END Shim to support old versions of node
