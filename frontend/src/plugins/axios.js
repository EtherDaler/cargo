// Lib imports
import axios from "axios";
import NProgress from "nprogress";
import store from "@/store";

console.log(store.getters.getServerURL)
// creates a new instance that you will call instead of axios.
const restApi = axios.create({
	// eslint-disable-next-line no-undef
	baseURL: store.getters.getServerURL,
	timeout: 3000,
})

const userApi = axios.create({
	baseURL: store.getters.getServerURL + '/user',
	headers: {'Authorization': 'Token ' + store.getters.getToken},
	methods: ['get', 'post'],
	timeout: 3000,
})

// Sets the default global url used by all of this axios instance's requests
 const genericApi = axios.create({
		baseURL: store.getters.getServerURL,
		headers: {
			'X-Api-Key': store.getters.getApiKey,
			'Authorization': 'Token ' + store.getters.getToken,
		},
		methods: 'get',
		mode: "cors",
		timeout: 3000,
 })

restApi.interceptors.request.use(
	function (request) {
		// Do something before request is sent
		NProgress.start();
		return request;
	},
	function (error) {
		// Do something with request error
		console.log(error);
		NProgress.done();
		return Promise.reject(error);
	}
);

// Add a response interceptor
restApi.interceptors.response.use(
	function (response) {
		NProgress.done();
		return response;
	},
	function (error) {
		// Do something with response error
		console.log(error);
		NProgress.done();
		return Promise.reject(error);
	}
);



export  {
  restApi,
  genericApi,
  userApi,
};
