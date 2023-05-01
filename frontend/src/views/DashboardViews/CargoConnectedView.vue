<template>
  <v-container fill-height>
    <ConnectedTableView tableName="Statuses" soloName="Status" url="status/"></ConnectedTableView>
    <ConnectedTableView tableName="Shipments" soloName="Shipment" url="shipment/"></ConnectedTableView>
    <ConnectedTableView tableName="Payment types" soloName="Payment type" url="pay_type/"></ConnectedTableView>
    <ConnectedTableView tableName="Payment statuses" soloName="Payment status" url="pay_status/"></ConnectedTableView>
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