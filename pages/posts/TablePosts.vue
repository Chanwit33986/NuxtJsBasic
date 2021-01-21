<template>
  <div>
    <PureTable :fields="fields" :endpointURL="apiURL" />
  </div>
</template>

<script>
import PureTable from '@/components/datatables/PureTable'
export default {
  layout: 'coreLayout',
  components: { PureTable },
  data() {
    return {
      fields: [
        {
          key: 'id',
          sortable: true,
        },
        { key: 'name', sortable: true },
        { key: 'username' },
        { key: 'email', sortable: true },
      ],
      apiURL: 'https://jsonplaceholder.typicode.com/users',
    }
  },
}
</script>

<style></style>
