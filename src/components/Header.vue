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
        <div class="logo m-5">
            <img src="/public/logo-boolflix.png" alt="">
        </div>

        <div class="search m-5">
            <input v-model="store.filmToSearch" 
            @keyup.enter="$emit('search')"
            type="text" 
            class="mx-3">
            <select v-model="store.type"
            @click="$emit('search')">
                <option value="">All</option>
                <option value="tv">Serie TV</option>
                <option value="movie">Film</option>
            </select>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.container-fluid{
    background-color: black;
    position: fixed;
    z-index: 2;
.logo{
    width: 250px;
    height: 100%;
    display: flex;
    align-items: center;
    img{
        width: 100%;
    }
}

input{
    width: 300px;
    height: 50px;
    font-size: 1.7rem;
    padding: 10px;
}

select{
    width: 100px;
    height: 40px;
    font-size: 1.5rem;
}
}
</style>