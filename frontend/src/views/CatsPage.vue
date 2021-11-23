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
import catsApi from "@/api/cat";
import AppLoader from "@/components/ui/AppLoader";
import CatFilter from "@/components/cat/CatFilter";

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
      isLoading: true,
      cats: [],
      searchCat: "",
    };
  },
  computed: {
    filteredCats() {
      return this.cats.filter((cat) =>
        cat.name.toLowerCase().includes(this.searchCat.toLowerCase())
      );
    },
  },
  async mounted() {
    try {
      this.cats = await catsApi.getBaseCatInfo();
      this.isLoading = false;
    } catch (e) {
      console.error(e);
      this.isLoading = false;
    }
  },
};
</script>

<style scoped></style>
