const state = {
  counter: 0
};

const getters = {
  doubleCounter: state => {
    return state.counter * 2;
  },
  clickCounter: state => {
    return state.counter + ' Clicks';
  }
};

const mutations = {
  increment: (state, payload) => {
    state.counter += payload;
  },
  decrement: (state, payload) => {
    state.counter -= payload;
  }
};

const actions = {
  increment: ({ commit }, payload) => {
    commit('increment', payload);
  },
  decrement: ({ commit }, payload) => {
    commit('decrement', payload);
  },
  asyncIncrement: ({ commit }, payload) => {
    setTimeout(_ => {
      commit('increment', payload.by);
    }, payload.duration)
  },
  asyncDecrement: ({ commit }, payload) => {
    setTimeout(_ => {
      commit('decrement', payload.by);
    }, payload.duration);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}