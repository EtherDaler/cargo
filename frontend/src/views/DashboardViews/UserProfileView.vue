<!-- @format -->

<template>
	<v-container fill-height >
		<v-row justify-center wrap class="d-flex align-start">
			<!-- USER TABs section -->
			<v-col xs12 md="6">
				<v-card flat color="secondary" class="elevation-0" :tile="true">
					<v-toolbar color="background" class="elevation-0">
						<v-toolbar-title class="tertiary--text">User Profile</v-toolbar-title>
					</v-toolbar>
					<v-tabs :vertical="tabBreakPoint" background-color="background" color="tertiary">
						<v-tab>
							<v-icon left> mdi-account-cog </v-icon>
							Edit Profile
						</v-tab>
						<v-tab>
							<v-icon left> mdi-lock </v-icon>
							Permissions
						</v-tab>
						<v-tab class="pr-10">
							<v-icon left> mdi-cog </v-icon>
							Settings
						</v-tab>
						<!-- User Bio -->
						<v-tab-item>
							<!-- input edit form -->
							<MaterialfyBasicCard
								cardMaxWidth="802"
								cardTitle="Edit Profile"
								cardSubHeaderText="Complete your profile"
								:cardShowAvatar="false"
							>
								<template v-slot:crdInner>
									<v-form>
										<v-container>
											<v-row wrap>
												<v-col xs12 md4>
													<v-text-field :color="textFieldColor" label="Company (disabled)" disabled />
												</v-col>
												<v-col xs12 md4>
													<v-text-field
														:color="textFieldColor"
														class="purple-input"
														label="Phone"
														v-model="phone"
													/>
												</v-col>
												<v-col xs12 md4>
													<v-text-field :color="textFieldColor" label="Email Address" v-model="email" />
												</v-col>
											</v-row>
											<v-row wrap>
												<v-col xs12 md6>
													<v-text-field :color="textFieldColor" label="First Name" v-model="first_name" />
												</v-col>
												<v-col xs12 md6>
													<v-text-field :color="textFieldColor" label="Last Name" v-model="last_name" />
												</v-col>
												<v-col xs12 md12>
													<v-text-field :color="textFieldColor" label="Address" />
												</v-col>
											</v-row>
											<v-row wrap>
												<v-col xs12 md4>
													<v-text-field :color="textFieldColor" label="City" />
												</v-col>
												<v-col xs12 md4>
													<v-text-field :color="textFieldColor" label="Country" />
												</v-col>
											</v-row>
											<v-row wrap>
												<v-col xs12 md4>
													<v-text-field
														:color="textFieldColor"
														label="Postal Code"
														type="number"
														max-width="100"
													/>
												</v-col>
												<v-col xs12 cols="12">
													<v-textarea
														:color="textFieldColor"
														label="About Me"
														value="You wrote that yourself? wow congrats dude, really, that's very cool. i just told everyone in my family about it..."
														filled
													/>
												</v-col>
											</v-row>
										</v-container>
									</v-form>
								</template>
								<template #crdActions>
									<v-btn class="mx-0 font-weight-light" color="tertiary"> Update Profile </v-btn>
								</template>
							</MaterialfyBasicCard>
						</v-tab-item>

						<v-tab-item>
							<v-card flat color="primary" :tile="true">
								<v-card-text>
									<p>
										Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis
										tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris
										ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt
										non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
									</p>

									<p>
										Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante
										convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet
										ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac
										habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
									</p>

									<p>
										Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a
										libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis
										vitae tortor. Aliquam eu nunc.
									</p>

									<p>
										Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra
										rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
									</p>

									<p class="mb-0">
										Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget,
										vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis,
										dictum sed, iaculis a, condimentum nec, nisi.
									</p>
								</v-card-text>
							</v-card>
						</v-tab-item>
						<v-tab-item>
							<v-card flat color="primary" :tile="true">
								<v-card-text>
									<p>
										Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin
										viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi
										mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
									</p>

									<p class="mb-0">
										Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum,
										porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu,
										pretium quis, sem. Nam at tortor in tellus interdum sagittis.
									</p>
								</v-card-text>
							</v-card>
						</v-tab-item>
					</v-tabs>
				</v-card>
			</v-col>
			<v-col xs12 md4>
				<materialfy-color-card
					cardMaxWidth="500"
					:cardShowDivider="false"
					:cardShowActions="false"
					:cardShowInnerList="false"
					:cardShowInnerText="false"
				>
					<template v-slot:crdInner>
            <img :src="qr" width="130" class="mx-auto d-block" />
						<v-card-text class="text-center">
							<h6 class="text-h5 text-gray font-weight-light mb-3">My Cargoes</h6>
							<h4 class="text-h4 font-weight-normal">{{ first_name }} {{ last_name }}</h4>

              <MaterialfyBasicCard
                  cardMaxWidth="344"
                  v-for="cargo in cargoes"
                  :key="cargo.id"
                  :cardTitle="cargo.name"
                  :cardSubHeaderText="cargo.status.name"
                  :cardShowAvatar="false"
              >
                <template v-slot:crdInner>
                  <div class="flex justify-space-between align-end row ma-0">
                    <div>
                      From {{ cargo.sender_country.name }}, {{ cargo.sender_city.name }}
                      <p>Price {{ cargo.total_price }} $</p>
                    </div>
                    <div>
                      <img :src="cargo.qr_code" alt="" width="64" left>
                    </div>
                  </div>
                  <router-link :to="'/cargoes/' + cargo.slug" class="text-dec-none">
                    <v-btn color="alert" rounded class="font-weight-light">
                      More
                    </v-btn>
                  </router-link>
                </template>
              </MaterialfyBasicCard>

              <br>
              <router-link to="/data-tables" class="text-dec-none">
                <v-btn color="primary" rounded class="font-weight-light">
                  More Cargoes
                </v-btn>
              </router-link>
						</v-card-text>
					</template>
					<template #crdActions> <div></div></template>
					<template #crdInnerText> <div></div></template>
				</materialfy-color-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import {genericApi} from "@/plugins/axios";
  import {mapGetters} from "vuex";
	export default {
		name: 'UserProfile',
		data() {
			return {
				textFieldColor: 'secondary',
				tabBreakPoint: !this.$vuetify.breakpoint.mobile,
        qr: this.$store.state.user.qr_code,
        phone: this.$store.state.user.phone,
        first_name: this.$store.state.user.first_name,
        last_name: this.$store.state.user.last_name,
        email: this.$store.state.user.email,
        cargoes: null,
			}
		},
    mounted() {
      genericApi
          .get('/cargoes/last_cargoes/?format=json', {})
          .then((response) =>
            {
              this.cargoes = response.data['data']
            })
    },
		computed: {
      ...mapGetters([''])
		},
	}
</script>

<style>
 .text-dec-none {
   text-decoration: none
 }
</style>
