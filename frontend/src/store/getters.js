// https://vuex.vuejs.org/en/getters.html

export default {
  authorized: state => !!state.token,
  authstatus: state => state.authStatus,
  getServerURL: state => state.backendURL,
  getToken: state => state.token,
  getUserId: state => state.user_id,
  getAvatar: state => state.avatar,
  getApiKey: state => state.apiKey,
}
