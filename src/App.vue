<script>
import axios from 'axios'
import { store } from './data/store';
import Header from './components/Header.vue'
import Main from './components/Main.vue'
export default {
  name: 'App',
  components:{
    Header,
    Main
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getApi(){
      store.movieList = [];
      store.seriesList = [];
      axios.get(store.apiUrlMovie,{
        params:{
          api_key: 'e99307154c6dfb0b4750f6603256716d',
          query: store.filmToSearch
        }
      })
      .then(res =>{
        store.movieList = res.data.results 
        console.log(store.movieList);
      })
      axios.get(store.apiUrlSeries,{
        params:{
          api_key: 'e99307154c6dfb0b4750f6603256716d',
          query: store.filmToSearch
        }
      })
      .then(res =>{
        store.seriesList = res.data.results
        console.log(store.seriesList)
      })
    }
  },
  mounted(){
  }
}
</script>

<template>
  <Header @search="getApi()"/>
  <Main />
</template>

<style lang="scss">
@use './scss/Main.scss'

</style>