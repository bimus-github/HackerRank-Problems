def extraLongFactorials(n):
    result = recursionFactorials(n)

    print(result)

# finde factorial by recursion
def recursionFactorials(n):
    if n == 1:
        return 1
    return n * recursionFactorials(n - 1)


print(extraLongFactorials(200))