<template>
  <v-container fill-height>
    <ConnectedTableView tableName="Статусы посылок" soloName="Статус посылки" url="status/"></ConnectedTableView>
    <ConnectedTableView tableName="Способы доставки" soloName="Способ доставки" url="shipment/"></ConnectedTableView>
    <ConnectedTableView tableName="Способы оплаты" soloName="Способ оплаты" url="pay_type/"></ConnectedTableView>
    <ConnectedTableView tableName="Статусы оплаты" soloName="Статус оплаты" url="pay_status/"></ConnectedTableView>
    <ConnectedTableView tableName="Статус" soloName="Статус" url="work_status/"></ConnectedTableView>
    <ConnectedTableView tableName="Тип выдачи" soloName="Тип выдачи" url="accept_type/"></ConnectedTableView>
  </v-container>
</template>

<script>

import ConnectedTableView from "@/views/DashboardViews/UnderView/ConnectedTableView";
export default {
  components: {ConnectedTableView},
  name: "CargoConnectedView"
}
</script>

<style scoped>

</style>