<template>
  <div class="v-table" style="overflow-x:auto;">
    <div class="v-table__header">
      <p @click="sortByNumber">№</p>
      <p @click="sortByStatus">Статус</p>
      <p @click="sortByDate">Дата поездки</p>
      <p @click="sortByCost">Стоимость</p>
      <p @click="sortByPaid">Оплачено</p>
      <p @click="sortByCommission">Комиссия турагента</p>
      <p @click="sortByCountry">Страна</p>
      <p @click="sortByCity">Город</p>
      <p @click="sortByOperator">Туроператор</p>
      <p @click="sortByActions">Действия</p>
    </div>
    <div class="v-table__body">
      <v-table-row v-for="row in paginatedUsers" :key="row.id" :row_data="row"></v-table-row>
    </div>
    <div class="v-table__paginations">
      <div
        class="page"
        v-for="page in pages"
        :key="page"
        :class="{'page__selected': page=== pageNumber}"
        @click="pageClick(page)"
      >{{page}}</div>
    </div>
  </div>
</template>

<script>
import vTableRow from "./v-table-row";

export default {
  name: "v-table",
  components: {
    vTableRow
  },
  props: {
    users_data: {
      type: Array,
      required: true,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      usersPerPage: 10,
      pageNumber: 1
    };
  },
  computed: {
    pages() {
      return Math.ceil(this.users_data.length / 10);
    },
    paginatedUsers() {
      let from = (this.pageNumber - 1) * this.usersPerPage;
      let to = from + this.usersPerPage;
      return this.users_data.slice(from, to);
    }
  },
  methods: {
    pageClick(page) {
      this.pageNumber = page;
    },
    sortByOperator() {
      this.users_data.sort((a, b) => a.operator.localeCompare(b.operator));
    },
    sortByCountry() {
      this.users_data.sort((a, b) => a.country.localeCompare(b.country));
    },
    sortByCity() {
      this.users_data.sort((a, b) => a.city.localeCompare(b.city));
    },
    sortByDate() {
      this.users_data.sort((a, b) =>
        a.registration_date.localeCompare(b.registration_date)
      );
    },
    sortByActions() {
      this.users_data.sort((a, b) => a.actions - b.actions);
    },
    sortByStatus() {
      this.users_data.sort((a, b) => a.status - b.status);
    },
    sortByCost() {
      this.users_data.sort((a, b) => a.cost - b.cost);
    },
    sortByPaid() {
      this.users_data.sort((a, b) => a.paid - b.paid);
    },
    sortByCommission() {
      this.users_data.sort((a, b) => a.commission - b.commission);
    },
    sortByNumber() {
      this.users_data.sort((a, b) => a.number - b.number);
    }
  }
};
</script>

<style>
.v-table {
  max-width: 1000px;
  margin: 0 auto;
}
.v-table__header {
  display: flex;
  justify-content: space-around;
  border-bottom: solid 1px #e7e7e7;
}
.v-table__header p {
  display: flex;
  cursor: pointer;
  align-items: center;
  flex-basis: 25%;
  text-align: center;
}
.v-table__body {
  flex-basis: 25%;
  text-align: center;
}
.v-table__paginations {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.page {
  padding: 8px;
  border: solid 1px #e7e7e7;
}
.page:hover {
  background: #aeaeae;
  cursor: pointer;
  color: #ffffff;
}
.page__selected {
  background: #aeaeae;
  cursor: pointer;
  color: #ffffff;
}
</style>