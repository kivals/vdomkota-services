<template>
  <div class="cat-uploader">
    <base-button title="Загрузить фото" type="primary" />
    <input type="file" class="cat-uploader__input" @change="uploadImage" />
  </div>
</template>

<script>
import BaseButton from "@/components/ui/BaseButton";

export default {
  name: "BaseUploader",
  emits: ["uploadImage"],
  components: {
    BaseButton,
  },
  methods: {
    uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.$emit("uploadImage", e.target.result);
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.cat-uploader {
  position: relative;
  cursor: pointer;
  &__input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
}
</style>
