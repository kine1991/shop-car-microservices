import axios from 'axios';

const state = {
  cars: null,
  car: null,
  filter: null,
  isLoading: false
}

const getters = {
  getCars: state => state.cars,
  getCar: state => state.car,
  getFilter: state => state.filter,
}

const mutations = {
  setCars: (state, payload) => {
    state.cars = payload
  },
  setCar: (state, payload) => {
    state.car = payload
  },
  setFilter: (state, payload) => {
    state.filter = payload
  },
  setIsLoading: (state, payload) => {
    state.isLoading = payload;
  }
}

const actions = {
  async fetchCars({ commit }, query) {
    commit('setIsLoading', true);
    const response = await axios.get('/api/cars', {
      params: query
    });
    commit('setCars', response.data.data.cars);
    commit('setIsLoading', false);
  },
  async fetchCar({ commit }, carId) {
    commit('setIsLoading', true);
    const response = await axios.get(`/api/cars/${carId}`);
    commit('setCar', response.data.data);
    commit('setIsLoading', false);
  },
  async fetchFilter({ commit }) {
    const response = await axios.get('/api/cars/filter');
    commit('setFilter', response.data.filter);
  },
  // eslint-disable-next-line no-unused-vars
  async createCar({ commit }, data) {
    console.log('data!', data);
    const response = await axios.post('/api/cars', data, {
      withCredentials: true
    });
    return response;
  },
  // eslint-disable-next-line no-unused-vars
  async editCar({ commit }, { carId, ...data }) {
    const response = await axios.patch(`/api/cars/${carId}`, data, {
      withCredentials: true
    });
    return response;
  },
  // eslint-disable-next-line no-unused-vars
  async deleteCar({ commit }, carId) {
    const response = await axios.delete(`/api/cars/${carId}`, {
      withCredentials: true
    });
    return response;
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}