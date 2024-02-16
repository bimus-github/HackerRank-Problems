def climbingLeaderboard(ranked, player):
    """
    Calculate the ranking of players based on their scores.

    Args:
    ranked (list): A list of ranked scores in descending order.
    player (list): A list of player scores.

    Returns:
    list: A list of rankings for each player.
    """
    # Remove duplicate scores and sort the ranked scores in descending order
    unique_ranked = sorted(set(ranked), reverse=True)
    
    # Calculate the ranking for each player
    rankings = []
    for play in player:
        while unique_ranked and play >= unique_ranked[-1]:
            unique_ranked.pop()
        rankings.append(len(unique_ranked) + 1)
    
    return rankings

print(climbingLeaderboard([1], [1,1]))