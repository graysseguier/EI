<template>
  <div class="area">
    <div class="container">
      <h2 v-if="movie.original_title && movie.original_title.length < 25">
        {{ movie.original_title }}
      </h2>
      <h2 v-if="movie.original_title && movie.original_title.length >= 25">
        {{ movie.original_title.slice(0, 25) + "..." }}
      </h2>
      <h4>Rating:{{ movie.vote_average }}</h4>
      <h4>Popularity:{{ movie.popularity }}</h4>
      <h4>{{ movie.release_date }}</h4>
      <div class="single-img">
        <img
          v-if="movie.poster_path"
          alt="movie poster"
          :src="
            'https://image.tmdb.org/t/p/w300_and_h450_bestv2' +
            movie.poster_path
          "
          class="image"
        />
        <img
          v-else
          alt="movie poster"
          :src="'https://papystreaming.black/uploads/posts/2016-07/1467388126_no_poster.png'"
          class="image"
        />
        <div class="middle">
          <div v-if="movie.overview" class="text">
            {{ movie.overview.slice(0, 250) + "..." }}
          </div>
        </div>
        <button @click="disliker" class="fa fa-heart red" v-if="like"></button>
        <button @click="liker" class="fa fa-heart white" v-if="!like"></button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Movie",
  props: {
    movie: Object,
  },

  data: function () {
    return {
      like: false,
    };
  },
  methods: {
    liker: function () {
      this.like = true;
      axios
        .put("http://localhost:3000/users/like", {
          email: "eddy.fficile@orange.fr",
          movie_id: this.movie.id,
        })
        .then((response) => {
          response.json("Movie liked");
        })
        .catch((error) => {
          this.moviesLoadingError = "An error occured while fetching movies.";
          console.log(error);
        });
    },
    disliker: function () {
      this.like = false;
      axios
        .put("http://localhost:3000/users/dislike", {
          email: "eddy.fficile@orange.fr",
          movie_id: this.movie.id,
        })
        .then((response) => {
          response.json("Movie Unliked");
        })
        .catch((error) => {
          this.moviesLoadingError = "An error occured while fetching movies.";
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.red {
  color: red;
}
.white {
  color: white;
}
.container {
  position: relative;
  width: 50%;
  align-content: center;
  margin-bottom: 100px;
}
button {
  position: relative;
  align-content: center;
  margin-top: 10px;
  font-size: 200%;
  cursor: pointer;
  border: none;
  border-radius: 20px;
  background-color: transparent;
}

.image {
  opacity: 1;
  display: block;
  width: 300px;
  height: 450px;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
  text-align: center;
}

.middle {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.container:hover .image {
  transform: scale(1.1);
  opacity: 0.3;
  cursor: pointer;
}

.container:hover .middle {
  opacity: 0.8;
  cursor: pointer;
}

.text {
  background-color: #7c8581d8;
  color: white;
  font-size: 20px;
  width: 220px;
  height: 380px;
  padding: 20px 32px;
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  position: absolute;
  right: -207px;
  bottom: -269px;
}
h2 {
  text-align: center;
}
</style>
