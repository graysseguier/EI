import axios from "axios";


    fetchMovies: function () {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&language=en-US&page=1`
        )
        .then((response) => {
          this.movies = response.data.results;
          console.log(response);
        })
        .catch((error) => {
          this.moviesLoadingError = "An error occured while fetching movies.";
          console.log(error);
        });
    },
  },
  created: function () {
    this.fetchMovies();
  },
