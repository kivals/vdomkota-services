<template>
  <div class="dropdown" @click="toggle" ref="menu">
    <slot name="toggler">
      <button>Toggle</button>
    </slot>
    <slot />
  </div>
</template>

<script>
export default {
  name: "AppDropdown",
  provide() {
    return {
      sharedState: this.sharedState,
    };
  },
  data() {
    return {
      sharedState: {
        active: false,
      },
    };
  },
  methods: {
    toggle() {
      this.sharedState.active = !this.sharedState.active;
    },
    close(e) {
      if (!this.$refs.menu.contains(e.target)) {
        this.sharedState.active = false;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.close);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.close);
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  cursor: pointer;
  //position: absolute;
  //right: 3%;
  //top: 3%;
}
</style>
