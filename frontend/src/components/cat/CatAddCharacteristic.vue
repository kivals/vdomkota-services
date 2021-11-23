<template>
  <div class="form-add">
    <div v-if="isShow" class="form-add__body">
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
      :title="isShow ? 'Сохранить' : 'Добавить поле'"
      type="secondary"
      @click="addClickHandler"
    />
  </div>
</template>

<script>
import AppButton from "@/components/ui/BaseButton";
import AppInput from "@/components/ui/BaseInput";
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
      isShow: false,
    };
  },
  methods: {
    addClickHandler() {
      this.isShow ? this.addCharacteristicHandler() : (this.isShow = true);
    },
    addCharacteristicHandler() {
      //TODO валидация
      if (this.property && this.value) {
        this.$emit("addCharacteristic", {
          alias: translit(this.property),
          name: this.property,
          value: this.value,
        });
      }
      this.resetState();
    },
    resetState() {
      this.property = "";
      this.value = "";
      this.isShow = false;
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
