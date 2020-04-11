<template>
  <div id="app">
    <sui-container>
      <div id="app-container">
        <h1>Budget Calculator</h1>
        <router-view />
      </div>
    </sui-container>
  </div>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

#app-container {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

h1 {
  text-align: center;
}
</style>
