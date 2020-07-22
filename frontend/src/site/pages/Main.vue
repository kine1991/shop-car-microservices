<template>
  <div class="main-container">
    <template v-if="!getIsLoading">
      <div class="category-container">
        <h2>Category</h2>
        <div class="categories">
          <type-card v-for="category in getCategories" :key="category.id" :category="category"></type-card>
        </div>
      </div>
      <div class="type-container">
        <h2>Type</h2>
        <div class="types">
          <type-card v-for="type in getTypes" :key="type.id" :type="type"></type-card>
        </div>
      </div>
    </template>
    <div v-else class="spinner-container">
      <spinner :size="'md'"></spinner>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import TypeCard from '../components/TypeCard.vue';
import Spinner from '../../shared/components/Spinner.vue';
export default {
  components: {
    TypeCard,
    Spinner
  },
  data: () => ({}),
  computed: {
    ...mapGetters(['getTypes', 'getCategories', 'getIsLoading'])
  },
  created() {
    this.fetchTypes();
  },
  methods: {
    ...mapActions(['fetchTypes'])
  },
}
</script>

<style lang="scss" scoped>
  .main-container {
    max-width: 960px;
    padding: 2rem;
    margin: 0 auto;
  }

  .types {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;
  }

  .categories {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
  }

  .spinner-container {
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>


