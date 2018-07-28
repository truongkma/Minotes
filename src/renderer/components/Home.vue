<template>
  <div id="wrapper">
    <h4>Home page</h4>
  </div>
</template>

<script>
  import CreateNote from './Notes/CreateNote'
  export default {
    name: 'mi-homepage',
    components: {
      'mi-create-note': CreateNote
    }
  }
</script>
<style scoped>
</style>
