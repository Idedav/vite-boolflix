<script>
import { store } from '../data/store';
import Card from './partials/Card.vue';
export default {
    name: 'Main',
    components:{
        Card
    },
    data(){
      return{
        store
      }
    }  
}
</script>

<template>
  <div class="dc-container">
    <div v-if="store.movie.length === 0 && store.tv.length === 0"
    class="message">
      <h1>{{ store.message }}</h1>
    </div>
    <div v-else>

      <div v-if="store.type != 'tv'" 
      class="container-fluid d-flex flex-wrap my-5">
        <h1>Film</h1>
        <Card v-for="card in store.movie"
        :key="card.id"
        :cardObj="card"/>
      </div>

      <div v-if="store.type != 'film'" 
      class="container-fluid d-flex flex-wrap my-5">
        <h1>Serie TV</h1>
        <Card v-for="card in store.tv"
        :key="card.id"
        :cardObj="card"/>
      </div>

  </div>
  </div>
</template>

<style lang="scss" scoped>

.dc-container{
  width: 80%;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  h1{
      width: 100%;
      margin-left: 15px;
      font-size: 4.5rem;
    }
}


</style>