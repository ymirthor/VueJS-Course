const state = {
  funds: 10000,
  stocks: []
}

const mutations = {
  buyStock(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(el => el.id === stockId);
    if (record) {
      record.quantity += quantity;
    }
    else {
      state.stocks.push({
        id: stockId,
        quantity: quantity,
      });
    }
    state.funds -= stockPrice * quantity;
  },
  sellStock(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(el => el.id === stockId);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += stockPrice * quantity;
  },
  setPortfolio(state, portfolio) {
    state.funds = portfolio.funds || 10000;
    state.stocks = portfolio.stockPortfolio || [];
  }
}

const actions = {
  sellStock({ commit }, order) {
    order.quantity = parseInt(order.quantity);
    commit("sellStock", order);
  }
}

const getters = {
  stockPortfolio(state, getters, rootState, rootGetters) {
    return state.stocks.map(stock => {
      const record = rootGetters["stocks/stocks"].find(el => el.id === stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      }
    });
  },
  funds(state) {
    return state.funds;
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}