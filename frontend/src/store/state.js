// https://vuex.vuejs.org/en/state.html
import json from './conf.json'
console.log(json["BackendUrl"])

export default {
	apiKey: json["ApiKey"],
	authStatus: false,
	auth_error: '',
	backendURL: json["BackendUrl"],
	currentTime: new Date().toLocaleString(),
	token: '',
	user_id: '',
	// eslint-disable-next-line no-undef
	avatar: require('@/assets/img/gray-user-profile-icon.png'),
}