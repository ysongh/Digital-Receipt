import Vue from 'vue'
import Vuex from 'vuex'
import { ethers } from 'ethers'

import { CONTRACT_ADDRESS }  from '../config'
import DigitalReceipt from '../../artifacts/contracts/DigitalReceipt.sol/DigitalReceipt.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    walletAddress: "",
  },
  getters: {
    walletAddress: state => state.walletAddress,
    DRContract: state => state.DRContract,
  },
  mutations: {
    setWalletAddress: (state, walletAddress) => (state.walletAddress = walletAddress),
    setContract: (state, DRContract) => (state.DRContract = DRContract),
  },
  actions: {
    async connectToBlockchain({ commit }) {
      try{
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        const account = ethers.utils.getAddress(accounts[0])
        commit('setWalletAddress', account)

        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const contract = new ethers.Contract(CONTRACT_ADDRESS, DigitalReceipt.abi, provider)
        commit('setContract', contract)
        console.log(contract)
      } catch(error) {
        console.log(error)
      }
      
    }
  },
  modules: {
  }
})
