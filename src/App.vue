<template>
  <c-theme-provider>
    <c-reset />
    <Navbar />
    <router-view />
  </c-theme-provider>
</template>

<script>
import Navbar from "./components/layout/Navbar.vue"

export default {
  name: "App",
  components: {
    Navbar
  },
};
</script>
