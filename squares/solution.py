def squares(a, b):
    count = int(b**0.5) - int(a**0.5)
    if a**0.5 % 1 == 0:
        count += 1
    return count

print(squares(17, 29))