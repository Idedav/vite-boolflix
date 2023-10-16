<script>
import { store } from '../data/store';
import FilmsContainer from './partials/FilmsContainer.vue';
import SeriesContainer from './partials/SeriesContainer.vue';
export default {
    name: 'Main',
    components:{
        FilmsContainer,
        SeriesContainer
    },
    data(){
      return{
        store
      }
    }  
}
</script>

<template>
  <div class="container my-5">
    <h1 v-if="store.movie.length === 0">FAI LA TUA PRIMA RICERCA...</h1>
    <div v-else>
      <FilmsContainer />
      <SeriesContainer />
    </div>
  </div>
</template>

<style>

</style>