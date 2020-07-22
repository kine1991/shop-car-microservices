<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn small text color="red lighten-2" dark v-bind="attrs" v-on="on">
          Sign up/in
        </v-btn>
      </template>

      
      <v-card>
        <v-tabs v-model="tab" background-color="grey lighten-2" :grow="true">
          <v-tab v-for="item in items" :key="item.tab">{{ item.tab }}</v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item>
            <sign-in></sign-in>
          </v-tab-item>
          <v-tab-item>
            <sign-up></sign-up>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import SignIn from './SignIn.vue';
  import SignUp from './SignUp.vue';
  export default {
    components: {
      SignIn,
      SignUp
    },
    data () {
      return {
        dialog: false,
        tab: null,
        items: [
          { tab: 'Sign In', content: 'Tab 1 Content' },
          { tab: 'Sign Up', content: 'Tab 2 Content' },
        ],
      }
    },
  }
</script>
