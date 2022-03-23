<template>
  <!-- <nav>
    <router-link to="/">Client</router-link> |
    <router-link to="/administrator">About</router-link>
  </nav> -->
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Pacifico&display=swap');

*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  color: rgb(239,24,127);

}
section{
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.font-architects{
  font-family: 'Architects Daughter', cursive;
}
.font-pacifico{
  font-family: 'Pacifico', cursive;
}
.section-title{
        height: 10%;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        font-size: 3.5vw;
    }
</style>
