<template>
  <div class="area">
    <div class="container">
      <h2>{{ movie.original_title }}</h2>
      <p>{{ movie.release_date }}</p>
      <div class="single-img">
        <img
          alt="movie poster"
          :src="
            'https://image.tmdb.org/t/p/w300_and_h450_bestv2' +
            movie.poster_path
          "
          class="image"
        />
        <div class="middle">
          <div class="text">
            {{ movie.overview.slice(0, 250) + "..." }}
          </div>
        </div>
        <div class="button">
          <!-- Add icon library -->
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />

          <!-- Use an element to toggle between a like/dislike icon -->
          <i onclick="myFunction(this)" class="fa fa-thumbs-up"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Movie",
  props: {
    movie: Object,
  },
  created() {
    console.log(this.movie);
  },
};
</script>

<style scoped>
.container {
  position: relative;
  width: 50%;
}
.button {
  position: relative;
  align-content: center;
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
  position: relative;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
h2 {
  text-align: center;
}
/* .container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.container.img-area {
  position: relative;
}
.container.img-area.single-img {
  position: relative;
  height: 200;
  width: 300;
  padding: 0 20px 20px;
}
img:hover {
  transform: scale(1.05);
  opacity: 0.5;
  transition: 0.5s;
  cursor: pointer;
}
.container.img-area.single-img.details {
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 30px;
  background: rgba(46, 44, 44, 0.1);
  font-size: 10px;
  color: rgb(116, 31, 173);
  /* visibility: hidden;
  opacity: 0; */
/* transition: opacity 0.2s, visibility 0.2s; */
/* transform: scaleY(0);
  transition: 0.5s; */
/* }
.single-img:hover.details {
  visibility: visible;
  opacity: 1;
} */
</style>
