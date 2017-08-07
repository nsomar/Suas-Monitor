let simulateKeyDown = (key) => {
  let e: any = new Event('keydown')
  e.key = key
  e.keyCode = e.key.charCodeAt(0)
  e.which = e.keyCode
  e.altKey = false
  e.ctrlKey = true
  e.shiftKey = false
  e.metaKey = false
  window.dispatchEvent(e)
}

export let monitorChangeHack = () => {
  simulateKeyDown('m')
}
