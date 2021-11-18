<template>
  <app-input
    class="cat-form__item"
    v-for="characteristic in characteristics"
    v-model="characteristic.value"
    :key="characteristic.alias"
    :label="characteristic.name"
  />
</template>

<script>
import AppInput from "@/components/ui/AppInput";

export default {
  name: "CatCharacteristics",
  components: {
    AppInput,
  },
  props: {
    characteristics: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
