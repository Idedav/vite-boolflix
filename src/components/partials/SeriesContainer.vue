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
  <div class="container-fluid d-flex flex-wrap my-5">
    <h1>Serie TV</h1>
    <Card v-for="card in store.tv"
    :key="card.id"
    :cardObj="card"
    :title="card.name"
    :orginalTitle="card.original_name"/>
  </div>
</template>

<style lang="scss" scoped>

h1{
    width: 100%;
    margin-left: 15px;
    font-size: 4.5rem;
  }

</style>