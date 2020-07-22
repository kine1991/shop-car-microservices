<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app left>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/admin/cars">
          <v-list-item-action>
            <v-icon>mdi-email</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Cars</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="grey darken-4" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Admin</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn small text to="/">Site</v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
      <!-- <v-container class="fill-height" fluid>
        <div>Lorem ipsum ipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisipsum dolor sit amet, conicing elit. Sit, totam iste molestias, modi nam pariatur facilisdolor sit amet, consectetur adipisicing elit. Sit, totam iste molestias, modi nam pariatur facilis enim reprehenderit omnis libero distinctio maiores quod quae ipsam amet at laborum voluptatum qui?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, totam iste molestias, modi nam pariatur facilis enim reprehenderit omnis libero distinctio maiores quod quae ipsam amet at laborum voluptatum qui?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, totam iste molestias, modi nam pariatur facilis enim reprehenderit omnis libero distinctio maiores quod quae ipsam amet at laborum voluptatum qui?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, totam iste molestias, modi nam pariatur facilis enim reprehenderit omnis libero distinctio maiores quod quae ipsam amet at laborum voluptatum qui?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, totam iste molestias, modi nam pariatur facilis enim reprehenderit omnis libero distinctio maiores quod quae ipsam amet at laborum voluptatum qui?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, totam iste molestias, modi nam pariatur facilis enim reprehenderit omnis libero distinctio maiores quod quae ipsam amet at laborum voluptatum qui?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, totam iste molestias, modi nam pariatur facilis enim reprehenderit omnis libero distinctio maiores quod quae ipsam amet at laborum voluptatum qui?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, totam iste molestias, modi nam pariatur facilis enim reprehenderit omnis libero distinctio maiores quod quae ipsam amet at laborum voluptatum qui?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, totam iste molestias, modi nam pariatur facilis enim reprehenderit omnis libero distinctio maiores quod quae ipsam amet at laborum voluptatum qui?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, totam iste molestias, modi nam pariatur facilis enim reprehenderit omnis libero distinctio maiores quod quae ipsam amet at laborum voluptatum qui?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, totam iste molestias, modi nam pariatur facilis enim reprehenderit omnis libero distinctio maiores quod quae ipsam amet at laborum voluptatum qui?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, totam iste molestias, modi nam pariatur facilis enim reprehenderit omnis libero distinctio maiores quod quae ipsam amet at laborum voluptatum qui?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, totam iste molestias, modi nam pariatur facilis enim reprehenderit omnis libero distinctio maiores quod quae ipsam amet at laborum voluptatum qui?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, totam iste molestias, modi nam pariatur facilis enim reprehenderit omnis libero distinctio maiores quod quae ipsam amet at laborum voluptatum qui?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, totam iste molestias, modi nam pariatur facilis enim reprehenderit omnis libero distinctio maiores quod quae ipsam amet at laborum voluptatum qui?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, totam iste molestias, modi nam pariatur facilis enim reprehenderit omnis libero distinctio maiores quod quae ipsam amet at laborum voluptatum qui?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, totam iste molestias, modi nam pariatur facilis enim reprehenderit omnis libero distinctio maiores quod quae ipsam amet at laborum voluptatum qui?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, totam iste molestias, modi nam pariatur facilis enim reprehenderit omnis libero distinctio maiores quod quae ipsam amet at laborum voluptatum qui?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, totam iste molestias, modi nam pariatur facilis enim reprehenderit omnis libero distinctio maiores quod quae ipsam amet at laborum voluptatum qui?</div>
      </v-container> -->
    </v-main>

    <v-footer color="black" app>
      <v-spacer></v-spacer>

      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'LayoutsDemosBaselineFlipped',
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
  }
</script>
<style lang="scss" scoped>
  .header {
    // background: rebeccapurple;
    height: 64px;
    display: flex;
    align-items: center;
  }

  .nav-icon {
    margin-left: 2rem;
  }
</style>