<script>
import { store } from '../data/store';
export default {
    name: 'Header',
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <div class="container-fluid d-flex justify-content-between align-items-center">
        <div class="logo m-3">
            <img src="/public/logo-boolflix.png" alt="">
        </div>

        <div class="search m-3">
            <input v-model="store.filmToSearch" 
            @keyup.enter="$emit('search')"
            type="text" 
            class="mx-3">
            <select name="" id="">
                <option value="all">All</option>
                <option value="tv">Serie TV</option>
                <option value="film">Film</option>
            </select>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.logo{
    width: 200px;
    img{
        width: 100%;
    }
}

</style>