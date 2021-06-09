<template>
<form
  id="app"
  @submit="checkForm"
  action=""
  method="post"
>

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
    <input type="checkbox" id="28" value="28" v-model="genre">
<label for="Action">Action</label>
<input type="checkbox" id="12" value="12" v-model="genre">
<label for="Adventure">Adventure</label>
<input type="checkbox" id="16" value="16" v-model="genre">
<label for="Animation">Animation</label>
<input type="checkbox" id="35" value="35" v-model="genre">
<label for="Comedy">Comedy</label>
<input type="checkbox" id="80" value="80" v-model="genre">
<label for="Crime">Crime</label>
<input type="checkbox" id="99" value="99" v-model="genre">
<label for="Documentary">Documentary</label>
<input type="checkbox" id="18" value="18" v-model="genre">
<label for="Drama">Drama</label>
<input type="checkbox" id="10751" value="10751" v-model="genre">
<label for="Family">Family</label>
<input type="checkbox" id="14" value="14" v-model="genre">
<label for="Fantasy">Fantasy</label>
<input type="checkbox" id="36" value="36" v-model="genre">
<label for="History">History</label>
<input type="checkbox" id="27" value="27" v-model="genre">
<label for="Horror">Horror</label>
<input type="checkbox" id="10402" value="10402" v-model="genre">
<label for="Music">Music</label>
<input type="checkbox" id="9648" value="9648" v-model="genre">
<label for="Mistery">Mistery</label>
<input type="checkbox" id="10749" value="10749" v-model="genre">
<label for="Romance">Romance</label>
<input type="checkbox" id="878" value="878" v-model="genre">
<label for="Science Fiction">Science Fiction</label>
<input type="checkbox" id="53" value="53" v-model="genre">
<label for="Thriller">Thriller</label>
<input type="checkbox" id="10770" value="10770" v-model="genre">
<label for="TV movie">TV movie</label>
<input type="checkbox" id="10752" value="10752" v-model="genre">
<label for="War">War</label>
<input type="checkbox" id="37" value="37" v-model="genre">
<label for="Western">Western</label>
  </p>
  <div class="FormDate">
    <input
      class="FormDate__input FormDate__input--day"
      type="number"
      placeholder="dd">
    <span class="FormDate__divider">/</span>
    <input
      class="FormDate__input FormDate__input--month"
      type="number"
      placeholder="mm">
    <span class="FormDate__divider">/</span>
    <input
      class="FormDate__input FormDate__input--year"
      type="number"
      placeholder="yyyy">
  </div>

  <p>
    <input
      type="submit"
      value="Submit"
    >
  </p>

</form>
</template>
<script>
//import axios from "axios";
export default {
  name: "add_movie",

  data: function () {
    return {
      errors:[],
    name:null,
    age:null,
    movie:null,
    genre: []
    };
  },

  methods: {
    checkForm:function(e) {
      if(this.name && this.age) return true;
      this.errors = [];
      if(!this.name) this.errors.push("Name required.");
      if(!this.age) this.errors.push("Age required.");
      e.preventDefault();
    }
  },
};
</script>
