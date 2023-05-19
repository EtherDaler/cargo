<!-- @format -->

<template>
	<div><h1>AjamCargo Homepage</h1></div>
</template>

<script>
export default {
  mounted() {
    if (this.$store.state.user.set === false) {
      this.$store
          .dispatch('user/setUser', {}, {root: true})
          .then(() => console.log('success'))
    }
  },
}
</script>

<style>
@media only screen and (min-width: map-get($grid-breakpoints, 'xl')) {
.container {
max-width: 1440px !important;
}
}
</style>
