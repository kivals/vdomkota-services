<template>
  <div class="cat-avatar">
    <div class="cat-avatar__border">
      <div class="cat-avatar__photo zoom-in">
        <img :src="avatarUrl" alt="Аватарка котика" />
      </div>
      <app-button
        class="cat-avatar__btn"
        title="Редактировать"
        type="primary"
      />
      <app-button class="cat-avatar__btn" title="Удалить" type="danger" />
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/ui/AppButton";

export default {
  name: "CatAvatar",
  components: {
    AppButton,
  },
  props: {
    avatarUrl: {
      type: String,
      required: true,
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
