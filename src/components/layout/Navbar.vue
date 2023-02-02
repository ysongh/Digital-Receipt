<template>
  <c-box bg="#1dab2e" w="100%" p="4" color="white">
    <c-flex align="center" justify="space-between" px="6">
      <c-flex>
        <c-link mr="4" as="router-link" to="/">
          Digital Receipt
        </c-link>
        <c-link mr="4" as="router-link" to="/">
          Home
        </c-link>
         <c-link mr="4" as="router-link" to="/add-receipt">
          Add Receipt
        </c-link>
         <c-link mr="4" as="router-link" to="/my-receipts">
          My Receipts
        </c-link>
        <c-link as="router-link" to="/about">
          About
        </c-link>
      </c-flex>
      <c-button variant-color="yellow" @click="connectToBlockchain()">
        {{ formatWalletAddress(walletAddress) }}
      </c-button>
    </c-flex>
  </c-box>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "Navbar",
  computed: mapGetters(['walletAddress']),
  methods: {
    ...mapActions(['connectToBlockchain']),
    formatWalletAddress(address) {
      if(address) return address.slice(0, 5) + "..." + address.slice(37, 42)
      else return "Connect Wallet"
    }
  }
}
</script>

<style>
</style>