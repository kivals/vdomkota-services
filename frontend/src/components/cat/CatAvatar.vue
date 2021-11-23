<template>
  <div class="cat-avatar">
    <div class="cat-avatar__border">
      <div class="cat-avatar__photo zoom-in">
        <img :src="avatarUrl" alt="Аватарка котика" />
      </div>
      <template v-if="isEdit">
        <app-button
          class="cat-avatar__btn"
          title="Отменить"
          type="primary"
          @click="cancelHandler"
        />

        <app-button
          class="cat-avatar__btn"
          title="Удалить котика"
          type="danger"
        />
      </template>
      <app-button
        v-else
        class="cat-avatar__btn"
        title="Редактировать"
        type="primary"
        @click="editHandler"
      />
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/ui/BaseButton";

export default {
  name: "CatAvatar",
  components: {
    AppButton,
  },
  emits: ["edit", "cancel"],
  props: {
    avatarUrl: {
      type: String,
      required: true,
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    editHandler() {
      this.$emit("edit");
    },
    cancelHandler() {
      this.$emit("cancel");
    },
  },
};
</script>

<style lang="scss">
.cat-avatar {
  &__border {
    padding: 1.25rem;
    border-width: 2px;
    border-style: dashed;
    border-radius: 0.375rem;
    border-color: rgb(237, 242, 247);
  }
  &__photo {
    position: relative;
    height: 10rem;
    cursor: pointer;
    img {
      border-radius: 0.375rem;
      height: 100%;
      object-fit: cover;
      position: absolute;
      width: 100%;
    }
  }

  &__btn {
    margin-top: 1.25rem;
    width: 100%;
  }
}
</style>
