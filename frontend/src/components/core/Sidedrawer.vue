<template>
	<v-navigation-drawer
		v-model="drawerShown"
		:temporary="alwaysClosed"
		app
		color="primary"
		clipped
		height="100%"
	>
		<v-list dense height="100%">
			<v-img :src="image" height="100%">
				<MaterialfyUserSnippet :showBottom="false" />
				<v-row>
					<v-divider class="mb-2" />
					<!-- this section builds the links by use a for loop and iterating through links section
            the v-for iterates through the links in data(), i stands for index
            we use the paths in the links array-->
					<v-list-item
						v-for="(link, i) in links"
						:key="i"
						:to="link.to"
						:active-class="activeColor"
						class="ms-4 tertiary--text"
					>
            <v-list-item-action>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-title v-text="link.text" class="tertiary--text"  />
					</v-list-item>
					<v-divider class="mt-2" />
					<v-list-item class="ms-2">
						<v-switch
							v-model="alwaysClosed"
							:label="alwaysClosed ? 'Temp Drawer on' : 'Persistant Drawer on'"
							color="secondary"
						>
							<template v-slot:label>
								<span class="secondary--text">
									{{ alwaysClosed ? "Floating Drawer" : "Persistant Drawer" }}
								</span>
							</template>
						</v-switch>
					</v-list-item>
				</v-row>
			</v-img>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
import { mapState } from "vuex";
export default {
	name: "SideDrawer",
	data() {
		return {
			group: false,
			drawerShown: true, /* controls the opening and closing of drawer */
      drawer: this.drawerState,
			colorWatch: this.color, /* this is just here for the color watcher to wrok */
			activeColor: "secondary",
			alwaysClosed: true, /* controls if side drawer is in temp mode or not */
			links: [
				/* builds the list of links using v-for and this array */
				{
					to: "/",
					icon: "mdi-view-dashboard",
					text: "Home",
          role: []
				},
				{
					to: "/user",
					icon: "mdi-account",
					text: "User Profile",
          role: []
				},
				/*{
					to: "/table-list",
					icon: "mdi-application",
					text: "Basic Tables",
          role: []
				},*/
				{
					to: "/data-tables",
					icon: "mdi-application-cog",
					text: "My cargoes",
          role: []
				},
				// {
				// 	to: "/cardsview",
				// 	icon: "mdi-badge-account-horizontal-outline",
				// 	text: "Card Types",
        //   role: []
				// },
				// {
				// 	to: "/maps",
				// 	icon: "mdi-map-marker",
				// 	text: "Maps",
        //   role: []
				// },
				// {
				// 	to: "/notifications",
				// 	icon: "mdi-bell",
				// 	text: "Notifications",
        //   role: []
				// },
			],
		};
	},

	watch: {
		/* watches for changes in drawerState, you cant watch state directly, 
		its assigned to drawer as a work around to indriectly watch the state.
		once it updates, you update drawerShown which is used in v-model for drawer opening/closing */
    drawerState: function () {
      this.drawerShown = this.drawerState;
    },
    /* this watches the Vuex state color, which is assigned to colorWatch which allows you to watch color state indirectly */
    colorWatch: function () {
      this.activeColor = this.color;
    },
    /* when the drawer closes it emits am event with a value of false, that updates drawerShown,
     which causes this to run. its used to udpate vuex state back to false */
    drawerShown() {
      /* this should be replaced with a mutation*/
      this.$store.state.drawertoggle.drawerState = this.drawerShown;
    },
	},
	computed: {
		/* this was used to check state with a getter and setter. Now its used in watcher */
		...mapState("drawertoggle", ["drawerState", "image", "color"]),
	},
  created() {
    this.fill_links()
  },
  methods: {
		persistantDrawer() {
			this.alwaysClosed = !this.alwaysClosed;
		},
    fill_links () {
      let role = this.$store.state.user.role
      let urls = [
        {
          to: "/cargoes",
          icon: "mdi-truck-cargo-container",
          text: "Cargoes",
          role: ["admin", "manager"]
        },
        {
          to: "/filials",
          icon: "mdi-office-building",
          text: "Filials",
          role: ["admin", "manager"]
        },
        {
          to: "/locations",
          icon: "mdi-earth",
          text: "Locations",
          role: ["admin", "manager"]
        },
        {
          to: "/cargo_connected",
          icon: "mdi-transit-connection-horizontal",
          text: "Cargo Connected",
          role: ["admin", "manager"]
        },
      ]
      if (role == "admin" || role == "manager") {
        for (let i = 0; i < urls.length; i++) {
          this.links.push(urls[i])
        }
      }
    }
  },
};
</script>

<style></style>
