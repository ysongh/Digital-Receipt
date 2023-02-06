<template>
  <c-box px="10">
    <c-heading size="xl" my="5" align="center">Your Digital Receipts</c-heading>
   
    <c-box w="100%" border-width="1px" rounded="lg" overflow="hidden" p="3">
      <c-grid template-columns="1fr 2fr 2fr 2fr 1fr" gap="6">
        <c-box
          mt="1"
          font-weight="bold"
          as="h4"
          line-height="tight"
          is-truncated
        >
          Receipt.id
        </c-box>
        <c-text font-size="lg" mt="2" font-weight="bold">
          From
        </c-text>
        <c-text font-size="lg" mt="2" font-weight="bold">
          Total
        </c-text>
        <c-text font-size="lg" mt="2" font-weight="bold">
          Date
        </c-text>
        <c-text font-size="lg" mt="2" font-weight="bold">
          
        </c-text>
      </c-grid>
    </c-box>

    <c-box w="100%" border-width="1px" rounded="lg" overflow="hidden" p="3" v-bind:key="receipt.dateNow" v-for="receipt of receipts">
      <c-grid template-columns="1fr 2fr 2fr 2fr 1fr" gap="10">
        <c-box
          mt="1"
          font-weight="semibold"
          as="h4"
          line-height="tight"
          is-truncated
        >
          {{ receipt.id }}
        </c-box>
        <c-text font-size="lg" mt="2">
          {{ formatWalletAddress(receipt.from) }}
        </c-text>
        <c-text font-size="lg" mt="2" align="right" mr="10">
          {{ receipt.total }} {{ receipt.type }}
        </c-text>
          <c-text font-size="lg" mt="2">
          {{ receipt.dateNow }}
        </c-text>
        <c-button variant-color="yellow"  as="router-link" to="/add-receipt">
          View
        </c-button>
      </c-grid>
    </c-box>
  </c-box>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MyReceipts',
  components: {},
  data: () => ({
    loading: false,
    receipts: []
  }),
  computed: mapGetters(['DRContract', 'walletAddress']),
  methods: {
    formatWalletAddress(address) {
      if(address) return address.slice(0, 10) + "..." + address.slice(32, 42)
      else return ""
    }
  },
  async created() {
    try{
      let urls = await this.DRContract.getUserReceipts(this.walletAddress)
      let newReceipts = [];
      for(let i = 0; i < urls.length; i++){
        let data = await fetch(urls[i]);
        data = await data.json();
        const toObject = await JSON.parse(data.receiptData);
        toObject.id = i + 1;
        console.log(toObject)
        newReceipts.push(toObject);
      }
      this.receipts = newReceipts;
    } catch(error) {
      console.log(error)
      this.loading = false
    }
  }
}
</script>
