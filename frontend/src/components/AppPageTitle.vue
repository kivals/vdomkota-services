<template>
  <div class="title">
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: "AppPageTitle",
  props: {
    title: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin-top: 2rem;
  h2 {
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
}
</style>
