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
      </b-collapse>
    </b-navbar>
    <div class="pt-3 pl-3 pr-3">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
}
</style>
