<template>
  <c-box display="flex" flex-direction="column" align-items="center">
    <c-heading size="xl" mt="20">Digital Receipt</c-heading>
    <c-text font-size="xl" mt="2" mb="4">
      No more paper receipt
    </c-text>
    <c-button v-if="!walletAddress" variant-color="yellow" @click="connectToBlockchain()">
      Connect Wallet
    </c-button>
    <div v-else>
      <c-button variant-color="yellow" ml="1" mb="2" as="router-link" to="/add-receipt">
        Send Receipt
      </c-button>
      <br>
      <c-button variant-color="yellow"  as="router-link" to="/my-receipts">
        View Receipts
      </c-button>
    </div>
   
  </c-box>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
 
export default {
  name: 'Home',
  computed: mapGetters(['walletAddress']),
  methods: {
    ...mapActions(['connectToBlockchain'])
  }
}
</script>
