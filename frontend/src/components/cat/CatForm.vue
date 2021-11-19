<template>
  <form class="cat-form" action="#">
    <div class="cat-form__body">
      <app-input
        class="cat-form__item"
        v-model="cat.name"
        :disabled="!isEdit"
        label="Кличка котика"
        placeholder="Введите кличку котика"
      />

      <app-input
        class="cat-form__item"
        type="number"
        v-model="cat.age"
        :disabled="!isEdit"
        label="Возраст"
        placeholder="Введите возраст котика"
        endTitle="месяцев"
      />

      <cat-characteristics
        :isEdit="isEdit"
        :characteristics="cat.characteristics"
        @deleteCharacteristic="deleteCharacteristicHandler"
      />
    </div>

    <cat-add-characteristic
      v-if="isEdit"
      class="cat-form__add"
      @addCharacteristic="addCharacteristicHandler"
    />

    <app-textarea
      class="cat-form__item"
      v-model="cat.info"
      :disabled="!isEdit"
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
  emit: ["addCharacteristic", "deleteCharacteristic"],
  props: {
    catData: {
      type: Object,
      required: true,
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      cat: this.catData,
    };
  },
  methods: {
    addCharacteristicHandler(payload) {
      this.$emit("addCharacteristic", payload);
    },
    deleteCharacteristicHandler(payload) {
      this.$emit("deleteCharacteristic", payload);
    },
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
