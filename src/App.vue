<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a,
a {
  font-weight: bold;
  color: #35495e;
  text-decoration: none;
}

#nav a:hover,
a:hover,
#nav a.router-link-exact-active {
  color: #42b983;
}

body {
  margin: 0;
}
</style>
