/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */

//import store from "../store";
export default [
	// This section is primarily for the login but it allows you to add external other pages to be rendered outside the dashboard layout like the login
	//if you want to add more external routes make them in the children array
	{
		// using the named route option
		path: '/auth',
		meta: {
			name: 'External',
			requiresAuth: false,
		},
		component: () => import(`@/views/ExternalView.vue`), // this renders the children in this layout
		children: [
			//any components in this path auto render in External
			{
				path: 'login', // you leave this blank if you want it to default to the parents path
				name: 'login',
				component: () => import(`@/views/LoginView.vue`),
			},
			{
				path: 'registration', // you leave this blank if you want it to default to the parents path
				name: 'registration',
				component: () => import(`@/views/RegistrationView.vue`),
			},
		],
	},

	{
		path: '/',
		meta: {
			name: 'dashboard-view',
			requiresAuth: true,
		},
		component: () => import(`@/views/DashboardView.vue`),
		children: [
			{
				path: '', //defaults to / if left blank
				meta: {
					name: 'Dash',
				},
				component: () => import(`@/views/DashboardViews/Dash.vue`),
			},
			{
				path: 'user', // ends up as /user
				meta: {
					name: 'UserProfile',
				},
				component: () =>
					import(`@/views/DashboardViews/UserProfileView.vue`),
			},
			{
				path: 'table-list',
				meta: {
					name: 'TableList',
				},
				component: () =>
					import(`@/views/DashboardViews/SimpleTablesView.vue`),
			},
			{
				path: 'cargoes',
				name: 'cargoes',
				meta: {
					name: 'Cargoes',
				},
				component: () => import(`@/views/DashboardViews/CargoesView.vue`),
			},
			{
				path: 'filials',
				name: 'filials',
				meta: {
					name: 'Filials',
				},
				component: () => import(`@/views/DashboardViews/FilialsView.vue`),
			},
			{
				path: 'locations',
				name: 'locations',
				meta: {
					name: 'Locations',
				},
				component: () => import(`@/views/DashboardViews/LocationsView.vue`),
			},
			{
				path: 'cargo_connected',
				name: 'cargo_connected',
				meta: {
					name: 'Cargo_connected',
				},
				component: () => import(`@/views/DashboardViews/CargoConnectedView.vue`),
			},
			{
				path: 'data-tables',
				meta: {
					name: 'DataTable',
				},
				component: () => import(`@/views/DashboardViews/DataTableView.vue`),
			},
			{
				path: 'crud-detail/:crudSlug',
				meta: {
					name: 'CrudDetail',
				},
				component: () => import(`@/views/DashboardViews/CrudDetailView.vue`),
			},
			{
				path: 'maps',
				meta: {
					name: 'Maps',
				},
				component: () => import(`@/views/DashboardViews/MapsView.vue`),
			},
			{
				path: 'notifications',
				meta: {
					name: 'Notifications',
				},
				component: () =>
					import(`@/views/DashboardViews/NotificationsView.vue`),
			},
			{
				path: 'cardsview',
				meta: {
					name: 'CardsView',
				},
				component: () => import(`@/views/DashboardViews/CardsView.vue`),
			},
		],
		//per route guard if you dont want to use the global version in /router/index
		// beforeEnter: (to, from, next) => {
		// 	// checks to see if you are trying to go to dashboard and are logged in
		// 	if (to.name !== 'dashboard' && store.getters.authorized) {
		// 		next("/dashboard");
		// 	}
		// 	// sends you to login if you arent authorized
		// 	else if (to.name !== 'dashboard' && !store.getters.authorized) { //
		// 		next("/login");
		// 	}
		// 	else {
		// 		next(to.name); // this sends you to your original route if you arent trying to go to login
		// 	}
		// },
	},
	// This is a catch all aka page not found route. it will send you to the dashboard
	{
		path: '*',
		redirect: {
			name: 'catchAll',
			path: '/',
		},
		meta: {
			requiresAuth: true,
		},
	},
	//Error component fallback
	{
		path: '/:catchAll(.*)',
		component: () => import(`@/components/error/NotFound.vue`),
		name: 'NotFound',
	},
]
