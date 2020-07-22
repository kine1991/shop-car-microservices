<template>
  <div>
    <div class="cars-container" v-if="!getIsLoading">
      <div class="my-2 btn-create">
        <v-btn depressed color="primary" @click="create">Create</v-btn>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>year</th>
            <th>price</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="car in getCars" :key="car._id">
            <td >{{car._id | truncate(10, '...')}}</td>
            <td><router-link :to="`/admin/cars/${car._id}`">{{car.brand}} {{car.model_car}}</router-link></td>
            <td>{{car.year}}</td>
            <td>{{car.price}}</td>
            <td>
              <router-link :to="`/admin/cars/${car._id}/edit`">edit</router-link>
              <hr>
              <a @click="removeCar(car._id)">remove</a>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="text-center">
        <v-snackbar v-model="snackbar" :timeout="timeout">
          {{ text }}
          <template v-slot:action="{ attrs }">
            <v-btn color="red" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
          </template>
        </v-snackbar>
      </div>
    </div>
    <div v-else class="spinner-container">
      <shared-spinner :size="'md'"></shared-spinner>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  import Spinner from '../../shared/components/Spinner';
  export default {
    components: {
      'shared-spinner': Spinner
    },
    data: () => ({
      snackbar: false,
      text: '',
      timeout: 3000,
    }),
    computed: {
      ...mapGetters(['getCars', 'getIsLoading'])
    },
    watch: {
      '$store.state.cars.cars': function() {
        // this.items = this.$store.state.cars.cars;
        // console.log('§§', this.$store.state.cars.cars);
      }
    },
    created() {
      this.fetchCars();
    },
    methods: {
      ...mapActions(['fetchCars', 'deleteCar']),
      removeCar(id) {
        console.log(id);
        this.deleteCar(id).then(() => {
          this.fetchCars();
        }).catch(error => {
          this.text = error.response.data.errors[0].message;
          this.snackbar = true;
        });
      },
      create() {
        this.$router.push('/admin/cars/create');
      }
    },
    filters: {
      truncate: function (text, length, suffix) {
        if(text) {
          return text.substring(0, length) + suffix;
        } else {
          return '';
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cars-container {
    padding: 3rem;
  }

  th, td {
    border: 1px solid black;
  }

  .table {
    width: 100%;
  }

  .btn-create {
    text-align: end;
  }

  .spinner-container {
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>