<template>
  <div class="catalog-card" @click="goToCar">
    <div class="catalog-card__image">
      <img class="img" :src="car.imageUrl" :alt="car.imageUrl">
    </div>
    <div class="catalog-card__content">
      <div class="title"><strong>{{car.brand}}</strong> {{car.model_car}}</div>
      <div class="helper-info">
        <div class="helper-info__item"><strong>fluel type:</strong> {{car.fluel_type}}</div>
        <div class="helper-info__item"><strong>color:</strong> {{car.color}}</div>
      </div>
      <!-- <div class="helper-info">
        <div class="helper-info__item"><strong>transmission:</strong> {{car.transmission}}</div>
        <div class="helper-info__item"><strong>drive train:</strong> {{car.drive_train}}</div>
      </div> -->
      <div class="helper-info">
        <div class="helper-info__item"><strong>year:</strong> {{car.year}}</div>
        <div class="helper-info__item"><strong>price:</strong> {{car.price}}</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['car'],
  methods: {
    goToCar() {
      this.$router.push(`catalog/${this.car._id}`)
    }
  },
}
</script>

<style lang="scss" scoped>
  .catalog-card {
    height: 300px;

    -webkit-box-shadow: 3px 3px 13px 2px rgba(0,0,0,0.51);
    -moz-box-shadow: 3px 3px 13px 2px rgba(0,0,0,0.51);
    box-shadow: 3px 3px 13px 2px rgba(0,0,0,0.51);

    &__image {
      height: 200px;
    }

    &__content {
      height: 100px;
      font-size: 12px;
    }
  }
  .img {
      width: 100%;
      height: 100%;
      object-fit: cover;
  }

  .title {
    font-size: 16px !important;
    text-align: center;
  }

  .helper-info {
    display: flex;
    justify-content: space-around;

    &__item {
      font-size: 14px;
    }
  }

</style>