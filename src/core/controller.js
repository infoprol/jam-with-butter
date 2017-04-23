// import 'phaser'

// export default function (params, game) {
//   const keys = []
//   const events = new Map()
//   let ctrl = {}
//   for (const k of params) {
//     let key = Object.assign(k, {phaserKey: game.input.keyboard.addKey(k.key)})
//     keys.push(key)

//     events.set(key, new CustomEvent(key.name, {
//       detail: {
//         key: key.phaserKey
//       }
//     }))

//     ctrl[k.name] = (f) => document.addEventListener(key.name, f)
//   }

//   return Object.assign(ctrl, {
//     update: () => {
//       for (const k of keys) {
//         console.log(k.phaserKey.isDown)
//         if (k.phaserKey.isDown) {
//           console.log('dispathcin event')
//           document.dispatchEvent(events.get(k))
//         }
//       }
//     }
//   })
// }

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
          let event = events.get(k)
          event.key = k.phaserKey

          document.dispatchEvent(event)
        }
      }
    }
  })
}
