import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/auth';
import types from './modules/types';
import cars from './modules/cars';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    types,
    cars
  }
})