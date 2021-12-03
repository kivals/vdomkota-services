<template>
  <div class="cat-photo-list">
    <cat-photo-card
      v-for="photo in photos"
      :key="photo.path"
      :url="photo.path"
      :isEdit="isEdit && !photo.isDeleted"
      :allowDelete="allowDelete"
      :isNew="photo.isNew"
      :isDeleted="photo.isDeleted"
      @changeMainPhoto="changeMainPhoto(photo)"
      @deletePhoto="deletePhoto(photo)"
      class="cat-photo-list__photo"
    />
  </div>
</template>

<script>
import CatPhotoCard from "@/components/cat/CatPhotoCard";

export default {
  name: "CatPhotosList",
  components: {
    CatPhotoCard,
  },
  emits: ["changeMainPhoto", "deletePhoto"],
  props: {
    photos: {
      type: Array,
      required: true,
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    allowDelete() {
      return this.photos.length > 1;
    },
  },
  methods: {
    changeMainPhoto(payload) {
      this.$emit("changeMainPhoto", payload);
    },
    deletePhoto(payload) {
      this.$emit("deletePhoto", payload);
    },
  },
};
</script>

<style lang="scss" scoped>
.cat-photo-list {
  margin-top: 1.25rem;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 1.5rem;
  &__photo {
    grid-column: span 2 / span 2;
  }
}
</style>
