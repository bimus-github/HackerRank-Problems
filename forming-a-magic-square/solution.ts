function isMagicSquare(s: number[][]) {
  const n = s.length;
  const sum = (n * (n * n + 1)) / 2;

  // check rows
  for (let i = 0; i < n; i++) {
    let rowSum = 0;
    for (let j = 0; j < n; j++) {
      rowSum += s[i][j];
    }
    if (rowSum !== sum) {
      return false;
    }
  }

  // check columns
  for (let j = 0; j < n; j++) {
    let colSum = 0;
    for (let i = 0; i < n; i++) {
      colSum += s[i][j];
    }
    if (colSum !== sum) {
      return false;
    }
  }

  // check diagonals
  let diagSum1 = 0;
  let diagSum2 = 0;
  for (let i = 0; i < n; i++) {
    diagSum1 += s[i][i];
    diagSum2 += s[i][n - i - 1];
  }
  if (diagSum1 !== sum || diagSum2 !== sum) {
    return false;
  }

  return true;
}

function generateMagicSquares(n: number) {
  const magicSquares: number[][][] = [];
  const numbers = Array.from({ length: n * n }, (_, i) => i + 1);

  const permutations = (numbers: number[]) => {
    let results: number[][] = [];

    if (numbers.length === 1) {
      results.push([numbers[0]]);
    }

    for (let i = 0; i < numbers.length; i++) {
      const rest = numbers.slice(0, i).concat(numbers.slice(i + 1));
      const permutationsOfRest = permutations(rest);

      for (let j = 0; j < permutationsOfRest.length; j++) {
        results.push([numbers[i]].concat(permutationsOfRest[j]));
      }
    }

    return results;
  };

  permutations(numbers).forEach((element: number[]) => {
    const square: number[][] = [];

    for (let i = 0; i < n; i++) {
      const row: number[] = [];
      for (let j = 0; j < n; j++) {
        row.push(element[i * n + j]);
      }
      square.push(row);
    }

    // console.log("element: ", element);
    if (isMagicSquare(square)) {
      magicSquares.push(square);
    }
  });

  return magicSquares;
}

const magicSquares = generateMagicSquares(3);

function formingMagicSquare(s) {
  if (isMagicSquare(s)) {
    return 0;
  }

  let min = 0;

  magicSquares.forEach((square) => {
    let cost = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (s[i][j] !== square[i][j]) {
          cost += Math.abs(square[i][j] - s[i][j]);
        }
      }
    }
    console.log(cost);
    if (cost < min || min === 0) {
      min = cost;
    }
  });

  return min;
}

formingMagicSquare([
  [7, 9, 2],
  [3, 5, 7],
  [8, 1, 6],
]);
