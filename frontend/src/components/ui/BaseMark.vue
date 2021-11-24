<template>
  <div class="mark">{{ title }}</div>
</template>

<script>
export default {
  name: "BaseMark",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.mark {
  color: #fff;
  display: inline-block;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  font-size: 0.75rem;
  line-height: 1rem;
  border-radius: 0.375rem;
  background-color: rgb(113, 128, 150);
}
</style>
