<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item v-for="item in items" :key="item.text"
        ><nuxt-link :to="item.href">{{
          item.text
        }}</nuxt-link></b-breadcrumb-item
      >
    </b-breadcrumb>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style></style>
