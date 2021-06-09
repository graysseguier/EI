import numpy as np
import json
from collections import OrderedDict

genres = [28, 12, 16, 35, 80, 99, 18, 10751, 14, 36,
          27, 10402, 9648, 10749, 878, 53, 10770, 10752, 37]


def vectorFilm(film):
    rep = np.zeros(22)
    for g in genres:
        if g in film["genre_ids"]:
            rep[g] = 1
    rep[20] = float(film["adult"])
    rep[21] = film["vote_average"]
    return rep


def scores(filmVector, otherFilms):
    for f in otherFilms:
        v = vectorFilm(f)
        f["score"] = np.dot(v, filmVector) / \
            (np.linalg.norm(filmVector)*np.linalg.norm(v))


def classement(films):
    return OrderedDict(sorted(films, key=lambda t: t[1]["score"]))


def recommandation(filmVector, otherFilms):
    otherFilmsDict = json.loads(otherFilms)
    scores(filmVector, otherFilmsDict)
    otherFilmsSorted = classement(otherFilmsDict)
    return json.dumps(otherFilmsSorted)
