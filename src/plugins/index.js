export const myPlugin = store => {
  store.subscribe((mutation, state) => {
  })
}

export const createWebSocketPlugin = (socket) => {
  return socket.on ? store => {
    socket.on('data', data => {
      store.commit('receiveData', data)
    })
    store.subscribe(mutation => {
      if (mutation.type === 'UPDATE_DATA') {
        socket.emit('update', mutation.payload)
      }
    })
  } : null
}
