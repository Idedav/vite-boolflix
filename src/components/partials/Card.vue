<script>
export default {
    name: 'Card',
    props:{
      cardObj: Object,
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
    },
    computed:{
      rating(){
        return Math.ceil(this.cardObj.vote_average / 2) 
      }
    }
}
</script>

<template>
  <div class="dc-card">
      <img :src="[cardObj.poster_path === null ?  '/image_not_available.jpg' : `https://image.tmdb.org/t/p/w342${cardObj.poster_path}`]" alt="">
      <div class="overview">
        <div class="titles">
          <h1>{{ cardObj.title || cardObj.name }}</h1>
          <h2 v-if="cardObj.title != cardObj.original_title || cardObj.name != cardObj.original_name">
            {{ cardObj.original_title || cardObj.original_name}}
          </h2>
        </div>
        <div class="lang my-2">
          <img v-if="getFlag()"
          :src="`/${cardObj.original_language}.png`" alt="">
          <span v-else>{{ cardObj.original_language }}</span>
        </div>
        <div class="vote my-2">
          <i v-for="rate in rating"
          class="fa-solid fa-star"></i>
          <i v-for="rate in 5 - rating"
          class="fa-regular fa-star"></i>
        </div>
        <p>{{ cardObj.overview }}</p>
      </div>
  </div>
</template>

<style lang="scss" scoped>

.dc-card {
  width: 300px;
  height: 500px;
  margin: 15px 15px;
  position: relative;
  img{
    width: 100%;
    height: 100%;
  }
  .overview{
    width: 100%;
    height: 0px;
    position: absolute;
    bottom: 0px;
    background-color: rgba(0, 0, 0, .7);
    color: white;
    overflow: auto;
    transition: height .5s;
    .titles,
    .lang,
    .vote,
    p{
      padding: 5px 20px;
    }
    .vote{
      font-size: 1.5rem;
    }
    p{
      font-size: 1.6rem;
    }
    .lang{
      width: 100px;
    }
  }
  &:hover .overview{
    height: 100%;
  }
}

</style>