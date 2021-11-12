<template>
  <div class="sidebar-backdrop" v-if="isActive" @click="onBackdropClick"></div>
  <aside class="mobile-side-nav" :class="{ show: isActive }">
    <div class="mobile-side-nav__header">
      <p>ВДОМКОТА</p>
    </div>
    <div class="deliver"></div>
    <app-navbar />
  </aside>
</template>

<script>
import AppNavbar from "@/components/AppNavbar";

export default {
  name: "AppMobileSidebar",
  components: { AppNavbar },
  emits: ["closeMenu"],
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onBackdropClick() {
      this.$emit("closeMenu");
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
