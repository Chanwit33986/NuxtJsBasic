<template>
  <div>
    <Breadcrumb :items="items" />
    <form @submit="EditUser" method="post">
      <b-row class="justify-content-md-center">
        <b-col cols="8">
          <b-form-group
            label-cols-sm="4"
            label-cols-lg="3"
            content-cols-sm
            content-cols-lg="7"
            label="Enter Username"
            :disabled="true"
          >
            <b-form-input v-model="editUser.username"></b-form-input>
          </b-form-group>
          <b-form-group
            label-cols-sm="4"
            label-cols-lg="3"
            content-cols-sm
            content-cols-lg="7"
            label="Enter password"
          >
            <b-form-input
              v-model="editUser.password"
              type="password"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            label-cols-sm="4"
            label-cols-lg="3"
            content-cols-sm
            content-cols-lg="7"
            label="Enter firstName"
          >
            <b-form-input v-model="editUser.firstName"></b-form-input>
          </b-form-group>
          <b-form-group
            label-cols-sm="4"
            label-cols-lg="3"
            content-cols-sm
            content-cols-lg="7"
            label="Enter lastName"
          >
            <b-form-input v-model="editUser.lastName"></b-form-input>
          </b-form-group>
          <b-form-group
            label-cols-sm="4"
            label-cols-lg="3"
            content-cols-sm
            content-cols-lg="7"
            label="Enter email"
          >
            <b-form-input v-model="editUser.email"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-button variant="success" size="sm" type="submit">Submit</b-button>
        <button
          type="button"
          class="btn btn-primary btn-sm ml-2"
          @click="$router.push('/Admin/ManageUser')"
        >
          Back
        </button>
      </b-row>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import Breadcrumb from '@/components/Breadcrumb'
import axios from 'axios'
export default {
  components: { Breadcrumb },
  layout: 'coreLayout',
  data() {
    return {
      editUser: {},
      items: [
        {
          text: 'AdminSystem',
          href: '/Admin/ManageUser',
        },
        {
          text: 'ManageUser',
          href: '/Admin/ManageUser',
        },
        {
          text: 'EditUser',
          href: '/Admin/EditUser',
        },
      ],
    }
  },
  methods: {
    EditUser(e) {
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
          let datas = JSON.stringify({
            username: this.editUser.username,
            password: this.editUser.password,
            userLevel: this.editUser.userLevel,
            firstName: this.editUser.firstName,
            lastName: this.editUser.lastName,
            email: this.editUser.email,
            createDate: this.editUser.createDate,
            createBy: this.editUser.createBy,
            modifyDate: this.editUser.createDate,
            modifyBy: 'admin',
            isActive: this.editUser.isActive,
          })
          //console.log(datas)
          const config = { headers: { 'Content-Type': 'application/json' } }
          axios
            .put(
              'https://localhost:5001/api/UserMasters/' +
                this.editUser.username,
              datas,
              config
            )
            .then((res) =>
              Swal.fire(
                'EditUSer!',
                'User has been Edit.',
                'success'
              ).then((res) => this.$router.push('/Admin/ManageUser'))
            )
            .catch((err) => console.error(err))
        }
      })
    },
  },
  async mounted() {
    //console.log(this.$route.params.username)
    await axios
      .get(
        'https://localhost:5001/api/UserMasters/' + this.$route.params.username
      )
      .then((res) => {
        //console.log(res.data)
        this.editUser = res.data
      })
      .catch((err) => console.error(err))
  },
}
</script>

<style></style>
