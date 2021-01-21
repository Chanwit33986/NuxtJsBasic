<template>
  <div class="mt-5">
    <b-form-group class="ml-3">
      <b-row>
        <b-col col lg="1">
          <b-form-select
            v-model="perPage"
            :options="options"
            value-field="item"
            text-field="name"
          ></b-form-select>
        </b-col>
        <b-col col lg="11">
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
          >
            <template #first-text
              ><span class="text-success">First</span></template
            >
            <template #prev-text
              ><span class="text-danger">Prev</span></template
            >
            <template #next-text
              ><span class="text-warning">Next</span></template
            >
            <template #last-text><span class="text-info">Last</span></template>
            <template #ellipsis-text>
              <b-spinner small type="grow"></b-spinner>
              <b-spinner small type="grow"></b-spinner>
              <b-spinner small type="grow"></b-spinner>
            </template>
            <template #page="{ page, active }">
              <b v-if="active">{{ page }}</b>
              <i v-else>{{ page }}</i>
            </template>
          </b-pagination>
        </b-col>
      </b-row>
    </b-form-group>

    <b-container fluid>
      <b-row>
        <b-col>
          <b-table
            bordered
            responsive
            head-variant="light"
            hover
            :busy.sync="isBusy"
            :items="datas"
            small
            :fields="fields"
          >
            <template #table-busy>
              <div class="text-center text-danger my-2">
                <b-spinner class="align-middle"></b-spinner>
                <strong>Loading...</strong>
              </div>
            </template>
            <template #table-caption
              >Showing {{ first }} to {{ last }} of {{ rows }} entries</template
            >
          </b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    fields: {
      type: Array,
      required: true,
    },
    endpointURL: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isBusy: false,
      datas: [],
      rows: 0,
      perPage: 10,
      currentPage: 1,
      first: 1,
      last: 10,
      options: [
        { item: 10, name: '10' },
        { item: 25, name: '25' },
        { item: 50, name: '50' },
        { item: 100, name: '100' },
      ],
    }
  },
  computed: {},
  watch: {
    currentPage() {
      this.onLoad(this.perPage, this.currentPage)
    },
    perPage() {
      this.onLoad(this.perPage, this.currentPage)
    },
  },
  methods: {
    async onLoad(perPage, page) {
      // console.log(perPage, page)
      this.isBusy = !this.isBusy
      const items = await axios.get(this.endpointURL)
      this.rows = items.data.totalPassengers
      this.last = this.perPage * this.currentPage
      this.first = this.last - (this.perPage - 1)
      this.isBusy = !this.isBusy
      this.datas = items.data
    },
  },
  created() {
    this.onLoad(this.perPage, this.currentPage)
  },
}
</script>

<style></style>
