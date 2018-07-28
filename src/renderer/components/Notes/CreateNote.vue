<template>
  <div id="wrapper" class="col-10 offset-1">
    <b-card no-body>
      <b-card-header class="text-center">Create Note</b-card-header>
      <b-card-body class="overflow">
        <b-form-group
          horizontal
          label="Name:"
          :label-cols="2"
          label-for="note-name">
          <b-form-input
            id="note-name"
            v-model='note.name'
            type="text"
            placeholder="Enter note name">
          </b-form-input>
        </b-form-group>

        <b-form-group
          horizontal
          label="Description:"
          :label-cols="2"
          label-for="note-description">
          <b-form-input
            id="note-name"
            v-model='note.description'
            type="text"
            placeholder="Enter note description">
          </b-form-input>
        </b-form-group>
        <b-card bg-variant="light">
          <div class="type-code" v-for="(code, index) in note.typeCodes">
            <div class="row mb-1">
              <b-form-group
                horizontal
                label="Type code:"
                :label-cols="4"
                class="col-6 mb-0"
                label-for="note-name">
                <b-form-select v-model="code.mode" :options="languages" />
              </b-form-group>
              <p class="col-6 mb-0 pt-1">
                <b-button variant="danger" size="sm" type="button" class="float-right" @click="deleteTypeCode(code)">
                  <icon name="trash"></icon>
                </b-button>
              </p>
            </div>
            <Editor
              v-model="code.content"
              :name="'editor-' + index"
              height="150px"
              className="mb-3"
              :mode="code.mode">
            </Editor>
          </div>
          <b-button type="button" variant="success" size="sm" @click="addTypeCode">Add</b-button>
        </b-card>
      </b-card-body>
      <b-card-footer class="text-center">
        <b-button type="button" variant="primary" @click='createNote'>Create</b-button>
      </b-card-footer>
    </b-card>
  </div>
</template>

<script>
  import Editor from '../Editor/Editor'
  import { mapActions } from 'vuex'
  import { languages } from '../Editor/languages'

  export default {
    name: 'mi-create-note',
    components: { Editor },
    data: function () {
      return {
        note: {
          name: '',
          description: '',
          content: '',
          updatedAt: null,
          createdAt: null,
          typeCodes: [
            {
              mode: 'text',
              content: ''
            }
          ]
        },
        languages: languages
      }
    },
    methods: {
      ...mapActions(['addNote']),
      createNote: function () {
        this.note.createdAt = new Date()
        this.note.updatedAt = new Date()
        this.addNote(this.note)
      },
      addTypeCode: function () {
        this.note.typeCodes.push({ mode: 'text', content: '' })
      },
      deleteTypeCode: function (code) {
        this.note.typeCodes = this.note.typeCodes.filter(f => f !== code)
      }
    }
  }
</script>
<style scoped>
  .card-footer {
    padding: 5px;
  }
  .card-body {
    padding: 10px;
  }
  .overflow {
    max-height: 450px;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>
