import { contextBridge, ipcRenderer } from 'electron'

const handler = {
  send(channel, value) {
    ipcRenderer.send(channel, value)
  },
  on(channel, callback) {
    const subscription = (_event, ...args) => callback(...args)
    ipcRenderer.on(channel, subscription)

    return () => {
      ipcRenderer.removeListener(channel, subscription)
    }
  },
  setWindowIsReady: (isReady) => {
    ipcRenderer.send('window-is-ready', isReady)
  },
  onLauncherUrl: (callback) => {
    ipcRenderer.on('launcher-url', (_event, url) => {
      callback(url)
    })
  },
}

contextBridge.exposeInMainWorld('ipc', handler)
