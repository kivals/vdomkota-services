<template>
  <div class="cat-filter">
    <div class="cat-filter__search">
      <input v-model="searchText" type="text" placeholder="Найти кота..." />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </div>
    <div class="cat-filter__switcher switcher-filter">
      <div class="switcher-filter__text">Котики дома</div>
      <div class="switcher-filter__toggle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatFilter",
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      searchText: "",
    };
  },
  watch: {
    searchText(newValue) {
      this.$emit("update:modelValue", newValue);
    },
  },
};
</script>

<style lang="scss" scoped>
.cat-filter {
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  &__search {
    position: relative;
    color: rgb(74, 85, 104);
    input {
      color: inherit;
      font-size: inherit;
      appearance: none;
      width: 16rem;
      padding: 0.75rem 2.5rem 0.75rem 1rem;
      border-radius: 0.375rem;
      border: 2px solid transparent;
      position: relative;
      box-shadow: 0 3px 20px rgba(0, 0, 0, 0.043137254901960784);
      background-color: rgb(255, 255, 255);
      &::placeholder {
        color: rgb(160, 174, 192);
      }
      &:focus {
        border: 2px solid #96c0f8;
      }
    }

    svg {
      position: absolute;
      width: 1.2rem;
      height: 1.2rem;
      right: 0;
      top: 0;
      bottom: 0;
      margin-right: 0.75rem;
      margin-top: auto;
      margin-bottom: auto;
      display: inline-block;
      stroke-width: 1.5;
    }
  }
}
</style>
