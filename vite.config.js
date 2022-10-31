import path from 'path'

export default ({ mode }) => {
  if (mode === 'netlify') {
    return {}
  }

  return {
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'stimulus-color-picker'
      },
      rollupOptions: {
        external: ['@simonwep/pickr', '@hotwired/stimulus'],
        output: {
          globals: {
            '@simonwep/pickr': 'Pickr',
            '@hotwired/stimulus': 'Stimulus'
          }
        }
      }
    }
  }
}
