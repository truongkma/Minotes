<template>
  <div id="mi-navbar">
    <b-navbar toggleable="md" type="dark" variant="info" fixed="top">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <router-link to="/">
        <b-navbar-brand>Minotes</b-navbar-brand>
      </router-link>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <router-link to="/link">
            <b-navbar-brand>Link</b-navbar-brand>
          </router-link>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            <router-link to="/note">
              <b-button size="sm" class="my-2 my-sm-0" id="add-note">Add Note</b-button>
            </router-link>
          </b-nav-form>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    name: 'mi-navbar'
  }
</script>

<style scoped>
  #add-note {
    margin-left: 5px;
  }
</style>
