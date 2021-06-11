<template>
  <br />
  <h1>Recommended movies</h1>

  <li v-for="movie in movies" :key="movie.id" :movie="movie">
    <Movie :movie="movie" />
  </li>
  {{ moviesLiked }}
  <div v-if="usersLoadingError">{{ usersLoadingError }}</div>
  <div v-if="moviesLoadingError">{{ moviesLoadingError }}</div>
</template>

<script>
import axios from "axios";
import Movie from "@/components/Movie.vue";
import recommandation from "recommandation\recommandation.js";
//import UsersTable from "@/components/UsersTable.vue";

export default {
  components: { Movie },
  name: "Recommandation",

  data: function () {
    return {
      movieName: "",
      movies: "",
      moviesLiked: null,
      user: "",
      moviesLoadingError: "",
      usersLoadingError: "",
      filmsLiked: [],
    };
  },

  methods: {
    MovieUser: function () {
      axios
        .post("http://localhost:3000/users/email", {
          email: "eddy.fficile@orange.fr",
        })
        .then((response) => {
          this.moviesLiked = response.data.users[0].filmsLiked;
          console.log(this.moviesLiked);
        })
        .catch((error) => {
          this.usersLoadingError =
            "An error occured while fetching moviesLiked.";
          console.log(error);
        });
    },
    fetchMovies: function () {
      axios
        .get(function (user, id) {
          MovieModel.find({ id: id });
        })
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
    //this.fetchMovies();
    this.MovieUser();
  },
};
</script>

<style scoped>
.home {
  text-align: center;
  background: rgb(0, 0, 0);
  color: #fff;
  font-family: "Courier New", Courier, monospace;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #bd2531;
}
.parent {
  display: flex;
  flex-direction: row;
  height: 250px;
}
.child {
  width: 40%;
}
.container {
  display: flex; /* or inline-flex */
}

.container {
  display: flex; /* or inline-flex */
}
.container {
  flex-direction: column-reverse;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

.navbar {
  overflow: hidden;
  background-color: #333;
}

.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.navbar a:hover,
.dropdown:hover .dropbtn {
  background-color: red;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}
/* SEARCH BAR */
.topnav .search-container {
  float: right;
  height: 200px;
}

.topnav input[type="text"] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
}

.topnav .search-container button {
  float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.topnav .search-container button:hover {
  background: #ccc;
}

@media screen and (max-width: 600px) {
  .topnav .search-container {
    float: none;
  }
  .topnav a,
  .topnav input[type="text"],
  .topnav .search-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .topnav input[type="text"] {
    border: 1px solid #ccc;
  }
}
</style>
