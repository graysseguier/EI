import* from ./recommandation.py


def movieType(films):
    filmsDict = json.loads(films)
    n = len(filmsDict)
    sum = np.zeros(22)
    for key in filmsDict:
        v = vector(filmsDict[key])
        sum = sum + v
    return sum/n
