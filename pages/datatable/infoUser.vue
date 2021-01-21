<template>
  <div>
    <Breadcrumb :items="items" />
    <b-row class="justify-content-md-center">
      <b-col cols="8">
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="7"
          label="your id"
          :disabled="true"
        >
          <b-form-input v-model="userInfo._id"></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="7"
          label="Enter your name"
        >
          <b-form-input v-model="userInfo.name"></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="7"
          label="Enter your trips"
        >
          <b-form-input v-model="userInfo.trips"></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="7"
          label="Enter your country"
        >
          <b-form-input v-model="userInfo.airline.country"></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="7"
          label="Enter your website"
        >
          <b-form-input v-model="userInfo.airline.website"></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="7"
          label="Enter your established"
        >
          <b-form-input v-model="userInfo.airline.established"></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-button
        variant="success"
        size="sm"
        type="submit"
        v-on:click="editSubmit"
        >submit</b-button
      >
      <button
        class="btn btn-primary btn-sm ml-2"
        @click="$router.push('/datatable')"
      >
        Back
      </button>
    </b-row>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import Breadcrumb from '@/components/Breadcrumb'
export default {
  components: { Breadcrumb },
  layout: 'coreLayout',
  data() {
    return {
      userInfo: {},
      items: [
        {
          text: 'UserManagement',
          href: '/datatable',
        },
        {
          text: 'InfoUser',
          href: '/datatable/infoUser',
        },
      ],
    }
  },
  created() {
    this.userInfo = this.$store.getters.getUserInfo
  },
  methods: {
    editSubmit(e) {
      e.preventDefault()
      Swal.fire({
        title: 'Are you sure?',
        text: 'You wanted to Edit this user',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Edit it!',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Edit!', 'User has been Edit.', 'success').then((res) =>
            this.$router.push('/datatable')
          )
        }
      })
    },
  },
}
</script>

<style></style>
