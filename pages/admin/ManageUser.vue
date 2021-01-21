<template>
  <div>
    <Breadcrumb :items="datas" />
    <b-button
      variant="success"
      size="sm"
      class="mb-3"
      @click="$router.push('/admin/AddUser')"
      >Create User</b-button
    >
    <b-table
      head-variant="light"
      responsive=""
      hover
      :items="items"
      :fields="fields"
      :busy.sync="isBusy"
    >
      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
      <template #cell(actions)="row">
        <b-button size="sm" @click="editUser(row.item)"> Edit </b-button>
        <b-button size="sm" variant="danger" @click="delData(row.item)">
          Del
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
  components: { Breadcrumb },
  layout: 'coreLayout',
  data() {
    return {
      isBusy: false,
      fields: [
        'username',
        'userLevel',
        'firstName',
        'lastName',
        'email',
        'createDate',
        'modifyDate',
        'actions',
      ],
      items: [],
      datas: [
        {
          text: 'AdminSystem',
          href: '/Admin/ManageUser',
        },
        {
          text: 'ManageUser',
          href: '/Admin/ManageUser',
        },
      ],
    }
  },
  methods: {
    async onLoad() {
      this.isBusy = !this.isBusy
      await axios
        .get('https://localhost:5001/api/UserMasters')
        .then((res) => {
          this.items = res.data
          this.isBusy = !this.isBusy
        })
        .catch((err) => console.error(err))
    },
    delData(item) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You wanted to delete ' + item.username,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete('https://localhost:5001/api/UserMasters/' + item.username)
            .then((res) =>
              Swal.fire(
                'Deleted!',
                item.username + ' has been deleted.',
                'success'
              ).then((res) => this.onLoad())
            )
            .catch((err) => console.error(err))
        }
      })
    },
    editUser(item) {
      this.$router.push('/admin/' + item.username)
    },
  },
  mounted() {
    this.onLoad()
  },
}
</script>

<style></style>
