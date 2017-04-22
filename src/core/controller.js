import 'phaser'
export default function (params, game) {
  const keys   = []
  const events = new WeakMap()
  let ctrl     = {}
  for (const k of params) {
    events.set(k, new Event(k.name))
    ctrl[k.name] = (f) => document.addEventListener(k.name, f)
    keys.push(Object.assign(k, {phaserKey: game.input.keyboard.addKey(k.key)}))
  }
  return Object.assign(ctrl, {
    update: () => {
      for (const k of keys) {
        if (k.phaserKey.isDown) {
          document.dispatchEvent(events.get(k))
        }
      }
    }
  })
}
