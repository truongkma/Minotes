<template>
  <div id="app">
    <mi-navbar></mi-navbar>
    <div id="app-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Navbar from './components/Layouts/Navbar'
  export default {
    name: 'mi-notes',
    components: {
      'mi-navbar': Navbar
    }
  }
</script>

<style scoped>
  #app-body {
    margin: 60px 20px 0 20px;
  }
</style>
