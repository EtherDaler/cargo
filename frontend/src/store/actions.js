// https://vuex.vuejs.org/en/actions.html
import {genericApi, restApi, userApi} from '../plugins/axios'
import SecureLS from 'secure-ls'
import axios from "axios";
import store from "@/store/index";


let ls = new SecureLS()
/* The login action(function) first param is the vuex commit destructured object, 
second is userData which is passed from where-ever you call that action.
You then create a promise in the "login"'s return which is where we put the code
that we will use to trigger mutations.
*/

async function login({ commit }, userData) {
	// one day ill implement snackbars with the auth state or use it in a component or footer
	return await restApi
		.post('/auth/token/login', {
			phone: userData.phone,
			password: userData.password,
		})
		.then((response) => {
			// we use the data we get back in the response object after the promise succeeds
			// you can change the data object props to match whatever your sever sends
			const token = response.data.auth_token
			// storing jwt in localStorage. https cookie is safer place to store
			// calling the mutation "auth_success" to change/update state.properties to the new values passed along in the second param
			commit('auth_success', {token})
			genericApi.defaults.headers = {
				"Authorization": "Token " + token,
				'X-Api-Key': store.getters.getApiKey,
			}
			userApi.defaults.headers = {"Authorization": "Token " + token}
			return response
		})
		.catch((err) => {
			console.log('login error' + err)
			commit('auth_error')
			return err
		})
}

async function logout({ commit }) {
	let reqInstance = axios.create({
		baseURL: store.getters.getServerURL
	})
	reqInstance.defaults.headers.post["Authorization"] = 'Token ' + store.getters.getToken
	// one day ill implement snackbars with the auth state or use it in a component or footer
	let response = await reqInstance
		.post('/auth/token/logout', {})
		.then(() => {
			// we use the data we get back in the response object after the promise succeeds
			//you can change the data object props to match whatever your sever sends
			// storing jwt in localStorage. https cookie is safer place to store
			// calling the mutation "auth_success" to change/update state.properties to the new values passed along in the second param
			commit('logout')
		})
		.catch((err) => {
			console.log('login error' + err)
			commit('auth_error')
			ls.remove('token')
		})
	return response
}

export default {
	login,
	logout

	// autoRefreshToken ({ commit }) {
	//   return new Promise((resolve, reject) => {
	//     setInterval(function () {
	//       // code goes here that will be run every 20 minutes.
	//       axios.get('/refresh')
	//         .then(response => {
	//           const token = response.data.access_token
	//           localStorage.setItem('token', token)
	//           axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
	//           commit('auth_success', { token })
	//           resolve(response)
	//         })
	//         .catch(error => {
	//           console.log('refresh token error')
	//           console.log(error)
	//           reject(error)
	//         })
	//     }, 1200000)
	//   }
	//   )
	// },
}
