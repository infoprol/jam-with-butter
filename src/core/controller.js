import 'phaser'

export default function (params, game) {
  const keys = new Map()
  const events = {}
  let ctrl = {}
  for (const k of params) {
    let key = Object.assign(k, {phaserKey: game.input.keyboard.addKey(k.key)})
    keys.set(k.name, key)

    let [u, d] = [`${k.name}UP`, `${k.name}DOWN`]
    events[u] = new Event(u)
    events[d] = new Event(d)

    ctrl[k.name] = (p, r) => {
      document.addEventListener(d, p)
      document.addEventListener(u, r)
    }
  }
  ctrl.update = () => {
    for (const [k, { phaserKey }] of keys) {
      if (phaserKey.isDown) {
        document.dispatchEvent(events[`${k}DOWN`])
      } else
      if (phaserKey.isUp) {
        document.dispatchEvent(events[`${k}UP`])
      }
    }
  }

  return ctrl
}
