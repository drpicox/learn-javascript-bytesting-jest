describe('Async/Await', () => {

  const sleep = (ms = 0) => new Promise(resolve => {
    setTimeout(resolve, ms);
  });

  it('by default javascript code is synchronous: it waits nothing', () => {
    const startTime = Date.now();
    sleep(100); // 100ms = 0.1 second
    const stopTime = Date.now();

    // wait is 100 so... 
    // if it waits it should be at least 100
    // make your bigger guess
    expect(solveme).toBeLessThanOrEqual(stopTime - startTime);
  });

  it('javascript can emulate asynchronous code with async/await keywords', 
    async () => {
      const startTime = Date.now();
      await sleep(100); // 100ms = 0.1 second
      const stopTime = Date.now();

      // try a larger number now...
      expect(solveme).toBeLessThanOrEqual(stopTime - startTime);
    }
  );

  it('await more than one result in serie', 
    async () => {
      const startTime = Date.now();

      await sleep(100); // 100ms = 0.1 second
      const lapTime = Date.now();

      await sleep(100); // 100ms = 0.1 second
      const stopTime = Date.now();

      // try the largest (until stop passing, then - 10) number for each case
      expect(solveme).toBeLessThanOrEqual(lapTime - startTime);
      expect(solveme).toBeLessThanOrEqual(stopTime - startTime);
    }
  );

  it('stores "waits" in variables and await them later', 
    async () => {
      const startTime = Date.now();

      const sleepPromise = sleep(100); // 100ms = 0.1 second
      const lapTime = Date.now();

      await sleepPromise;
      const stopTime = Date.now();

      // try the largest (until stop passing, then - 10) number for each case
      expect(solveme).toBeLessThanOrEqual(lapTime - startTime);
      expect(solveme).toBeLessThanOrEqual(stopTime - startTime);
    }
  );

  it('makes waitings in parallel when saving "waits" in variables and resolving them later', 
    async () => {
      const startTime = Date.now();

      const sleepPromise1 = sleep(100); // 100ms = 0.1 second
      const sleepPromise2 = sleep(100); // 100ms = 0.1 second
      const lapTime = Date.now();

      await sleepPromise1;
      await sleepPromise2;
      const stopTime = Date.now();

      // try the largest (until stop passing, then - 10) number for each case
      expect(solveme).toBeLessThanOrEqual(lapTime - startTime);
      expect(solveme).toBeLessThanOrEqual(stopTime - startTime);
    }
  );

  it('await also throws errors thrown by async functions', async () => {
    const asyncThrow = async () => { throw new Error(); };

    let thrown = false;
    try {
      await asyncThrow();
    } catch (e) {
      thrown = true;
    }

    expect(solveme).toBe(thrown);
  });

  it('without await throws are not cached', async () => {
    const asyncThrow = async () => { throw new Error(); };

    let thrown = false;
    try {
      asyncThrow();
    } catch (e) {
      thrown = true;
    }

    expect(solveme).toBe(thrown);
    // but probably the console has a 
    // UnhandledPromiseRejectionWarning: Unhandled promise rejection
  });

  it('if a function is async it requires await to get the result', async () => {
    const asyncThree = async () => 3;

    const threeWithAwait = await asyncThree();
    const threeWithoutAwait = asyncThree();

    expect(solveme).toBe(threeWithAwait);
    expect(solveme).not.toBe(threeWithoutAwait);
  });

  it('if a function is async without await returns a promise', async () => {
    const asyncThree = async () => 3;
    const threeWithoutAwait = asyncThree();

    expect(solveme).toBeInstanceOf(Promise);
  });

  it('you can create your own promises', async () => {
    const threePromise = new Promise((resolve) => {
      resolve(3);
    });

    const three = await threePromise;
    expect(solveme).toBe(three);
  });

  it('use reject to make a promise throw an error when awaited', async () => {
    const rejectPromise = new Promise((resolve, reject) => {
      reject(new Error('rejected(not thrown) error'));
    });

    let thrown = false;
    try {
      await rejectPromise;
    } catch (e) {
      thrown = true;
    }

    expect(solveme).toBe(thrown);
  });

  it('Promise constructor receives a function that has resolve and reject functions as parameters that can be used in callbacks', async () => {
    const resolveIn100ms = new Promise((resolve, reject) => {
      setTimeout(resolve, 100);
    });

    const startTime = Date.now();
    await resolveIn100ms;
    const stopTime = Date.now();

    // try the largest (until stop passing, then - 10) number for each case
    expect(solveme).toBeLessThanOrEqual(stopTime - startTime);
  });

  it('Promise return results as resolve(result) argument', async () => {
    const resolveThreeIn100ms = new Promise((resolve, reject) => {
      setTimeout(() => resolve(3), 100);
    });

    const three = await resolveThreeIn100ms;

    expect(solveme).toBeLessThanOrEqual(three);
  });

});
