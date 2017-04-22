import 'phaser'

export default function (params, game) {
  const keys = []
  const events = {}
  let ctrl = {}
  for (const k of params) {
    let key = Object.assign(k, {phaserKey: game.input.keyboard.addKey(k.key)})
    keys.push(key)

    events[key.name] = new CustomEvent(key.name, {
      detail: {
        key: key.phaserKey
      }
    })

    ctrl[k.name] = (f) => document.addEventListener(key.name, f)

    ctrl.update = () => {
      for (const k of keys) {
        if (k.phaserKey.isDown) {
          document.dispatchEvent(events[k.name])
        }
      }
    }
  }
  return ctrl
}
