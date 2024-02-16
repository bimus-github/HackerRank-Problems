function appendAndDelete(s, t, k) {
  const common_length = Math.min(s.length, t.length);

  const addCount = s.length - common_length;
  const deleteCount = t.length - common_length;

  const totalCount = addCount + deleteCount;

  if ((totalCount) => k || (k - totalCount) % 2 === 0) return "Yes";
  else return "No";
}

console.log(appendAndDelete("hackerhappy", "hackerrank", 9));
console.log(appendAndDelete(["a", "b", "c"], ["d", "e", "f"], 6));
