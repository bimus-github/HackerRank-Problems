def nonDivisibleSubset(k, S):
    remainders_count = {i: 0 for i in range(k)}

    for num in S:
        remainders_count[num % k] += 1

    max_subset_size = 0

    if k % 2 == 0:
        max_subset_size += min(1, remainders_count[k // 2])
    
    for i in range(1, k // 2 + 1):
        max_subset_size += max(remainders_count[i], remainders_count[k - i])
    
    return max_subset_size



print(nonDivisibleSubset([1, 7, 2, 4], 3))