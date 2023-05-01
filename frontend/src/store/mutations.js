// https://vuex.vuejs.org/en/mutations.html

export default {
  auth_success (state, { token }) {
    state.token = token
    state.authStatus = true
  },
  auth_error (state) {
    state.auth_error = 'error'
    state.authStatus = false
    state.token = ''
    state.user.set = false
    state.user.role = ''
    state.user.phone = ''
    state.user.email = ''
    state.user.first_name = ''
    state.user.second_name = ''
    state.user.address = ''
    state.user.city = ''
    state.user.country = ''
    state.user.qr_code = ''
  },
  logout (state) {
    state.authStatus = false
    state.token = ''
    state.user.set = false
    state.user.role = ''
    state.user.phone = ''
    state.user.email = ''
    state.user.first_name = ''
    state.user.second_name = ''
    state.user.address = ''
    state.user.city = ''
    state.user.country = ''
    state.user.qr_code = ''
  },
}
