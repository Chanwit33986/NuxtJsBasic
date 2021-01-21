<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">Basic</h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
        <nuxt-link to="/users" class="button--grey">Users</nuxt-link>
        <nuxt-link to="/admin" class="button--grey">Admin</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'coreLayout',
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  font-family: 'Yusei Magic', sans-serif;
}
</style>
