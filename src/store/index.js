import Vue from 'vue'
import Vuex from 'vuex'
import { ethers } from 'ethers'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    walletAddress: "",
  },
  getters: {
    walletAddress: state => state.walletAddress
  },
  mutations: {
    setWalletAddress: (state, walletAddress) => (state.walletAddress = walletAddress),
  },
  actions: {
    async connectToBlockchain({ commit }) {
      try{
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        const account = ethers.utils.getAddress(accounts[0])
        commit('setWalletAddress', account)
      } catch(error) {
        console.log(error)
      }
      
    }
  },
  modules: {
  }
})
