<template>
  <div class="form-add">
    <div class="form-add__body">
      <app-input
        placeholder="Введите название свойства"
        startTitle="Название"
      />

      <app-input
        placeholder="Введите значение свойства"
        startTitle="Значение"
      />
    </div>
    <app-button
      class="cat-avatar__btn"
      title="Добавить поле"
      type="secondary"
    />
  </div>
</template>

<script>
import AppButton from "@/components/ui/AppButton";
import AppInput from "@/components/ui/AppInput";

export default {
  name: "CatAddCharacteristic",
  components: {
    AppButton,
    AppInput,
  },
};
</script>

<style lang="scss" scoped>
.form-add {
  &__body {
    max-width: 49%;
  }
  button {
    width: auto;
  }
}
</style>
