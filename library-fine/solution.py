def libraryFine(d1, m1, y1, d2, m2, y2):
    if y1 > y2 :
        return 10000
    elif m1 > m2 and y1 == y2:
        return (m1 - m2) * 500
    elif d1 > d2 and m1 == m2 and y1 == y2:
        return (d1 - d2) * 15
    else:
        return 0
    

print(libraryFine(2 ,7, 1014, 1, 1, 1015))