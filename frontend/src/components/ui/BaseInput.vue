<template>
  <div class="cat-form-control">
    <label v-if="label" class="cat-form-control__label">{{ label }}</label>
    <div class="cat-form-control__body">
      <div
        v-if="startTitle"
        class="cat-form-control__description border-radius-left"
      >
        {{ startTitle }}
      </div>
      <input
        :disabled="disabled"
        :class="inputClasses"
        v-model="inputValue"
        :type="type"
        :placeholder="placeholder"
      />
      <div
        v-if="endTitle"
        class="cat-form-control__description border-radius-right"
      >
        {{ endTitle }}
      </div>

      <div
        v-if="deleteButton"
        class="cat-form-control__delete border-radius-right"
        @click="deleteHandler"
      >
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
          class="feather feather-trash-2 w-4 h-4 mr-1 w-4 h-4 mr-1"
        >
          <polyline points="3 6 5 6 21 6"></polyline>
          <path
            d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
          ></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { isExistKey } from "@/helpers/validators";

const INPUT_TYPES = {
  NUMBER: "number",
  TEXT: "text",
};
export default {
  name: "BaseInput",
  emits: ["update:modelValue", "deleteClick"],
  props: {
    modelValue: {},
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: INPUT_TYPES.TEXT,
      validator: function (value) {
        return isExistKey(INPUT_TYPES, value);
      },
    },
    placeholder: {
      type: String,
      default: "Введите значение",
    },
    startTitle: {
      type: String,
      default: "",
    },
    endTitle: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    deleteButton: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      inputValue: this.modelValue,
    };
  },
  computed: {
    inputClasses() {
      if (!this.startTitle && !this.endTitle) {
        return "border-radius-left border-radius-right";
      }
      let inputClass = "";
      if (this.startTitle) {
        inputClass += "border-radius-right";
      }
      if (this.endTitle) {
        inputClass += "border-radius-left";
      }
      return inputClass;
    },
  },
  methods: {
    deleteHandler() {
      this.$emit("deleteClick");
    },
  },
  watch: {
    inputValue(newValue) {
      this.$emit("update:modelValue", newValue);
    },
    modelValue(value) {
      this.inputValue = value;
    },
  },
};
</script>
