function birthday(s: number[], d: number, m: number): number {
  let count = 0;

  s.forEach((_, i) => {
    if (i + m <= s.length) {
      if (s.slice(i, i + m).reduce((a, b) => a + b, 0) === d) {
        count++;
      }
    }
  });

  return count;
}
