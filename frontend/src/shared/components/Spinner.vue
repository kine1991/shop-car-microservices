<template>
  <div class="lds-dual-ring" v-bind:class="{'lds-dual-ring-xs': size === 'xs', 'lds-dual-ring-md': size === 'md'}"></div>
</template>

<script>
export default {
  props: ['size']
}
</script>

<style lang="scss" scoped>
  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid gray;
    border-color: gray transparent gray transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .lds-dual-ring-xs {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring-xs:after {
    content: " ";
    display: block;
    width: 18px;
    height: 18px;
    margin: 4px;
    border-radius: 50%;
    border: 2px solid gray;
    border-color: gray transparent gray transparent;
    animation: lds-dual-ring-xs 1.2s linear infinite;
  }
  @keyframes lds-dual-ring-xs {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .lds-dual-ring-md {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring-md:after {
    content: " ";
    display: block;
    width: 36px;
    height: 36px;
    margin: 6px;
    border-radius: 50%;
    border: 3px solid gray;
    border-color: gray transparent gray transparent;
    animation: lds-dual-ring-md 1.2s linear infinite;
  }
  @keyframes lds-dual-ring-md {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>