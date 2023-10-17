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
    <div v-if="store.movie.length === 0 && store.tv.length === 0"
    class="message">
      <h1>{{ store.message }}</h1>
    </div>
    <div v-else>
      <FilmsContainer v-if="store.movie.length > 0"/>
      <SeriesContainer v-if="store.tv.length > 0"/>
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
  .message h1{
    font-size: 4.5rem;
  }
}

</style>