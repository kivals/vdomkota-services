<template>
  <app-page-title title="Страница просмотра и редактирования котов" />
  <div class="content__data cats-content">
    <cat-filter v-model="searchCat" class="cats-content__filter" />
    <app-loader v-if="isLoading" />
    <div v-else class="cats-content__body">
      <cat-preview-card
        v-for="cat in filteredCats"
        :key="cat.alias"
        :name="cat.name"
        :photo="cat.photo"
        :alias="cat.alias"
      />
    </div>
  </div>
</template>

<script>
import AppPageTitle from "@/components/AppPageTitle";
import CatPreviewCard from "@/components/cat/CatPreviewCard";
import AppLoader from "@/components/ui/BaseLoader";
import CatFilter from "@/components/cat/CatFilter";
import { getCats } from "@/api/cat.api";

export default {
  name: "CatsPage",
  components: {
    AppPageTitle,
    CatPreviewCard,
    CatFilter,
    AppLoader,
  },
  data() {
    return {
      cats: [],
      searchCat: "",
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    filteredCats() {
      return this.cats.filter((cat) =>
        cat.name.toLowerCase().includes(this.searchCat.toLowerCase())
      );
    },
  },
  async mounted() {
    try {
      this.$store.commit("startLoading");
      this.cats = await getCats();
      this.$store.commit("successLoading");
    } catch (e) {
      this.$store.commit("failLoading");
      console.error(e);
    }
  },
};
</script>

<style scoped></style>
