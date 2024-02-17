function square(a: number, b: number): number {
  let count = 0;
  while (a <= b) {
    const isInt = Math.sqrt(a) % 1 === 0;

    if (isInt) {
      count++;
    }

    a++;
  }

  return count;
}

// second solution only understandabel to mathematics

// function secondSolution(a: number, b: number): number {
//   let count = Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a));
//   if (Math.sqrt(b) % 1 === 0) count++;

//   return count;
// }
