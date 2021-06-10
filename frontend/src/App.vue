<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="https://filmfaremiddleeast.com/wp-content/uploads/2020/03/movies-to-watch-article-size.jpg"
      width="600"
      height="300"
    />
    <div class="navbar">
      <router-link class="nav-link" to="/">Home</router-link>
      <router-link class="nav-link" to="/users">Users</router-link>
      <DropdownButton name="Genre">
        <a href="#">Action</a>
        <a href="#">Adventure</a>
        <a href="#">Animation</a>
        <a href="#">Comedy</a>
        <a href="#">Crime</a>
        <a href="#">Documentary</a>
        <a href="#">Drama</a>
        <a href="#">Family</a>
        <a href="#">Fantasy</a>
        <a href="#">History</a>
        <a href="#">Horror</a>
        <a href="#">Music</a>
        <a href="#">Mystery</a>
        <a href="#">Romance</a>
        <a href="#">Science Fiction</a>
        <a href="#">Thriller</a>
        <a href="#">TV Movie</a>
        <a href="#">War</a>
        <a href="#">Western</a>
      </DropdownButton>
      <DropdownButton name="Date">
        <a href="#">2021</a>
        <a href="#">2020</a>
        <a href="#">2019</a>
        <a href="#">Other</a>
      </DropdownButton>
      <DropdownButton name="Language">
        <a href="#">English</a>
        <a href="#">French</a>
        <a href="#">Japanese</a>
        <a href="#">Other</a>
      </DropdownButton>
      <router-link class="nav-link" to="/Add Movie">Add Movie</router-link>
      <router-link class="nav-link" to="/about">About</router-link>

      <div class="search-container">
        <form action="/action_page.php">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
import DropdownButton from "@/components/DropdownButton.vue";
export default {
  components: { DropdownButton },
  name: "App",
};
</script>

<style scoped>
.nav {
  text-align: center;
  padding: 30px;
}

.nav-link {
  font-weight: bold;
  color: #2c3e50;
}

.nav-link.router-link-exact-active {
  color: #4254b9;
}

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
