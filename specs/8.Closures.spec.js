describe('Closures', () => {

  it('inner functions can use parent arguments', () => {
    const makeConstant = (number) => {
      return () => number; 
    };
    const six = makeConstant(6);

    expect(solveme).toBe(six());
  });

  it('inner functions can use parent variables', () => {
    const makeCountFn = () => {
      let count = 0;
      return () => {
        count += 1;
        return count;
      };
    };
    let countGuests = makeCountFn();

    expect(solveme).toBe(countGuests());
  });

  it('each time that a parent is called a new set of variables is created', () => {
    const makeCountFn = () => {
      let count = 0;
      return () => {
        count += 1;
        return count;
      };
    };
    let countGuests = makeCountFn();
    let countAudience = makeCountFn();

    expect(solveme).toBe(countGuests());
    expect(solveme).toBe(countGuests());
    expect(solveme).toBe(countAudience());
    expect(solveme).toBe(countGuests());
    expect(solveme).toBe(countAudience());
  });

  it('can can be used to create objects with private variables (module pattern)', () => {
    const counter = (() => {
      let count = 0;
      return {
        incr() { count += 1; }, 
        decr() { count -= 1; }, 
        get() { return count; },
      };
    })();

    counter.incr();
    counter.incr();
    expect(solveme).toBe(counter.get());
    expect(solveme).toBe(counter.count);
  });

  it('use array traversal high order functions', () => {
    const makeConstants = () => {
      return [1,2,3].map(i => {
        return () => i;
      });
    }
    const [one,two,three] = makeConstants();

    expect(solveme).toBe(one());
    expect(solveme).toBe(two());
    expect(solveme).toBe(three());
  });

  it('avoid loops', () => {
    const makeConstants = () => {
      let result = [];
      let i = 0;
      while (i < 3) {
        result[i] = () => i + 1;
        i++;
      }
      return result;
    }
    const [one,two,three] = makeConstants();

    expect(solveme).toBe(one());
    expect(solveme).toBe(two());
    expect(solveme).toBe(three());
  });

  it('a closure is very similar to an object', () => {
    const makeCountFn = () => {
      let count = 0;
      return () => {
        count += 1;
        return count;
      };
    };
    class Counter {
      constructor() {
        this._count = 0;
      }
      count() {
        this._count += 1;
        return this._count;
      }
    }
    let countGuests = makeCountFn();
    let audienceCounter = new Counter();
    expect(solveme).toBe(countGuests());
    expect(solveme).toBe(audienceCounter.count());
  });

  it('but closures has private variables', () => {
    const makeCountFn = () => {
      let count = 0;
      return () => {
        count += 1;
        return count;
      };
    };
    class Counter {
      constructor() {
        this._count = 0;
      }
      count() {
        this._count += 1;
        return this._count;
      }
    }
    let countGuests = makeCountFn();
    let audienceCounter = new Counter();
    expect(solveme).toBe(countGuests.count);
    expect(solveme).toBe(audienceCounter._count);
  });

});
