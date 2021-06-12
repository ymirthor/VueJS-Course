import stocks from '../../data/stocks'

const state = {
  stocks: []
}

const mutations = {
  setStocks(state, stocks) {
    state.stocks = stocks;
  },
  rndStocks(state) {
    state.stocks.map(stock => {
      stock.price = Math.round(stock.price * (0.5 + Math.random())) + 1;
    });
  }
}

const actions = {
  buyStock: ({ commit }, order) => {
    order.quantity = parseInt(order.quantity);
    commit("portfolio/buyStock", order, { root: true });
  },
  initStocks: ({ commit }) => {
    commit("setStocks", stocks);
  },
  randomizeStocks: ({ commit }) => {
    commit("rndStocks");
  }
}

const getters = {
  stocks: state => {
    return state.stocks;
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}