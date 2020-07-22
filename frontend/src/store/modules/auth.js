import axios from 'axios';

const state = {
  currentUser: null
};

const getters = {
  getCurrentUser: state => state.currentUser
};

const mutations = {
  setCurrentUser: (state, payload) => {
    state.currentUser = payload;
  }
};

const actions = {
  async autoLogin({ commit }) {
    try {
      const response = await axios.get('/api/auth/users/check-auth', {
        withCredentials: true
      });
      commit('setCurrentUser', response.data.data.user)
    } catch (error) {
      console.log('error', error);
    }
  },
  async signin({ commit }, credentials) {
    try {
      const response = await axios.post('api/auth/users/sign-in', credentials);
      commit('setCurrentUser', response.data.data.user)
    } catch (error) {
      console.log('error', error);
    }
  },
  async signup({ commit }, credentials) {
    try {
      const response = await axios.post('api/auth/users/sign-up', credentials);
      commit('setCurrentUser', response.data.data.user)
    } catch (error) {
      console.log('error', error);
    }
  },
  async logout({ commit }) {
    try {
      await axios.get('api/auth/users/logout');
      commit('setCurrentUser', null);
    } catch (error) {
      console.log('error', error);
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};