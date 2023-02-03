<template>
  <c-box display="flex" justify-content="center">
    <c-box
      border-width="1px"
      rounded="lg"
      mt="10"
      p="3"
      w="500px"
    >
      <c-heading size="lg">Send Digital Receipt</c-heading>

      <c-form-control my="4">
        <c-form-label for="to" fontWeight="bold">To</c-form-label>
        <c-input id="to" v-model="to" />
      </c-form-control>

      <c-form-control my="4">
        <c-form-label for="total" fontWeight="bold">Total</c-form-label>
        <c-input id="total" v-model="total" />
      </c-form-control>

      <c-button
        @click="createReceipt()"
        mt="5"
        variant-color="yellow"
      >
        Create
      </c-button>
    </c-box>
  </c-box>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from "axios"

import { PINATA_APIKEY, PINATA_SECRETAPIKEY } from '../config'

export default {
  name: "AddReceipt",
  data: () => ({
    loading: false,
    to: "",
    total: "",
  }),
  computed: mapGetters(['DRContract']),
  methods: {
    async createReceipt() {
      try{
        const dateNow = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
        const receiptData = JSON.stringify({ 
          to: this.to,
          total: this.total,
          dateNow
        })

        const prepareToUpload = new File(
          [JSON.stringify(
            {
              receiptData
            },
            null,
            1
          )], 'metadata.json');
        let data = new FormData()
        data.append('file', prepareToUpload)
        const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", data, {
          maxContentLength: "Infinity",
          headers: {
            "Content-Type": 'multipart/form-data',
            pinata_api_key: PINATA_APIKEY, 
            pinata_secret_api_key: PINATA_SECRETAPIKEY,
          }
        })
        let url = "https://gateway.pinata.cloud/ipfs/" + res.data.IpfsHash
        console.log(url)
        
        const transaction = await this.DRContract.sendReceipt(url, this.to)
        const tx = await transaction.wait()
        console.log(tx)
      } catch(error) {
        console.log(error)
        this.loading = false
      }
    }
  }
}
</script>

<style>
  .flexRow {
    display: flex !important;
  }

  .v-input--selection-controls {
    margin-top: 5px;
    margin-left: 7px;
  }
</style>