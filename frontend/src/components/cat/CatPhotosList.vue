<template>
  <div class="cat-photo-list">
    <cat-photo-card class="cat-photo-list__photo" />
    <cat-photo-card class="cat-photo-list__photo" />
    <cat-photo-card class="cat-photo-list__photo" />
    <cat-photo-card class="cat-photo-list__photo" />
    <cat-photo-card class="cat-photo-list__photo" />
    <cat-photo-card class="cat-photo-list__photo" />
    <cat-photo-card class="cat-photo-list__photo" />
  </div>
</template>

<script>
import CatPhotoCard from "@/components/cat/CatPhotoCard";

export default {
  name: "CatPhotosList",
  components: {
    CatPhotoCard,
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
