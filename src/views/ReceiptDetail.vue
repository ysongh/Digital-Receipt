<template>
  <c-box px="10">
    <c-heading size="xl" my="5" align="center">
      Digital Receipt Detail
    </c-heading>
    <c-box align="center">
      <c-button variant-color="yellow" mb="5" as="router-link" to="/my-receipts">
        Back
      </c-button>
      <c-box w="600px" align="left" border-width="1px" rounded="lg" overflow="hidden" p="6">
        <c-box
          mt="1"
          font-weight="semibold"
          as="h4"
          line-height="tight"
          is-truncated
        >
          Receipts #{{ receipt.id}}
        </c-box>
        <c-text font-size="lg" mt="2">
          From: {{ receipt.from }}
        </c-text>
        <c-text font-size="lg" mt="2">
          Total: {{ receipt.total }} {{ receipt.type }}
        </c-text>
        <c-text font-size="md" as="i" mt="2">
          {{ receipt.description }}
        </c-text>
          <c-text font-size="lg" mt="2">
          {{ receipt.dateNow }}
        </c-text>
      </c-box>
    </c-box>
  </c-box>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ReceiptDetail',
  components: {},
  data: () => ({
    loading: false,
    receipt: {}
  }),
  computed: mapGetters(['DRContract', 'walletAddress']),
  async created() {
    try{
      let urls = await this.DRContract.getUserReceipts(this.walletAddress)
      let newReceipt = await fetch(urls[this.$route.params.id])
      newReceipt = await newReceipt.json();
      const toObject = await JSON.parse(newReceipt.receiptData)
      toObject.id = +this.$route.params.id + 1
      console.log(toObject)
      this.receipt = toObject;
    } catch(error) {
      console.log(error)
      this.loading = false
    }
  }
}
</script>