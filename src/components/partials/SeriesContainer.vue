<script>
import { store } from '../../data/store';
import Card from './Card.vue';
export default {
    name: 'SeriesContainer',
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
  <h1>Serie TV</h1>
  <Card v-for="card in store.tv"
  :key="card.id"
  :title="card.name"/>
</template>

<style>

</style>