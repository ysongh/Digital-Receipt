<template>
  <c-box display="flex" justify-content="center">
    <c-box
      border-width="1px"
      rounded="lg"
      mt="10"
      p="3"
      w="500px"
    >
      <c-heading size="lg">Add Your Website Template</c-heading>

      <c-form-control my="4">
        <c-form-label for="to" fontWeight="bold">To</c-form-label>
        <c-input id="to" v-model="to" />
      </c-form-control>
      
      <label for="code"><strong>Upload Receipt</strong></label>
      <br>
      <input
        id="code"
        class="mb-4"
        type="file"
        label="Upload Receipt"
        outlined
        dense
        @change="previewFiles">

      <br>

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

export default {
  name: "AddReceipt",
  data: () => ({
    loading: false,
    to: "",
    description: "",
    file: null,
  }),
  methods: {
    previewFiles(event) {
      this.file = event.target.files
    },
    async createReceipt() {
      try{
        console.log(this.to, this.file)
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