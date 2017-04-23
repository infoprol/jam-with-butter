import 'phaser'

export default function (params, game) {
  const keys = []
  const events = new Map()
  let ctrl = {}
  for (const k of params) {
    let key = Object.assign(k, {phaserKey: game.input.keyboard.addKey(k.key)})
    keys.push(key)

    events.set(key, new CustomEvent(key.name, {
      detail: {
        key: key.phaserKey
      }
    }))

    ctrl[k.name] = (f) => document.addEventListener(key.name, f)
  }

  return Object.assign(ctrl, {
    update: () => {
      for (const k of keys) {
        console.log(k.phaserKey.isDown)
        if (k.phaserKey.isDown) {
          console.log('dispathcin event')
          document.dispatchEvent(events.get(k))
        }
      }
    }
  })
}
