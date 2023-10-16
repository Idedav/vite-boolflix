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
    getApi(type){
      store.tv = [];
      store.movie = [];
      axios.get(store.apiUrl + type,{
        params:{
          api_key: 'e99307154c6dfb0b4750f6603256716d',
          query: store.filmToSearch
        }
      })
      .then(res =>{
        store[type] = res.data.results 
      })
    }
  },
  mounted(){
  }
}
</script>

<template>
  <Header @search="getApi('movie'), getApi('tv')"/>
  <Main />
</template>

<style lang="scss">
@use './scss/Main.scss'

</style>