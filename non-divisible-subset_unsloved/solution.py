def nonDivisibleSubset(k, S):
    result = []

    for i in range(0, len(S)):
        numbs = []
        for j in range(i+1, len(S)):
            if(S[i] + S[j]) % k != 0:
                numbs.append(S[j])
        
        if len(numbs) != 0:
            result.append(numbs + [S[i]])

    return result


print(nonDivisibleSubset(4, [19, 10, 12, 10, 24, 25, 22]))