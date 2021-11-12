<template>
  <main-layout />
</template>

<script>
import MainLayout from "@/layout/MainLayout";
const MOBILE_WIDTH = 768;
export default {
  components: {
    MainLayout,
  },
  created() {
    this.isMobileHandler();
    window.addEventListener("resize", this.isMobileHandler);
  },
  unmounted() {
    window.removeEventListener("resize", this.isMobileHandler);
  },
  methods: {
    isMobileHandler() {
      window.outerWidth < MOBILE_WIDTH
        ? this.$store.commit("setMobileView", true)
        : this.$store.commit("setMobileView", false);
    },
  },
};
</script>

<style>
</style>
