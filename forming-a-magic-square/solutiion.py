import itertools

def is_magic_square(square):
    n = len(square)
    target_sum = sum(square[0])

    # Check rows
    for row in square:
        if sum(row) != target_sum:
            return False

    # Check columns
    for j in range(n):
        if sum(square[i][j] for i in range(n)) != target_sum:
            return False

    # Check diagonals
    diag1_sum = sum(square[i][i] for i in range(n))
    diag2_sum = sum(square[i][n - i - 1] for i in range(n))
    if diag1_sum != target_sum or diag2_sum != target_sum:
        return False

    return True

def generate_magic_squares(n):
    # Generate all permutations of the numbers 1 to n^2
    numbers = list(range(1, n**2 + 1))
    permutations = itertools.permutations(numbers)


    # Check each permutation to see if it forms a magic square
    magic_squares = []
    for perm in permutations:
        square = [list(perm[i:i+n]) for i in range(0, len(perm), n)]
        if is_magic_square(square):
            magic_squares.append(square)

    return magic_squares

# Example usage:
n = 3  # Size of the magic square
magic_squares = generate_magic_squares(n)


def formingMagicSquare(s):
    if is_magic_square(s):
        return 0
    
    minCost = 0
    for square in magic_squares:
        cost = 0
        for i in range(3):
            for j in range(3):
                cost += abs(square[i][j] - s[i][j])
        print(cost)
        if cost <  minCost or minCost == 0:
            minCost = cost


    return minCost


print(formingMagicSquare([  [5, 9, 2],
  [3, 5, 7],
  [8, 1, 6],]))
