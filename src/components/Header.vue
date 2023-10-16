<script>
export default {
    name: 'Header'    
}
</script>

<template>
    <div class="container-fluid d-flex justify-content-between align-items-center">
        <div class="logo m-3">
            <img src="/public/logo-boolflix.png" alt="">
        </div>

        <div class="search m-3">
            <input type="text" class="mx-3">
            <select name="" id="">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
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