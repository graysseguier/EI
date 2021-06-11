let genres = [28, 12, 16, 35, 80, 99, 18, 10751, 14, 36,
          27, 10402, 9648, 10749, 878, 53, 10770, 10752, 37];


function vectorFilm(film) {
    let rep = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    let n = rep.length
    for (let i in genres) {
        if (genres[i] in films["genre_ids"]) {
            rep[i] = 1;
        }
    };
    return rep;
}

function movieType(films) {
    let n = Object.keys(films).length;
    let sum = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    for (let film of films) {
        v = vectorFilm(film);
        for (let i in v) {
            sum[i]+=v[i];
        }
    }
    for (let j in sum) {
        sum[j] /= n;
    }
}

function produitScalaire(v1, v2) {
    if (v1.length == v2.length) {
        let sum = 0;
        for (let i in v1) {
            sum += v1[i]*v2[i];
        return sum;
        }
    }
}

function norme(vector) {
    return produitScalaire(vector, vector)
}

function sort(films) {
    let len = Object.keys(films).length;       
    let tmp, i, j;                  
    
    for(i = 1; i < len; i++) { 
      tmp = films[i]["scores"];
      j = i - 1;
      while (j >= 0 && films[j]["scores"] > tmp) {
        films[j+1] = films[j];
        j--;
      };
      films[j+1]["scores"] = tmp;
    }
    return films
  }

  function classement(filmVector, otherFilms) {
    let n = Object.keys(otherFilms).length;
    let rep = [];
    for (let film of otherFilms) {
        let v = vectorFilm(film);
        film["score"] = produitScalaire(filmVector, v)/(norme(v)*norme(filmVector));
        rep.push(film);
    };
    return sort(rep).reverse();
}  

function recommandation(filmsLiked, otherFilms) {
    let movieType = movieType(filmsLiked);
    return classement(movieType, otherFilms);
}