import 'phaser'

export default function (params, game) {
  const keys = new WeakMap()
  const events = new WeakMap()
  let ctrl = {}
  for (const k of params) {
    let key = Object.assign(k, {phaserKey: game.input.keyboard.addKey(k.key)})
    keys.set(k.name, key)

    let [u, d] = [`${k.name}UP`, `${k.name}DOWN`]
    events.set(u, new Event(u))
    events.set(d, new Event(d))

    ctrl[k.name] = (p, r) => {
      document.addEventListener(d, p)
      document.addEventListener(u, r)
    }

    ctrl.update = () => {
      for (const k of keys) {
        if (k.phaserKey.isDown) {
          document.dispatchEvent(events.get(d))
        } else if (k.phaserKey.isUp) {
          document.dispatchEvent(events.get(u))
        }
      }
    }
  }

  return ctrl
}
