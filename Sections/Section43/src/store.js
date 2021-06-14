import Vue from 'vue'
import Vuex from 'vuex'

import axios from "./axios-auth";
import globalAxios from 'axios'

import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    },
    storeUser(state, user) {
      state.user = user;
    },
    clearAuthData(state) {
      state.idToken = null;
      state.userId = null;
      state.user = null;
    }
  },
  actions: {
    setLogoutTimer({ commit }, expirationTime) {
      setTimeout(() => {
        commit('clearAuthData');
      }, expirationTime * 1000);
    },
    signup({ commit, dispatch }, authData) {
      console.log(authData)
      axios
        .post("/accounts:signUp?key=AIzaSyC4sv2AwSIFmhJa0CxsFrdbl604wBTgnLI", {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then((res) => {
          console.log(res);
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          });
          const now = new Date();
          const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000);
          localStorage.setItem('token', res.data.idToken);
          localStorage.setItem('expirationDate', expirationDate);
          localStorage.setItem('userId', res.data.localId);
          dispatch('storeUser', authData);
          dispatch('setLogoutTimer', res.data.expiresIn);
          router.replace('/dashboard');
        })
        .catch((err) => console.log(err));
    },
    login({ commit, dispatch }, authData) {
      axios
        .post("/accounts:signInWithPassword?key=AIzaSyC4sv2AwSIFmhJa0CxsFrdbl604wBTgnLI", {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then((res) => {
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          });
          const now = new Date();
          const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000);
          localStorage.setItem('token', res.data.idToken);
          localStorage.setItem('expirationDate', expirationDate);
          localStorage.setItem('userId', res.data.localId);
          dispatch('setLogoutTimer', res.data.expiresIn);
          router.replace('/dashboard');
        })
        .catch((err) => console.log(err));
    },
    tryAutoLogin({ commit }) {
      const token = localStorage.getItem('token');
      if (!token) return;
      const expirationDate = localStorage.getItem('expirationDate');
      const now = new Date();
      if (now >= expirationDate) return;
      const userId = localStorage.getItem('userId');
      if (!userId) return;
      commit('authUser', {
        token,
        userId
      })
    },
    logout({ commit }) {
      commit('clearAuthData');
      localStorage.removeItem('token');
      localStorage.removeItem('expirationDate');
      localStorage.removeItem('userId');
      router.replace('/signin');
    },
    storeUser({ commit, state }, userData) {
      if (!state.idToken) return;
      globalAxios.post('/users.json?auth=' + state.idToken, userData)
        .then(res => console.log(res))
        .catch(err => console.log(error));
    },
    getUser({ commit, state }) {
      if (!state.idToken) return;
      globalAxios
        .get('/users.json?auth=' + state.idToken)
        .then((res) => {
          let data = Object.entries(res.data)
            .map((x) => ({ id: x[0], ...x[1] }));
          commit('storeUser', data[data.length - 1]);
        })
        .catch((err) => console.error(err));
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    isAuthenticated(state) {
      return state.idToken !== null;
    }
  }
})