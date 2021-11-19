<template>
  <div class="form-add">
    <div class="form-add__body">
      <app-input
        class="form-add__input"
        v-model="property"
        placeholder="Введите название свойства"
        startTitle="Название"
      />

      <app-input
        class="form-add__input"
        v-model="value"
        placeholder="Введите значение свойства"
        startTitle="Значение"
      />
    </div>
    <app-button
      class="cat-avatar__btn"
      title="Добавить поле"
      type="secondary"
      @click="addCharacteristicHandler"
    />
  </div>
</template>

<script>
import AppButton from "@/components/ui/AppButton";
import AppInput from "@/components/ui/AppInput";
import { translit } from "@/helpers/utils";

export default {
  name: "CatAddCharacteristic",
  components: {
    AppButton,
    AppInput,
  },
  emits: ["addCharacteristic"],
  data() {
    return {
      property: "",
      value: "",
    };
  },
  methods: {
    addCharacteristicHandler() {
      //TODO валидация
      if (this.property && this.value) {
        this.$emit("addCharacteristic", {
          alias: translit(this.property),
          name: this.property,
          value: this.value,
        });

        this.property = "";
        this.value = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form-add {
  &__body {
    max-width: 49%;
    margin-bottom: 0.5rem;
  }
  &__input {
    margin-top: 0.5rem;
  }
  button {
    width: auto;
  }
}
</style>
