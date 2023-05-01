<template>
  <div>
    <div class="bg-white">
      <div class="flex">
        <div>
          <h2>Shipment: #{{ info.id }}</h2><br>
          <span class="text-muted">{{ info.name }}</span>
        </div>
        <div>
          <img :src="info.qr_code" width="128" alt=""><br>
          <span class="text-muted">scan it whit QR</span>
        </div>
      </div>

      <br>

      <div class="pd-6 d-flex flex-row flex-root justify-space-between">
        <div class="d-flex flex-column mr-4">
          <span class="mb-4 text-dark font-weight-bold">Customer/Sender</span>
          <span class="mt-2">{{ info.sender }}</span>
          <span class="text-muted font-size-md">{{ info.sender_country }}</span>
        </div>
        <div class="d-flex flex-column mr-4">
          <span class="mb-4 text-dark font-weight-bold">Recipient</span>
          <span class="mt-2">{{ info.recipient }}</span>
          <span class="text-muted font-size-md">{{ info.recipient_country }}</span>
        </div>
        <div class="d-flex flex-column">
          <span class="mb-4 text-dark font-weight-bold">Status</span>
          <span class="mt-2 text-muted">{{ info.status.name }}</span>
        </div>
      </div>

      <hr class="my-hr">

      <div class="d-flex flex-row flex-root justify-space-between">
        <div class="d-flex flex-column">
          <span class="mb-4 text-dark font-weight-bold">Shipment Type</span>
          <span class="opacity-70">{{ info.shipping_type.name }}</span>
        </div>
        <div class="d-flex flex-column flex-root">
          <span class="mb-4 text-dark font-weight-bold">Current branch</span>
          <a class="opacity-70" href="http://ajamcargo.com/admin/branchs/1">{{ info.felial.name }}</a>
        </div>
        <div class="d-flex flex-column flex-root">
          <span class="mb-4 text-dark font-weight-bold">Created date</span>
          <span class="opacity-70">{{ info.date_create }}</span>
        </div>
        <div class="d-flex flex-column flex-root">
          <span class="mb-4 text-dark font-weight-bold">Shipping Date</span>
          <span class="opacity-70">{{ info.shipping_date }}</span>
        </div>
      </div>

      <div class="pt-6 d-flex flex-row justify-space-between">
        <div class="d-flex flex-column">
          <span class="mb-4 text-dark font-weight-bold">Total Weight</span>
          <span class="text-muted font-weight-bolder font-size-lg">{{ info.weight }} {{ info.weight_type }}</span>
        </div>
        <div class="d-flex flex-column">
          <span class="mb-4 text-dark font-weight-bold">Shipping Cost</span>
          <span class="text-muted font-weight-bolder font-size-lg">${{ info.delivery_price }}</span>
        </div>

        <div class="d-flex flex-column">
          <span class="mb-4 text-dark font-weight-bold">Customs clearance</span>
          <span class="text-muted font-weight-bolder font-size-lg">${{ info.customs_clearance }}</span>
        </div>

        <div class="d-flex flex-column">
          <span class="mb-4 text-dark font-weight-bold">Additional Expenses</span>
          <span class="text-muted font-weight-bolder font-size-lg">${{ info.extra_expenses }}</span>
        </div>
      </div>

      <div class="pt-6 d-flex justify-space-between">
        <div class="d-flex flex-column flex-root">
          <span class="mb-4 text-dark font-weight-bold">From Country</span>
          <span class="text-muted font-weight-bolder font-size-lg">{{ info.sender_country }}  </span>
        </div>
        <div class="d-flex flex-column flex-root">
          <span class="mb-4 text-dark font-weight-bold">To Country</span>
          <span class="text-muted font-weight-bolder font-size-lg">{{ info.recipient_country }}  </span>
        </div>
        <div class="d-flex flex-column flex-root">
          <span class="mb-4 text-dark font-weight-bold">From Region</span>
          <span class="text-muted font-weight-bolder font-size-lg">{{ info.sender_city }}  </span>
        </div>
        <div class="d-flex flex-column flex-root">
          <span class="mb-4 text-dark font-weight-bold">To Region</span>
          <span class="text-muted font-weight-bolder font-size-lg">{{ info.recipient_city }} </span>
        </div>
      </div>

      <div class="pt-6 pd-6 d-flex flex-row flex-root justify-space-between">
        <div class="d-flex flex-column">
          <span class="mb-4 text-dark font-weight-bold">Delivery days</span>
          <span class="opacity-70">{{ info.delivery_day }}</span>
        </div>
        <div class="d-flex flex-column flex-root">
          <span class="mb-4 text-dark font-weight-bold">Payment type</span>
          <span class="opacity-70">{{ info.pay_type.name }}</span>
        </div>
        <div class="d-flex flex-column flex-root">
          <span class="mb-4 text-dark font-weight-bold">Payment status</span>
          <span class="opacity-70">{{ info.pay_status.name }}</span>
        </div>
      </div>
      <br>

      <div class="px-8 py-8 mx-0 bg-gray-100 justify-center">
        <div class="col-md-10">
          <div class="table-responsive">
            <table class="table">
              <thead>
              <tr>
                <th class="font-weight-bold text-muted text-uppercase">Payment Type</th>
                <th class="font-weight-bold text-muted text-uppercase">PAYMENT STATUS</th>
                <th class="font-weight-bold text-muted text-uppercase">PAYMENT DATE</th>
                <th class="text-right font-weight-bold text-muted text-uppercase">TOTAL COST</th>
              </tr>
              </thead>
              <tbody>
              <tr class="font-weight-bolder">
                <td>{{ info.pay_type.name }}</td>
                <td> {{ info.pay_status.name }} </td>
                <td v-if="info.pay_date"> {{ info.pay_date }} </td>
                <td v-else> - </td>
                <td class="text-right text-primary font-size-h3 font-weight-boldest">${{ info.total_price }}<br></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white">
      <h3 class=" mb-2 align-start">
        <span class="font-weight-bold font-size-h4 text-dark-75">Shipment Status Log</span>
      </h3>

      <v-timeline v-for="event in log"
                  :key="event.id">
        <v-timeline-item
        >
          <span slot="opposite">{{ event.date }}</span>
          Changed from: "{{ event.before }}" to: "{{ event.after }}"
        </v-timeline-item>
      </v-timeline>
    </div>
  </div>
</template>

<script>
import {genericApi} from "@/plugins/axios";

export default {
  name: "CrudDetailView",
  data: ()  => ({
    info: null,
    log: null
  }),
  mounted() {
    genericApi
        .get('/cargoes/cargoes/' + this.$route.params.crudSlug + '/?format=json')
        .then((response) => {
          this.info = response.data
          this.log = this.info.events
        })
        .catch((error) => console.log(error));
  }
}
</script>

<style scoped>
  .bg-white {
    background-color: #fafafa;
    margin-top: 3%;
    margin-left: 4%;
    margin-right: 4%;
    margin-bottom: 3%;
    padding-top: 5%;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 3%;
  }
  .flex {
    display: flex;
    justify-content: space-between;
  }
  .text-muted {
    color: #B5B5C3 !important;
  }
  .pd-6 {
    padding-right: 60%;
  }
  .opacity-70 {
    opacity: 0.7 !important;
  }
  .my-hr {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .pt-6, .py-6 {
    padding-top: 1.5rem !important;
  }
  .text-uppercase {
    text-transform: uppercase !important;
  }
  .table {
    width: 100%;
  }
  .font-weight-bolder {
    font-weight: 600 !important;
  }
  .table th, .table td {
    background: #ffe0b2;
    padding: 0.75rem;
    vertical-align: top;
    text-align: left;
  }
  td {
    border-top: 1px solid #EBEDF3;
  }
  .bg-gray-100 {
    background-color: #ffe0b2;
  }
  .text-right {
    text-align: right !important;
  }
  .pt-6, .py-6 {
    padding-top: 1.5rem !important;
  }
  mb-2, .my-2 {
    margin-bottom: 0.5rem !important;
  }
  .text-dark-75 {
    color: #3F4254 !important;
  }
  .font-size-h4 {
    font-size: 1.35rem !important;
  }
</style>