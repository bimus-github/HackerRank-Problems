function climbingLeaderboard(ranked, player) {
  // Remove duplicate scores and sort the ranked scores in descending order
  let uniqueRanked = [...new Set(ranked)].sort((a, b) => b - a);

  let result = [];

  for (let i = 0; i < player.length; i++) {
    const play = i;
    while (
      uniqueRanked.length > 0 &&
      player[play] >= uniqueRanked[uniqueRanked.length - 1]
    ) {
      uniqueRanked.pop();
    }
    result.push(uniqueRanked.length + 1);
  }

  return result;
}

console.log(
  climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])
);
