<template>
  <form class="cat-form" action="#">
    <div class="cat-form__body">
      <app-input
        class="cat-form__item"
        v-model="cat.name"
        label="Кличка котика"
        placeholder="Введите кличку котика"
      />

      <app-input
        class="cat-form__item"
        type="number"
        v-model="cat.age"
        label="Возраст"
        placeholder="Введите возраст котика"
        endTitle="месяцев"
      />

      <cat-characteristics :characteristics="cat.characteristics" />
    </div>

    <cat-add-characteristic class="cat-form__add" />

    <app-textarea
      class="cat-form__item"
      v-model="cat.info"
      placeholder="Введите описание котика"
      :row-count="10"
      label="История котика"
    />
  </form>
</template>

<script>
import AppInput from "@/components/ui/AppInput";
import CatCharacteristics from "@/components/cat/CatCharacteristics";
import CatAddCharacteristic from "@/components/cat/CatAddCharacteristic";
import AppTextarea from "@/components/ui/AppTextarea";

export default {
  name: "CatForm",
  components: {
    AppInput,
    AppTextarea,
    CatCharacteristics,
    CatAddCharacteristic,
  },
  props: {
    catData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      cat: this.catData,
    };
  },
};
</script>

<style lang="scss">
.cat-form {
  &__body {
    display: flex;
    flex-wrap: wrap;
  }
  &__item {
    flex: 0 1 49%;
    padding: 0.5rem 0;
    &:not(:last-child) {
      margin-right: 1%;
    }
  }
}
</style>
