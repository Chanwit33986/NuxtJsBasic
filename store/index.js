export const state = () => ({
  counter: 0,
  UserManagementStore: [],
  infoUser: {},
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  setUserManagementStore(state, value) {
    state.UserManagementStore = value
  },
  setInfoUser(state, value) {
    state.infoUser = value
  },
}

export const getters = {
  getUserManagementStore(state) {
    return state.UserManagementStore
  },
  getUserInfo(state) {
    return state.infoUser
  },
}
