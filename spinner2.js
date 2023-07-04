const spin = (spinTime) => {
  const SYMBOLS = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];

  const getSymbol = (index) => {
    return SYMBOLS[(index + 1 + 4) % 4];
  };

  const interval = 200;
  let delay = 100;
  let index = -1;

  while (spinTime >= 0) {
    const symbol = getSymbol(index);
    const isFinalLoop = (() => {
      return spinTime - interval <= -1;
    })();

    setTimeout(() => {
      process.stdout.write(symbol);
      if (isFinalLoop) console.log("\n");
    }, delay);

    index = (index + 1 + SYMBOLS.length) % SYMBOLS.length;
    delay += interval;
    spinTime -= interval;
  }
};

spin(9000);