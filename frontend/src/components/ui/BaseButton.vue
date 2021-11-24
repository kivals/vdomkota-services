<template>
  <button class="btn" :class="dynamicClasses" @click.prevent="clickHandler">
    {{ title }}
  </button>
</template>

<script>
import { isExistKey } from "@/helpers/validators";

const BUTTON_TYPES = {
  PRIMARY: "primary",
  DANGER: "danger",
  SECONDARY: "secondary",
};
const BUTTON_SIZES = {
  SMALL: "small",
};
export default {
  name: "BaseButton",
  emits: ["click"],
  props: {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "primary",
      validator: function (value) {
        return isExistKey(BUTTON_TYPES, value);
      },
    },
    size: {
      type: String,
      validator: function (value) {
        return isExistKey(BUTTON_SIZES, value);
      },
    },
  },
  computed: {
    dynamicClasses() {
      const typeClass = `btn_${this.type}`;
      const sizeClass = this.size ? `btn_${this.size}` : "";
      return `${typeClass} ${sizeClass}`;
    },
  },
  methods: {
    clickHandler() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  width: 100%;
  border-radius: 0.375rem;
  border-width: 1px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: 0 0 transparent, inset 0 0 0 3px rgba(59, 130, 246, 0.5),
      0 0 transparent;
  }
  &:hover {
    opacity: 0.9;
  }
  &_small {
    font-size: 0.75rem;
    line-height: 1rem;
    padding: 0.375rem 0.5rem;
  }
  &_primary {
    color: #fff;
    background-color: rgb(47, 90, 216);
    border-color: rgb(47, 90, 216);
  }
  &_secondary {
    color: rgb(113, 128, 150);
    border-color: rgba(237, 242, 247, 0.9);
    background-color: rgb(237, 242, 247);
    &:hover {
      background-color: rgb(226, 232, 240);
    }
  }
  &_danger {
    color: #fff;
    background-color: rgb(211, 41, 41);
    border-color: rgb(211, 41, 41);
  }
}
</style>
