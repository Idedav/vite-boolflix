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
  <div class="container-fluid d-flex flex-wrap my-5">
    <h1>Film</h1>
    <Card v-for="card in store.movie"
    :key="card.id"
    :cardObj="card"
    :title="card.title"
    :orginalTitle="card.original_title"/>
  </div>
</template>

<style lang="scss" scoped>

  h1{
    width: 100%;
    margin-left: 15px;
    font-size: 4.5rem;
  }
</style>