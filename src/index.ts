import { Controller } from '@hotwired/stimulus'
import Pickr from '@simonwep/pickr'

export default class extends Controller {
  // @ts-ignore
  element: HTMLElement
  inputTarget: HTMLInputElement
  buttonTarget: HTMLElement
  themeValue: Pickr.Theme
  picker: Pickr

  static targets = ['button', 'input']

  static values = {
    theme: {
      type: String,
      default: 'classic'
    }
  }

  initialize () {
    this.onSave = this.onSave.bind(this)
  }

  connect () {
    this.picker = Pickr.create({
      el: this.buttonTarget,
      theme: this.themeValue,
      default: this.inputTarget.value,
      swatches: this.swatches,
      components: this.componentOptions
    })

    this.picker.on('save', this.onSave)
  }

  disconnect () {
    this.picker.destroy()
  }

  onSave (color: Pickr.HSVaColor) {
    this.inputTarget.value = null

    if (color) {
      this.inputTarget.value = color.toHEXA().toString()
    }

    this.picker.hide()
  }

  get componentOptions (): Object {
    return {
      preview: true,
      hue: true,

      interaction: {
        input: true,
        clear: true,
        save: true
      }
    }
  }

  get swatches (): Array<string> {
    return [
      '#A0AEC0',
      '#F56565',
      '#ED8936',
      '#ECC94B',
      '#48BB78',
      '#38B2AC',
      '#4299E1',
      '#667EEA',
      '#9F7AEA',
      '#ED64A6'
    ]
  }
}
