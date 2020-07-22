import axios from 'axios';

const state = {
  types: null,
  categories: null,
  isLoading: false
};

const getters = {
  getTypes: state => state.types,
  getCategories: state => state.categories,
  getIsLoading: state => state.isLoading,
};

const mutations = {
  setTypes: (state, payload) => {
    state.types = payload;
  },
  setCategories: (state, payload) => {
    state.categories = payload;
  },
  setIsLoading: (state, payload) => {
    state.isLoading = payload;
  }
};

const actions = {
  async fetchTypes({ commit }) {
    commit('setIsLoading', true);
    try {
      const response = await axios.get('/api/cars/types');
      const randomCategories = getRandomCategories(response.data.data.types);
      commit('setCategories', randomCategories);
      commit('setTypes', response.data.data.types);
      commit('setIsLoading', false);
    } catch (error) {
      commit('setIsLoading', false);
      console.log(error);
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};

const getRandomCategories = (array) => {
  const arrayOfCar = array.filter(arr => arr.category === 'car');
  const arrayOfMotorcycle = array.filter(arr => arr.category === 'motorcycle');
  const randomArrayOfCar = arrayOfCar[Math.floor(Math.random() * arrayOfCar.length)];
  const randomArrayOfMotorcycle = arrayOfMotorcycle[Math.floor(Math.random() * arrayOfMotorcycle.length)];
  return [randomArrayOfCar, randomArrayOfMotorcycle]
}