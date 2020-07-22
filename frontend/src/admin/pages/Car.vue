<template>
  <div>
    <div class="car-container" v-if="!getIsLoading">
      <v-btn text small to="/admin/cars">
        <v-icon dark left>mdi-arrow-left</v-icon> Back
      </v-btn>
      <div class="publisher">
        <div class="publisher__left">
          <img class="photo" :src="getCar.publisher.photo" alt="">
        </div>
        <div class="publisher__right">
          <h5 class="title">{{getCar.publisher.name}}</h5>
        </div>
      </div>
      <v-divider class="my-4"></v-divider>
      <div class="car">
        <div class="car__image">
          <img :src="getCar.car.imageUrl" alt="getCar.car.brand" class="car-image">
        </div>
        <div class="car__content">
          <div class="title-car">{{getCar.car.brand}} {{getCar.car.model_car}}</div>
          <div class="properties">
            <div class="property-container">
              <div class="helper">transmission</div>
              <span>: {{getCar.car.transmission}}</span>
            </div>
            <div class="property-container">
              <div class="helper">drive_train</div>
              <span>: {{getCar.car.drive_train}}</span>
            </div>
            <div class="property-container">
              <div class="helper">fluel_type</div>
              <span> :{{getCar.car.fluel_type}}</span>
            </div>
            <div class="property-container">
              <div class="helper">color</div>
              <span>: {{getCar.car.color}}</span>
            </div>
            <div class="property-container">
              <div class="helper">type</div>
              <span>: {{getCar.car.type}}</span>
            </div>
            <div class="property-container">
              <div class="helper">year</div>
              <span>: {{getCar.car.year}}</span>
            </div>
            <div class="property-container">
              <div class="helper">price</div>
              <span>: {{getCar.car.price}}</span>
            </div>
          </div>
          <div class="description"><span class="helper">description</span>: <span>{{getCar.car.description}}</span></div>
          <!-- <pre>{{getCar}}</pre> -->
        </div>
      </div>
    </div>
    <div class="spinner-container" v-if="getIsLoading">
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

  }),
  methods: {
    ...mapActions(['fetchCar'])
  },
  computed: {
    ...mapGetters(['getCar', 'getIsLoading'])
  },
  created() {
    this.fetchCar(this.$route.params.carId);
  },
}
</script>

<style lang="scss" scoped>
  .car-container {
    margin: 3rem auto;
    max-width: 960px;
    // background: chocolate;
  }
  .publisher {
    margin-top: 2rem;
    display: flex;
    align-items: center;

    &__left {
      width: 100px;
      height: 100px;
    }

    &__right {
      flex: 1;
      margin-left: 3rem;
      // background: cornflowerblue;
    }
  }
  .photo {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .car-image {
    width: 100%;
    // height: 100%;
  }
  .title {
    font-size: 18px;
    font-weight: 300;
  }
  .car {
    display: flex;
    &__image {
      flex-basis: 200px;
      // background: cornsilk;
    }
    &__content {
      flex: 1;
      margin-left: 3rem;
      // background: crimson;
    }
  }
  .title-car {
    font-size: 34px;
    font-weight: 500;
    line-height: 40px;
    text-align: left;
    padding: 0px;
    margin: 0px 0px 10px;
    text-align: center;
  }
  .property-container {
    display: flex;
    font-size: 16px;
    font-weight: 400;
  }
  .helper {
    text-decoration: underline;
    font-weight: 600;
  }
  .properties {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }

  .description {
    margin-top: 2rem;
    // display: flex;
    font-size: 14px;
    font-weight: 300;
  }

  .spinner-container {
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>