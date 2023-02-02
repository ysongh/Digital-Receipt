<template>
  <c-box px="10">
    <c-heading size="xl" my="5" align="center">Your Digital Receipts</c-heading>
    <c-grid w="100%" template-columns="repeat(3, 1fr)" gap="6"  v-bind:key="receipt.dateNow" v-for="receipt of receipts">
      <c-box w="100%" border-width="1px" rounded="lg" overflow="hidden" p="3">
        <c-box
          mt="1"
          font-weight="semibold"
          as="h4"
          line-height="tight"
          is-truncated
        >
          Receipts #1
        </c-box>
        <c-text font-size="lg" mt="2">
          To: {{ receipt.to }}
        </c-text>
         <c-text font-size="lg" mt="2">
          Date: {{ receipt.dateNow }}
        </c-text>
      </c-box>
    </c-grid>
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
  async created() {
    try{
      let urls = await this.DRContract.getUserReceipts(this.walletAddress)
      let newReceipts = [];
      for(let i = 0; i < urls.length; i++){
        let data = await fetch(urls[i]);
        data = await data.json();
        const toObject = await JSON.parse(data.receiptData);
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
