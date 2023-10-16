<script>
import FilmContainer from './partials/FilmContainer.vue';
import SeriesContainer from './partials/SeriesContainer.vue';
export default {
    name: 'Main',
    components:{
        FilmContainer,
        SeriesContainer
    }  
}
</script>

<template>
  <div class="container">
    <FilmContainer />
    <SeriesContainer />
  </div>
</template>

<style>

</style>