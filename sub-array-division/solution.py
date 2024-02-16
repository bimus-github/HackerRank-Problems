def birthday(s, d, m):
    # Write your code here
    count = 0
    for i in range(len(s)):
        if sum(s[i:i+m]) == d:
            count += 1
    return count

print(birthday([2,2,1,3,2], 4, 2)) # 2
print(birthday([3,3,5,5,5,1,1,1], 9, 3)) # 0