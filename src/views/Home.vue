<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <c-button variant-color="green">Button</c-button>
    <HelloWorld msg="Digital-Receipt"/>
  </div>
</template>

<script>

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
 
export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
