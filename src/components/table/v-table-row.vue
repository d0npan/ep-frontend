<template>
  <div class="v-table-row">
    <div class="row row__number">{{row_data.number}}</div>
    <div class="row row__status">{{row_data.status}}</div>
    <div class="row row__date">{{row_data.registration_date}}</div>
    <div class="row row__cost">{{row_data.cost}}</div>
    <div class="row row__paid">{{row_data.paid}}</div>
    <div class="row row__commission">{{row_data.commission}}</div>
    <div class="row row__country">{{row_data.country}}</div>
    <div class="row row__city">{{row_data.city}}</div>
    <div class="row row__operator">{{row_data.operator}}</div>
    <div class="row row__actions">{{row_data.actions}}</div>
  </div>
</template>

<script>
export default {
  name: "v-table-row",
  props: {
    row_data: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {}
};
</script>

<style>
.v-table-row {
  display: flex;
  justify-content: space-around;
}
.row {
  flex-basis: 25%;
  padding: 8px 16px;
  text-align: center;
}
</style>