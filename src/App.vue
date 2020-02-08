<template>
  <div id="app">
    <v-table :users_data="USERS"></v-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import vTable from "./components/table/v-table";

export default {
  name: "app",
  components: {
    vTable
  },
  data: () => {
    return {};
  },
  computed: {
    ...mapGetters(["USERS"])
  },
  methods: {
    ...mapActions(["GET_USERS_FROM_API"])
  },
  mounted() {
    this.GET_USERS_FROM_API();
  }
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: #fff;
}
</style>
