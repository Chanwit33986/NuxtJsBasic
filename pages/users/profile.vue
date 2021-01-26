<template>
  <div class="mt-5">
    <b-row class="d-flex justify-content-center">
      <b-col cols="6">
        <center>
          <h2>Profile</h2>
          <hr />
          <p>{{ $auth.user.username }}</p>
          <p>{{ $auth.user.firstName }}</p>
          <p>{{ $auth.user.lastName }}</p>
          <p>{{ $auth.user.email }}</p>
        </center>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  layout: 'coreLayout',
}
</script>

<style></style>
