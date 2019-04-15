<template>
  <div class="Article">
  <h1>This is the Article page!</h1>
    <button v-on:click="seaechArticles()">Search</button>
    <div v-for="articles in articleData" class="articles">
      <h1>{{articles.pub_date}}</h1>
      <h3>{{articles.headline}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: {
  },
  data(){
    return{
      articleData:[]
    }
  },
  methods:{
    seaechArticles(){
      fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=13yQ8UuJN0GJDEkn4BiUT0GgOqk9zpiN')
      .then(data =>{
        return data.json()
      })
      .then(data =>{
        this.articleData = data.response.docs;
        console.log(this.articleData);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  color: #42b983;
}
</style>
