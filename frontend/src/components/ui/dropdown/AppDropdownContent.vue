<template>
  <transition name="dropdown-content">
    <div v-if="active" class="dropdown__menu">
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  name: "AppDropdownContent",
  inject: ["sharedState"],
  computed: {
    active() {
      return this.sharedState.active;
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  &__menu {
    width: 160px;
    z-index: 9999;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.09019607843137255);
    background-color: white;
    border-radius: 0.375rem;
    overflow: hidden;
  }
}
.dropdown-content-enter-active,
.dropdown-content-leave-active {
  transition: all 0.2s;
}
.dropdown-content-enter,
.dropdown-content-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
