<template>
  <div class="cat-form">
    <div class="cat-form__content">
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
      </div>
      <div class="devider"></div>

      <div class="cat-form__body">
        <cat-characteristics
          :isEdit="isEdit"
          :characteristics="cat.characteristics"
          @deleteCharacteristic="deleteCharacteristicHandler"
        />
      </div>
    </div>

    <cat-add-characteristic
      v-if="isEdit"
      class="cat-form__add"
      @addCharacteristic="addCharacteristicHandler"
    />

    <app-textarea
      class="cat-form__textarea"
      v-model="cat.info"
      :disabled="!isEdit"
      placeholder="Введите описание котика"
      :row-count="10"
      label="История котика"
    />
  </div>
</template>

<script>
import AppInput from "@/components/ui/BaseInput";
import CatCharacteristics from "@/components/cat/CatCharacteristics";
import CatAddCharacteristic from "@/components/cat/CatAddCharacteristic";
import AppTextarea from "@/components/ui/BaseTextarea";

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
  &__add {
    margin-top: 1.25rem;
  }

  &__textarea {
    margin-top: 1.25rem;
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
