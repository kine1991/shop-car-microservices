<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Main</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/catalog">
          <v-list-item-action>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Catalog</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="getCurrentUser">
        <v-btn text small to="/admin">Admin</v-btn>
        <v-btn text small @click="logOut">Logout</v-btn>
        <v-btn text small disabled>{{getCurrentUser.name}}</v-btn>
        <v-btn icon large>
          <v-avatar size="32px" item>
            <v-img :src="getCurrentUser.photo" alt="Vuetify"></v-img></v-avatar>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <authorization-popup v-else></authorization-popup>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import AuthorizationPopup from '../../shared/components/AuthorizationPopup.vue';
  export default {
    components: {
      AuthorizationPopup
    },
    props: {
      source: String,
    },
    data: () => ({
      drawer: null
    }),
    created () {
      this.$vuetify.theme.dark = false;
      // console.log('getCurrentUser', this.getCurrentUser);
    },
    computed: {
      ...mapGetters(['getCurrentUser'])
    },
    methods: {
      ...mapActions(['logout']),
      logOut() {
        console.log('^^^Logout222')
        this.logout();
      }
    },
  }
</script>

<style lang="scss" scoped>
  // router-link {
  //   color: ;
  // }
</style>