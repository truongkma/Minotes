<template>
  <div ref="editor" :id="getId" :style="divStyle" :class="addClass"></div>
</template>

<script>
  import ace from 'brace'
  import propsValue from './props'
  import _ from 'lodash'
  import { editorOptions } from './editorOptions'
  import { languages } from './languages'
  require('brace/ext/emmet')

  _.forEach(languages, function (mode) {
    require(`brace/mode/${mode.value}`)
  })

  const props = Object.assign({}, propsValue)

  export default {
    props,
    computed: {
      divStyle () {
        const { width, height, styles } = this.$props
        const divStyle = { width, height, ...styles }
        return divStyle
      },
      getId () {
        const { name } = this.$props
        return name
      },
      addClass () {
        const { className } = this.$props
        return className
      }
    },
    watch: {
      mode: function (newVal, oldVal) {
        if (newVal !== oldVal) {
          this.editor.getSession().setMode(`ace/mode/${newVal}`)
        }
      },
      theme: function (newVal, oldVal) {
        if (newVal !== oldVal) {
          this.editor.getSession().setMode(`ace/theme/${newVal}`)
        }
      },
      value: function (newVal) {
        if (this.editor && this.editor.getValue() !== newVal) {
          this.editor.setValue(newVal, 1)
        }
      }
      // $props: function (newVal, oldVal) {
      //   debugger
      //   for (let i = 0; i < editorOptions.length; i++) {
      //     const option = editorOptions[i]
      //     if (newVal[option] !== oldVal[option]) {
      //       this.editor.setOption(option, newVal[option])
      //     }
      //   }
      // }
    },
    mounted: function () {
      const { name, mode, scrollMargin, theme, fontSize, defaultValue, value, cursorStart, showGutter, wrapEnabled, showPrintMargin } = this.$props
      const self = this
      require(`brace/mode/${mode}`)
      require(`brace/theme/${theme}`)
      this.$emit('init', this.editor)
      this.editor = ace.edit(name)
      this.editor.$blockScrolling = Infinity
      for (let i = 0; i < editorOptions.length; i++) {
        const option = editorOptions[i]
        this.editor.setOption(option, this.$props[option])
      }
      this.editor.renderer.setScrollMargin(scrollMargin[0], scrollMargin[1], scrollMargin[2], scrollMargin[3])
      this.editor.getSession().setMode(`ace/mode/${mode}`)
      this.editor.setTheme(`ace/theme/${theme}`)
      this.editor.setFontSize(fontSize)
      this.editor.getSession().setValue(!defaultValue ? value : defaultValue, cursorStart)
      this.editor.navigateFileEnd()
      this.editor.renderer.setShowGutter(showGutter)
      this.editor.getSession().setUseWrapMode(wrapEnabled)
      this.editor.setShowPrintMargin(showPrintMargin)
      this.editor.on('change', () => {
        const content = self.editor.getValue()
        self.$emit('input', content)
      })
    }
  }
</script>
