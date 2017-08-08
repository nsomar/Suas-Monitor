let CONNECTION_TYPE_BONJOUR = 'bonjour'
let CONNECTION_TYPE_ADB = 'adb'

export let displayName = (type, device) => {
  if (type === CONNECTION_TYPE_BONJOUR) {
    return device.name
  }
  if (type === CONNECTION_TYPE_ADB) {
    return 'ANDROID??'
  }
}
