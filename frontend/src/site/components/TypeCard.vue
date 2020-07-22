<template>
  <div class="type-card">
    <template v-if="type">
      <img :src="type.imageUrl" class="type-card__image" />
      <div class="type-card__type">{{type.type}}</div>
    </template>
    <template v-if="category">
      <img :src="category.imageUrl" class="type-card__image" />
      <div class="type-card__type">{{category.type}}</div>
    </template>
  </div>
</template>

<script>
export default {
  props: ['type', 'category']  
}
</script>

<style lang="scss">
  .type-card {
    border: 1px solid black;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 3s all;
      &:hover {
        transform: scale(1.1);
      }
    }

    &__type {
      border: 1px solid black;
      padding: 0.75rem 1.5rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba($color: #fff, $alpha: 0.5);
      color: black;
    }
  }
</style>