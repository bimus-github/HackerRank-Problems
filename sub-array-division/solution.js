function birthday(s, d, m) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    const sum = s.slice(i, i + m).reduce((a, b) => a + b, 0);
    if (sum === d) {
      count++;
    }
  }

  return count;
}

console.log(birthday([2, 2, 1, 3, 2], 4, 2));
