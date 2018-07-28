export default {
  mode: {
    type: String,
    default: 'text'
  },
  theme: {
    type: String,
    default: 'monokai'
  },
  name: {
    type: String,
    default: 'brace-editor'
  },
  className: {
    type: String
  },
  height: {
    type: String,
    default: '300px'
  },
  width: {
    type: String,
    default: '100%'
  },
  fontSize: {
    type: [String, Number],
    default: 14
  },
  showGutter: {
    type: Boolean,
    default: true
  },
  value: {
    type: String,
    default: ''
  },
  defaultValue: {
    type: String,
    default: ''
  },
  minLines: {
    type: Number,
    default: null
  },
  maxLines: {
    type: Number,
    default: null
  },
  readOnly: {
    type: Boolean,
    default: false
  },
  highlightActiveLine: {
    type: Boolean,
    default: true
  },
  tabSize: {
    type: Number,
    default: 2
  },
  showPrintMargin: {
    type: Boolean,
    default: true
  },
  cursorStart: {
    type: Number,
    default: 1
  },
  styles: {
    type: Object,
    default: function () {
      return {}
    }
  },
  scrollMargin: {
    type: Array,
    default: function () {
      return [0, 0, 0, 0]
    }
  },
  wrapEnabled: {
    type: Boolean,
    default: false
  },
  enableEmmet: {
    type: Boolean,
    default: true
  }
}
