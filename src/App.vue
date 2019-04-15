<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/times.gif">
      <!--<h1 class="title">Times App</h1>
      <button>Archive</button>
      <button>Times Wire</button>-->
      <br>
      <br>
      <router-link to="/Article Search">Go to Article Search</router-link>
      |
      <router-link to="/Top stories">Go to Top Stories</router-link>
      |
      <router-link to="/Home">Go to Home</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Article from './components/ArticleSearch.vue'
import Top from './components/Topstories.vue'

export default {
  name: 'app',
  components: {
    Home,
    Article,
    Top

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button{
  width: 500px;
  height: auto;
  display: block;
  margin-left: 580px;
  margin-top: 50px;
  margin-bottom: 50px;
  font-size: 45px;
}
.title{
  font-size: 70px;
  margin-top: 50px;
  font-family: cursive;
}
</style>
