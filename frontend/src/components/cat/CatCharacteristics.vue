<template>
  <app-input
    class="cat-form__item"
    v-for="characteristic in characteristics"
    v-model="characteristic.value"
    :disabled="!isEdit"
    :key="characteristic.alias"
    :label="characteristic.name"
    :deleteButton="isEdit"
    @deleteClick="deleteInputHandler(characteristic.alias)"
  />
</template>

<script>
import AppInput from "@/components/ui/AppInput";

export default {
  name: "CatCharacteristics",
  emits: ["deleteCharacteristic"],
  components: {
    AppInput,
  },
  props: {
    characteristics: {
      type: Array,
      required: true,
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    deleteInputHandler(alias) {
      this.$emit("deleteCharacteristic", alias);
    },
  },
};
</script>

<style lang="scss" scoped></style>
