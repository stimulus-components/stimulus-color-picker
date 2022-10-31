const path = require('path')

module.exports = {
  build: {
    ssr: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'stimulus-color-picker'
    },
    rollupOptions: {
      external: ['Pickr', 'stimulus'],
      output: {
        globals: {
          stimulus: 'Stimulus',
          Pickr: 'pickr'
        }
      }
    }
  }
}
