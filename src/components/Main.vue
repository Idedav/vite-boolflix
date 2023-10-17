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
  <div class="dc-container">
    <h1 v-if="store.movie.length === 0 && store.tv.length === 0">FAI LA TUA PRIMA RICERCA...</h1>
    <div v-else>
      <FilmsContainer v-if="store.movie.length > 0"/>
      <SeriesContainer v-if="store.tv.length > 0"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.dc-container{
  width: 80%;
  margin: 0 auto;
  padding-top: 200px;
}

</style>