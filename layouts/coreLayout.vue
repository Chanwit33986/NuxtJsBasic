<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <nuxt-link class="nav-item nav-link" to="/">Home</nuxt-link>
          <nuxt-link class="nav-item nav-link" to="/posts">Posts</nuxt-link>
          <nuxt-link class="nav-item nav-link" to="/posts/TablePosts"
            >PostsTable</nuxt-link
          >
          <nuxt-link class="nav-item nav-link" to="/admin/ManageUser"
            >AdminSystem</nuxt-link
          >
          <nuxt-link class="nav-item nav-link" to="/datatable"
            >UserManagement</nuxt-link
          >
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <nuxt-link
            to="/users/profile"
            class="nav-item nav-link"
            v-if="$auth.loggedIn"
            >{{ $auth.user.username }}</nuxt-link
          >
          <b-nav-item v-if="$auth.loggedIn" @click="logout">Logout</b-nav-item>
          <nuxt-link class="nav-item nav-link" v-else to="/login"
            >Login</nuxt-link
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="pt-3 pl-3 pr-3">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('/')
    },
  },
}
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
}
</style>
