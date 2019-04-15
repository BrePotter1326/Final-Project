<template>
  <div class="hello">
  <h1>This is the Top Stories!</h1>
    <button v-on:click="searchTop()">Search</button>
    <div v-for="top in topData" class="top">
      <h1>{{top.pub_date}}</h1>
      <h3>{{top.subsectoinName}}</h3>
      <h3>{{top.subject}}</h3>
      <h3>{{top.word_count}}</h3>
      <h3>{{top.type_of_material}}</h3>
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
    topData:[]
    }
  },
  methods:{
    searchTop(){
      fetch('https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=13yQ8UuJN0GJDEkn4BiUT0GgOqk9zpiN')
      .then(data =>{
        return dataTwo.json()
      })
      .then(data =>{
        this.topData = data;
        console.log(this.topData)
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
