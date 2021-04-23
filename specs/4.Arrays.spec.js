describe("Arrays", () => {
  describe("constants follows JSON rules", () => {
    it('[1,2,3], [42,"sense",["of", "life"]], []', () => {
      expect(solveme).toEqual(jasmine.any(Array));
      expect(solveme).toEqual(jasmine.any(Array));
      expect(solveme).toEqual(jasmine.any(Array));
    });
  });

  let array;
  beforeEach(() => {
    array = [1, 2, 3];
  });

  describe("get set", () => {
    it("you can use [index] to read any position", () => {
      expect(solveme).toBe(array[1]);
    });

    it("you can use [index] to set any position", () => {
      array[1] = 4;
      expect(solveme).toEqual(array);
    });

    it("you can mix types", () => {
      array[1] = "missandei";
      expect(solveme).toEqual(array);
    });

    it("you get undefined if you read an unset number", () => {
      expect(solveme).toBe(array[5]);
      expect(solveme).toBe(array[-1]);
    });
  });

  describe("length", () => {
    it("length returns the actual length of the array", () => {
      expect(solveme).toBe(array.length);
    });
  });

  describe("can mutate", () => {
    it("unmutated array", () => {
      expect(solveme).toEqual(array);
    });

    describe("sort", () => {
      it("sort orders array contents", () => {
        array = ["sandor", "margaery", "stannis"];
        array.sort();

        expect(solveme).toEqual(array);
      });

      it("sort returns the array itself ordered", () => {
        array = ["sandor", "margaery", "stannis"];

        expect(solveme).toBe(array.sort());
      });

      it("sort orders strings by default, if no, it internally converts all elements to string", () => {
        array = [1, 5, 10];

        expect(solveme).toEqual(array.sort());
      });

      it("sort accepts a ordering function", () => {
        array = [1, 5, 10];

        expect(solveme).toEqual(array.sort((a, b) => a - b));
      });
    });

    describe("reverse", () => {
      it("reverses the contents of an array", () => {
        array.reverse();
        expect(solveme).toEqual(array);
      });

      it("returns the reversed array itself", () => {
        expect(solveme).toBe(array.reverse());
      });
    });
  });

  describe("non mutating operations", () => {
    describe("slice", () => {
      it("slice copies an array", () => {
        let copy = array.slice();
        array[2] = "c";

        expect(solveme).toEqual(copy);
      });

      it("slice(begin,end) can copy a part of an array", () => {
        expect(solveme).toEqual(["a", "b", 1, 2, 3, "c"].slice(2, 5));
      });

      it("slice(position) copies from the position to the end", () => {
        expect(solveme).toEqual(array.slice(1));
      });

      it("slice(-position) copies from the last nth position to the end", () => {
        expect(solveme).toEqual(array.slice(-1));
      });
    });

    describe("concat", () => {
      it("concatenates another array", () => {
        expect(solveme).toEqual(array.concat([4, 5]));
      });

      it("does not modifies the array", () => {
        array.concat([4, 5]);
        expect(solveme).toEqual(array);
      });
    });

    describe("iterators", () => {
      it("filter selects elements from the array", () => {
        expect(solveme).toEqual(array.filter((n) => n % 2 === 1));
      });

      it("filter can remove an element from array", () => {
        const newArray = array.filter((n) => n === 1);
        expect(solveme).toEqual(newArray);
      });

      it("map applies a function to each element", () => {
        expect(solveme).toEqual(array.map((n) => n * 2));
      });

      it("reduce(fn, initial) applies an accumulator operation", () => {
        expect(solveme).toEqual(array.reduce((s, n) => s + n, 0));
      });

      it("every evaluates if a condition is satisfied by all elements", () => {
        expect(solveme).toBe(array.every((n) => n >= 0));
        expect(solveme).toBe(array.every((n) => n % 2 === 0));
      });

      it("some evaluates if a condition is satisfied by any elements", () => {
        expect(solveme).toBe(array.some((n) => n % 2 === 0));
        expect(solveme).toBe(array.some((n) => n === -1));
      });

      it("some can be used to process an array until a condition found", () => {
        let result = 1;
        array.some((n) => {
          result *= n;
          return n === 2;
        });
        expect(solveme).toBe(result);
      });

      it("forEach executes a function for each element", () => {
        let count = 0;
        array.forEach((n) => (count += 1));

        expect(solveme).toBe(count);
      });

      it("none modifies the array", () => {
        array.filter((n) => n % 2 === 1);
        array.map((n) => n * 2);
        array.reduce((s, n) => s + n, 0);
        array.every((n) => n >= 0);
        array.some((n) => n === 2);
        array.forEach((n) => n++);

        expect(solveme).toEqual(array);
      });
    });

    describe("finders", () => {
      beforeEach(() => {
        array = ["a", "b", "c"];
      });

      it("indexOf(value) looks for the same exact value position", () => {
        expect(solveme).toBe(array.indexOf("b"));
      });

      it("indexOf(value) returns -1 if the element does not exists", () => {
        expect(solveme).toBe(array.indexOf("e"));
      });

      it("find returns the first element that satisfies a condition", () => {
        expect(solveme).toBe(array.find((l) => l > "a"));
      });

      it("find returns undefined if no element satisfies the condition", () => {
        expect(solveme).toBe(array.find((l) => l > "e"));
      });

      it("findIndex returns the position of the first element that satisfies a condition", () => {
        expect(solveme).toBe(array.findIndex((l) => l > "a"));
      });

      it("findIndex returns -1 if no element satisfies the condition", () => {
        expect(solveme).toBe(array.findIndex((l) => l > "e"));
      });
    });
  });

  describe("spread", () => {
    it("you can create a copy with spread", () => {
      let copy = [...array];
      array[1] = "x";

      expect(solveme).toEqual(copy);
    });

    it("can create a copy of the array with new elements", () => {
      expect(solveme).toEqual([0, ...array, 4]);
    });

    it("can concatenate arrays", () => {
      let other = ["a", "b", "c"];
      expect(solveme).toEqual([...array, ...other]);
    });
  });

  describe("destructuring", () => {
    it("you can get the first elements", () => {
      let [one, two] = array;

      expect(solveme).toEqual(one + two);
    });

    it("you can get the remaining elements of the array", () => {
      let [first, ...tail] = array;

      expect(solveme).toEqual(tail);
    });
  });

  xdescribe("complete later", () => {
    describe("get set", () => {
      it("you can set any position (grows dinamically)", () => {
        array[4] = 5;
        expect(solveme).toBe(array[4]);
      });

      it("all positions between the setted and last become undefined", () => {
        array[4] = 5;
        expect(solveme).toEqual(array);
      });
    });

    describe("length", () => {
      it("length grows when more elements are added", () => {
        array[3] = 4;
        expect(solveme).toEqual(array.length);
      });

      it("length can be set to shrink the array", () => {
        array.length = 2;
        expect(solveme).toEqual(array);
      });

      it("length can be set to enlarge the array filled with undefined", () => {
        array.length = 5;
        expect(solveme).toEqual(array);
      });

      it("length grows when more elements are added and fills with undefineds", () => {
        array[4] = 5;
        expect(solveme).toEqual(array.length);
      });
    });

    describe("can mutate", () => {
      describe("can behave as a stack", () => {
        describe("from behind", () => {
          it("push adds a new element to the end", () => {
            array.push(4);
            expect(solveme).toEqual(array);
          });

          it("pop removes the last element", () => {
            array.pop();
            expect(solveme).toEqual(array);
          });

          it("pop returns the value of the last element", () => {
            expect(solveme).toBe(array.pop());
          });
        });

        describe("from head", () => {
          it("unshift adds a new element to the beggining", () => {
            array.unshift(0);
            expect(solveme).toEqual(array);
          });

          it("pop removes the first element", () => {
            array.shift();
            expect(solveme).toEqual(array);
          });

          it("pop returns the value of the first element", () => {
            expect(solveme).toBe(array.shift());
          });
        });
      });

      describe("can behave as a queue", () => {
        it("you can add elements in the end and get them from the front", () => {
          array.push(4);
          array.shift();

          expect(solveme).toEqual(array);
        });

        it("you can add elements in the head and get them from the tail", () => {
          array.unshift(0);
          array.pop();

          expect(solveme).toEqual(array);
        });
      });

      describe("splice", () => {
        it("splice can insert numbers in any position", () => {
          array = ["a", "c", "d"];
          array.splice(1, 0, "b");
          expect(solveme).toEqual(array);
        });

        it("splice can remove numbers in any position", () => {
          array = ["a", "x", "b", "c"];
          array.splice(1, 1);
          expect(solveme).toEqual(array);
        });
      });
    });
  });
});
