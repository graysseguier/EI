<template>

  <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors" :key="error.id">{{ error }}</li>
    </ul>
</p>

  <p>
    <label for="Title">Title</label>
    <input
      id="title"
      v-model="title"
      type="text"
      name="title"
    >
  </p>

  <p>
    <input type="checkbox" id="28" value="28" v-model="genre_ids">
<label for="Action">Action</label>
<input type="checkbox" id="12" value="12" v-model="genre_ids">
<label for="Adventure">Adventure</label>
<input type="checkbox" id="16" value="16" v-model="genre_ids">
<label for="Animation">Animation</label>
<input type="checkbox" id="35" value="35" v-model="genre_ids">
<label for="Comedy">Comedy</label>
<input type="checkbox" id="80" value="80" v-model="genre_ids">
<label for="Crime">Crime</label>
<input type="checkbox" id="99" value="99" v-model="genre_ids">
<label for="Documentary">Documentary</label>
<input type="checkbox" id="18" value="18" v-model="genre_ids">
<label for="Drama">Drama</label>
<input type="checkbox" id="10751" value="10751" v-model="genre_ids">
<label for="Family">Family</label>
<input type="checkbox" id="14" value="14" v-model="genre_ids">
<label for="Fantasy">Fantasy</label>
<input type="checkbox" id="36" value="36" v-model="genre_ids">
<label for="History">History</label>
<input type="checkbox" id="27" value="27" v-model="genre_ids">
<label for="Horror">Horror</label>
<input type="checkbox" id="10402" value="10402" v-model="genre_ids">
<label for="Music">Music</label>
<input type="checkbox" id="9648" value="9648" v-model="genre_ids">
<label for="Mistery">Mistery</label>
<input type="checkbox" id="10749" value="10749" v-model="genre_ids">
<label for="Romance">Romance</label>
<input type="checkbox" id="878" value="878" v-model="genre_ids">
<label for="Science Fiction">Science Fiction</label>
<input type="checkbox" id="53" value="53" v-model="genre_ids">
<label for="Thriller">Thriller</label>
<input type="checkbox" id="10770" value="10770" v-model="genre_ids">
<label for="TV movie">TV movie</label>
<input type="checkbox" id="10752" value="10752" v-model="genre_ids">
<label for="War">War</label>
<input type="checkbox" id="37" value="37" v-model="genre_ids">
<label for="Western">Western</label>
{{genre_ids}}
 <input type="number" name="vote_average" v-model.number="vote_average"> Vote Average
  </p>
  <div class="FormDate">
    <input
      class="FormDate__input FormDate__input--day"
      type="number"
      placeholder="dd" v-model="day">
    <span class="FormDate__divider">/</span>
    <input
      class="FormDate__input FormDate__input--month"
      type="number"
      placeholder="mm" v-model="month">
    <span class="FormDate__divider">/</span>
    <input
      class="FormDate__input FormDate__input--year"
      type="number"
      placeholder="yyyy" v-model="year">
  </div>

<input type="radio" id="true" value=true v-model="adult">
<label for="one">Yes</label>
<br>
<input type="radio" id="false" value=false v-model="adult">
<label for="two">No</label>
<br>
<span>Adult : {{ adult }}</span>

<button @click="envoie">Envoie</button>
</template>
<script>
import axios from "axios";
export default {
  name: "add_movie",

  data: function () {
    return {
    errors:[],
    title:null,
    month:null,
    day: null,
    year: null,
    genre_ids: [],
    vote_average: 0,
    date: null,
    adult:null,
    };
  },

  methods: {
      envoie: function(){
          this.checkForm();

          if (this.errors.length==0){
              axios
        .post(
          `${process.env.VUE_APP_BACKEND_BASE_URL}/movies/new`,
          {
              title: this.title,
              adult: this.adult,
              genre_ids: this.genre_ids,
              date: this.date,
              vote_average: this.vote_average
          }
        )
        .then((response) => {
          response.json("Movie added");
          console.log("Movie added");
        })
        .catch((error) => {
          this.moviesLoadingError = "An error occured while fetching movies.";
          console.log(error);
        });
          }
      },
    checkForm:function() {
      this.errors = [];
      if(!this.title) this.errors.push("title required.");
      if(!this.day) this.errors.push("day required.");
      if(!this.month) this.errors.push("month required.");
      if(!this.year) this.errors.push("year required.");
      if(this.genre_ids.length==0) this.errors.push("genre required");
      if(this.adult=="false"){
          this.adult=false;
      }
      if(this.adult=="true"){
          this.adult=true;
      }
      this.date=String(this.year)+"/"+String(this.month)+"/"+String(this.day);
    },
    },
};

</script>
