<template>
  <c-box px="10">
    <c-heading size="xl" my="5" align="center">Your Digital Receipts</c-heading>
    <c-grid w="100%" template-columns="repeat(3, 1fr)" gap="6">
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
          To: 0x0
        </c-text>
         <c-text font-size="lg" mt="2">
          Date: Today
        </c-text>
      </c-box>
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
          To: 0x0
        </c-text>
         <c-text font-size="lg" mt="2">
          Date: Today
        </c-text>
      </c-box>
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
          To: 0x0
        </c-text>
         <c-text font-size="lg" mt="2">
          Date: Today
        </c-text>
      </c-box>
    </c-grid>
  </c-box>
</template>

<script>
 
export default {
  name: 'MyReceipts',
  components: {
    
  }
}
</script>
