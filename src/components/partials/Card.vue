<script>
export default {
    name: 'Card',
    props:{
      title: String
    }
}
</script>

<template>
  <div class="card">
    <h4>{{ title }}</h4>
  </div>
</template>

<style>

</style>