<template>
  <div class="cat-form-control">
    <label class="cat-form-control__label">{{ label }}</label>
    <textarea
      class="border-radius-left border-radius-right"
      v-model="text"
      :placeholder="placeholder"
      :rows="rowCount"
    />
  </div>
</template>

<script>
export default {
  name: "AppTextarea",
  emits: ["update:modelValue"],
  props: {
    modelValue: {},
    label: {
      type: String,
      default: "",
    },
    rowCount: {
      type: Number,
      default: 3,
    },
    placeholder: {
      type: String,
      default: "Введите значение",
    },
  },
  data() {
    return {
      text: this.modelValue,
    };
  },
  watch: {
    text(newValue) {
      this.$emit("update:modelValue", newValue);
    },
  },
};
</script>
