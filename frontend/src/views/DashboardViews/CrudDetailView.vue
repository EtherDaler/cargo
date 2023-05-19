<template>
  <div>
    <div class="bg-white">
      <div class="flex">
        <div>
          <h2>Посылка: #{{ info.id }}</h2><br>
          <span class="text-muted">{{ info.name }}</span>
        </div>
        <div>
          <img :src="info.qr_code" width="128" alt=""><br>
          <span class="text-muted">Отсканируйте QR</span>
        </div>
      </div>

      <br>

      <div class="pd-6 d-flex flex-row flex-root justify-space-between">
        <div class="d-flex flex-column mr-4">
          <span class="mb-4 text-dark font-weight-bold">Отправитель</span>
          <span class="mt-2">{{ info.sender_phone }}</span>
          <span class="text-muted font-size-md">{{ info.sender_country.name }}</span>
        </div>
        <div class="d-flex flex-column mr-4">
          <span class="mb-4 text-dark font-weight-bold">Получатель</span>
          <span class="mt-2">{{ info.recipient_phone }}</span>
          <span class="text-muted font-size-md">{{ info.recipient_country.name }}</span>
        </div>
        <div class="d-flex flex-column">
          <span class="mb-4 text-dark font-weight-bold">Статус</span>
          <span class="mt-2 text-muted">{{ info.status.name }}</span>
        </div>
      </div>

      <hr class="my-hr">

      <div class="d-flex flex-row flex-root justify-space-between">
        <div class="d-flex flex-column">
          <span class="mb-4 text-dark font-weight-bold">Способ отгрузки</span>
          <span class="opacity-70">{{ info.shipping_type.name }}</span>
        </div>
        <div class="d-flex flex-column flex-root">
          <span class="mb-4 text-dark font-weight-bold">Филиал</span>
          <a class="opacity-70" href="http://ajamcargo.com/admin/branchs/1">{{ info.felial.name }}</a>
        </div>
        <div class="d-flex flex-column flex-root">
          <span class="mb-4 text-dark font-weight-bold">Дата создания</span>
          <span class="opacity-70">{{ info.date_create }}</span>
        </div>
        <div class="d-flex flex-column flex-root">
          <span class="mb-4 text-dark font-weight-bold">Дата отправки</span>
          <span class="opacity-70">{{ info.shipping_date }}</span>
        </div>
      </div>

      <div class="pt-6 d-flex flex-row justify-space-between">
        <div class="d-flex flex-column">
          <span class="mb-4 text-dark font-weight-bold">Итоговый размер(вес)</span>
          <span class="text-muted font-weight-bolder font-size-lg">{{ info.weight }} {{ info.weight_type }}</span>
        </div>
        <div class="d-flex flex-column">
          <span class="mb-4 text-dark font-weight-bold">Стоимость доставки</span>
          <span class="text-muted font-weight-bolder font-size-lg">${{ info.delivery_price }}</span>
        </div>

        <div class="d-flex flex-column">
          <span class="mb-4 text-dark font-weight-bold">Растаможка</span>
          <span class="text-muted font-weight-bolder font-size-lg">${{ info.customs_clearance }}</span>
        </div>

        <div class="d-flex flex-column">
          <span class="mb-4 text-dark font-weight-bold">Дополнительные расходы</span>
          <span class="text-muted font-weight-bolder font-size-lg">${{ info.extra_expenses }}</span>
        </div>
      </div>

      <div class="pt-6 d-flex justify-space-between">
        <div class="d-flex flex-column flex-root">
          <span class="mb-4 text-dark font-weight-bold">Страна отправителя</span>
          <span class="text-muted font-weight-bolder font-size-lg">{{ info.sender_country.name }}  </span>
        </div>
        <div class="d-flex flex-column flex-root">
          <span class="mb-4 text-dark font-weight-bold">Страна получателя</span>
          <span class="text-muted font-weight-bolder font-size-lg">{{ info.recipient_country.name }}  </span>
        </div>
        <div class="d-flex flex-column flex-root">
          <span class="mb-4 text-dark font-weight-bold">Регион отправителя</span>
          <span class="text-muted font-weight-bolder font-size-lg">{{ info.sender_city.name }}  </span>
        </div>
        <div class="d-flex flex-column flex-root">
          <span class="mb-4 text-dark font-weight-bold">Регион получателя</span>
          <span class="text-muted font-weight-bolder font-size-lg">{{ info.recipient_city.name }} </span>
        </div>
      </div>

      <div class="pt-6 d-flex justify-space-between">
        <div class="d-flex flex-column">
          <span class="mb-4 text-dark font-weight-bold">Длительность доставки</span>
          <span class="text-muted font-weight-bolder font-size-lg">{{ info.delivery_day }}</span>
        </div>
        <div class="d-flex flex-column flex-root">
          <span class="mb-4 text-dark font-weight-bold">Способ оплаты</span>
          <span class="text-muted font-weight-bolder font-size-lg">{{ info.pay_type.name }}</span>
        </div>
        <div class="d-flex flex-column flex-root">
          <span class="mb-4 text-dark font-weight-bold">Статус оплаты</span>
          <span class="text-muted font-weight-bolder font-size-lg">{{ info.pay_status.name }}</span>
        </div>
        <div class="d-flex flex-column flex-root">
          <span class="mb-4 text-dark font-weight-bold">Статус в базе</span>
          <span class="text-muted font-weight-bolder font-size-lg">{{ info.work_status.name }}</span>
        </div>
        <div class="d-flex flex-column flex-root">
          <span class="mb-4 text-dark font-weight-bold">Способ получения</span>
          <span class="text-muted font-weight-bolder font-size-lg">{{ info.accept_type.name }}</span>
        </div>
      </div>
      <br>

      <div class="px-8 py-8 mx-0 bg-gray-100 justify-center">
        <div class="col-md-10">
          <div class="table-responsive">
            <table class="table">
              <thead>
              <tr>
                <th class="font-weight-bold text-muted text-uppercase">СПОСОБ ОПЛАТЫ</th>
                <th class="font-weight-bold text-muted text-uppercase">СТАТУС ОПЛАТЫ</th>
                <th class="font-weight-bold text-muted text-uppercase">ДАТА ОПЛАТЫ</th>
                <th class="text-right font-weight-bold text-muted text-uppercase">ИТОГО</th>
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
        <span class="font-weight-bold font-size-h4 text-dark-75">История изменения статуса</span>
      </h3>

      <v-timeline v-for="event in log"
                  :key="event.id">
        <v-timeline-item
        >
          <span slot="opposite">{{ event.date }}</span>
          Изменено с: "{{ event.before }}" на: "{{ event.after }}"
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