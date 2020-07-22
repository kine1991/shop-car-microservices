<template>
  <div class="catalog-container">
    <div class="filter">
      <filter-component :getFilter="getFilter" @changeQuerySrt="onChangeQuerySrt($event)"></filter-component>
    </div>
    <template>
      <div class="spinner-container" v-if="isLoading">
        <shared-spinner size="'md'"></shared-spinner>
      </div>
      <div class="items" v-else>
        <catalog-card v-for="car in getCars" :key="car._id" :car="car"></catalog-card>
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import CatalogCard from '../components/CatalogCard.vue';
import Filter from '../components/Filter.vue';
import Spinner from '../../shared/components/Spinner';
import QueryString from '../../utils/query-string';
export default {
  components: {
    CatalogCard,
    'shared-spinner': Spinner,
    'filter-component': Filter
  },
  methods: {
    ...mapActions(['fetchCars', 'fetchFilter']),
    onChangeQuerySrt(queryStr) {
      const queryString = new QueryString(queryStr);
      const queryParsed = queryString.parse();
      this.fetchCars(queryParsed);
    }
  },
  // watch: {
  //   $route(to) {
  //     console.log('to', to.query);
  //   }
  // },
  created() {
    const queryStr = this.$route.fullPath.split('?')[1];
    const queryString = new QueryString(queryStr);
    const queryParsed = queryString.parse();
    this.fetchCars(queryParsed);
    this.fetchFilter();
  },
  computed: {
    ...mapGetters(['getCars', 'getFilter']),
    isLoading() {
      return this.$store.state.cars.isLoading;
    }
  },
}
</script>

<style lang="scss" scoped>
  .catalog-container {
    padding: 2rem;
    display: flex;
  }
  .filter {
    background: rgb(236, 234, 234);
    flex-basis: 200px;
    flex-shrink: 0;
    // margin-right: 3rem;
    border-radius: 5px;

    // text-align: center;
    // display: flex;
    // justify-content: center;
    // align-items: center;
  }
  .items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;
    margin-left: 3rem;
  }
  .spinner-container {
    height: 400px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>