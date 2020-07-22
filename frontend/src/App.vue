<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

import { mapActions } from 'vuex';
export default {
  name: 'App',
  components: {},
  data: () => ({}),
  methods: {
    ...mapActions(['autoLogin'])
  },
  created() {
    this.autoLogin();
  },
};
</script>
