<template>
  <div v-if="getFilter" class="filter">
    <v-combobox
      v-model="select.brands"
      :items="getFilter.brands"
      label="Brands"
      multiple
      outlined
      dense
    ></v-combobox>
    <v-combobox
      v-model="select.transmissions"
      :items="getFilter.transmissions"
      label="Transmissions"
      multiple
      outlined
      dense
    ></v-combobox>
    <v-combobox
      v-model="select.fluel_types"
      :items="getFilter.fluel_types"
      label="Fluel Types"
      multiple
      outlined
      dense
    ></v-combobox>
    <v-combobox
      v-model="select.colors"
      :items="getFilter.colors"
      label="Colors"
      multiple
      outlined
      dense
    ></v-combobox>
    <v-combobox
      v-model="select.types"
      :items="getFilter.types"
      label="Types"
      multiple
      outlined
      dense
    ></v-combobox>
    <v-combobox
      v-model="select.years"
      :items="getFilter.years"
      label="Years"
      multiple
      outlined
      dense
    ></v-combobox>

    <v-btn outlined color="indigo" class="btn" @click="applyFilter">applyFilter</v-btn>
    <!-- <pre>{{getFilter}}</pre> -->
  </div>
</template>

<script>
import QueryString from '../../utils/query-string';
export default {
  data: () => ({
    select: {
      brands: [],
      transmissions: [],
      drive_trains: [],
      fluel_types: [],
      colors: [],
      years: [],
      types: []
    }
  }),
  props: ['getFilter'],
  created() {
    Object.keys(this.$route.query).forEach(val => {
      this.select[val] = this.$route.query[val].split(',');
    });

  },
  methods: {
    applyFilter() {
      const queryString = new QueryString(this.select);
      const query = queryString.stringify();
      if(this.$route.fullPath.split('?')[1] !== query) {
        this.$router.push(`/catalog?${query}`)
        this.$emit('changeQuerySrt', query)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  .filter {
    padding: 0.5rem;
  }
  .btn {
    width: 100%;
  }
</style>