<script>
import { store } from '../../data/store';
import Card from './Card.vue';
export default {
    name: 'FilmContainer',
    components: {
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
  <h1>Film</h1>
  <Card v-for="card in store.movieList"
  :key="card.id"
  :title="card.title"/>
</template>

<style>

</style>