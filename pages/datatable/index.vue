<template>
  <div class="container-fluid">
    <Breadcrumb :items="items" />
    <UserTable :fields="fields" :endpointURL="apiURL" />
  </div>
</template>

<script>
import UserTable from '@/components/datatables/UserTable'
import Breadcrumb from '@/components/Breadcrumb'
export default {
  layout: 'coreLayout',
  components: { UserTable, Breadcrumb },
  data() {
    return {
      fields: [
        {
          key: 'name',
          label: 'CustomName',
          sortable: true,
        },
        { key: 'trips', sortable: true },
        { key: '_id' },
        { key: 'airline.id', sortable: true },
        { key: 'airline.country', variant: 'danger' },
        { key: 'actions', label: 'Actions' },
      ],
      apiURL: 'https://api.instantwebtools.net/v1/passenger',
      items: [
        {
          text: 'UserManagement',
          href: '/datatable',
        },
      ],
    }
  },
}
</script>

<style></style>
