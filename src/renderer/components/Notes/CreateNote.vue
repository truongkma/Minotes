<template>
  <div id="wrapper">
    <b-card>
      <b-form>
        <b-form-group id="note-name-group" label="Name: " label-for="note-name">
          <b-form-input
            id="note-name"
            v-model='note.name'
            type="text"
            placeholder="Enter note name">

          </b-form-input>
        </b-form-group>

        <b-form-group id="note-description-group" label="Description: " label-for="note-description">
          <b-form-input id="note-description" type="text" v-model='note.description' placeholder="Note description"></b-form-input>
        </b-form-group>

        <b-button type="button" variant="primary" @click='createNote'>Create Note</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'mi-create-note',
    data: function () {
      return {
        note: {
          name: '',
          description: '',
          updatedAt: null,
          createdAt: null
        }
      }
    },
    methods: {
      ...mapActions(['addNote']),
      createNote: function () {
        this.note.createdAt = new Date()
        this.note.updatedAt = new Date()
        this.addNote(this.note)
      }
    }
  }
</script>
<style scoped>
</style>
