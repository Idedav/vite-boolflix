<script>
import { store } from '../../data/store';

export default {
    name: 'Card',
    props:{
      cardObj: Object,
      title: String,
      orginalTitle: String
    },
    methods:{
      getFlag(){
        switch(this.cardObj.original_language){
          case 'en':
            return true
            break;
          case 'it':
            return true
            break;
          default:
            return false
        }
      }
    }
}
</script>

<template>
  <div class="dc-card">
      <img :src="[cardObj.poster_path === null ?  '/public/image_not_available.jpg' : `https://image.tmdb.org/t/p/w342${cardObj.poster_path}`]" alt="">
      <div class="overview">
        <h1>{{ title }}</h1>
        <h2>{{ orginalTitle }}</h2>
        <div class="lang">
          <img v-if="getFlag()"
          :src="`/public/${cardObj.original_language}.png`" alt="">
          <span v-else>{{ cardObj.original_language }}</span>
        </div>
        <span>{{ cardObj.vote_average }}</span>
        <p>{{ cardObj.overview }}</p>
      </div>
  </div>
</template>

<style lang="scss" scoped>

.dc-card {
  width: 350px;
  height: 550px;
  margin: 15px 15px;
  position: relative;
  img{
    width: 100%;
    height: 100%;
  }
  .overview{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    background-color: rgba(0, 0, 0, .5);
    color: white;
    padding: 20px;
    overflow: auto;
    // display: none;
    // &:hover{
    //   display: block;
    // }
    p{
      font-size: 1.5rem;
    }
    .lang{
      width: 50px;
    }
  }
}

</style>