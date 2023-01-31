<template>
  <c-box display="flex" flex-direction="column" align-items="center">
    <c-heading size="xl" mt="20">Digital Receipt</c-heading>
    <c-text font-size="xl" mt="2">
      No more paper receipt
    </c-text>
    <c-button mt="4" variant-color="yellow"  as="router-link" to="/add-receipt">
      Send Receipt
    </c-button>
  </c-box>
</template>

<script>

// @ is an alias to /src
 
export default {
  name: 'Home',
  components: {
    
  }
}
</script>
