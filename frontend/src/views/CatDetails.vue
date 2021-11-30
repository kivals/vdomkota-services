<template>
  <app-loader v-if="isLoading" />
  <div v-else class="cat-details">
    <base-modal v-show="isModalVisible" @close="closeModal">
      <template v-slot:header> This is a new modal header. </template>

      <template v-slot:body> This is a new modal body. </template>

      <template v-slot:footer> This is a new modal footer. </template>
    </base-modal>
    <!-- TODO вынести в отдельный компонент -->
    <div class="cat-details__info cat-card">
      <div class="cat-card__header">
        <h2>Детальная информация о котике по кличке {{ cat.name }}</h2>
      </div>
      <div class="cat-card__body">
        <cat-avatar
          :avatar-url="avatarUrl"
          :isEdit="isEdit"
          @edit="isEdit = true"
          @cancel="cancelEditHandler"
          @uploadImage="uploadImage"
          @save="save"
          class="cat-card__avatar"
        />
        <div class="cat-card__info">
          <cat-form
            :catData="cat"
            :isEdit="isEdit"
            @addCharacteristic="addCharacteristicHandler"
            @deleteCharacteristic="deleteCharacteristicHandler"
          />
        </div>
      </div>
    </div>
    <cat-photos-list
      :photos="photos"
      :isEdit="isEdit"
      @changeMainPhoto="changeMainPhoto"
      @deletePhoto="deletePhoto"
    />
  </div>
  <pre>
    {{ cat }}
  </pre>
</template>

<script>
import catsApi from "@/api/cat";
import AppLoader from "@/components/ui/BaseLoader";
import CatAvatar from "@/components/cat/CatAvatar";
import CatForm from "@/components/cat/CatForm";
import CatPhotosList from "@/components/cat/CatPhotosList";
import BaseModal from "@/components/ui/BaseModal";

export default {
  name: "CatDetails",
  components: {
    AppLoader,
    CatAvatar,
    CatForm,
    CatPhotosList,
    BaseModal,
  },
  data() {
    return {
      cat: null,
      isEdit: false,
      isModalVisible: false,
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    avatarUrl() {
      return this.cat.photos.find((p) => p.isMain)?.path;
    },
    photos() {
      return this.cat.photos.filter((ph) => !ph.isDeleted);
    },
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    async cancelEditHandler() {
      await this.loadCat();
      this.isEdit = false;
    },
    async loadCat() {
      try {
        this.$store.commit("startLoading");
        const catAlias = this.$route.params.alias;
        this.cat = await catsApi.getCatByAlias(catAlias);
        this.$store.commit("successLoading");
      } catch (e) {
        this.$store.commit("failLoading");
        console.error(e);
      }
    },
    addCharacteristicHandler(payload) {
      this.cat.characteristics.push(payload);
    },
    deleteCharacteristicHandler(payload) {
      this.cat.characteristics = this.cat.characteristics.filter(
        (ch) => ch.alias !== payload
      );
    },
    changeMainPhoto(photo) {
      if (photo.isNew) {
        //TODO ОПОВЕЩЕНИЕ
        console.error("Нельзя ставить на главную, еще несохраненное фото");
        return;
      }
      const currentMainPhoto = this.cat.photos.find((ph) => ph.isMain);
      currentMainPhoto.isMain = false;
      photo.isMain = true;
    },
    deletePhoto(photo) {
      if (photo.isNew) {
        this.cat.photos = this.cat.photos.filter((ph) => ph !== photo);
        return;
      }
      photo.isDeleted = true;
      if (photo.isMain) {
        photo.isMain = false;
        this.photos[0].isMain = true;
      }
    },
    uploadImage(payload) {
      this.cat.photos.push({ path: payload, isNew: true });
    },
    async save() {
      this.showModal();

      // try {
      //   this.$store.commit("startLoading");
      //   this.showModal();
      //   const catAlias = this.$route.params.alias;
      //   await catsApi.updateCat(catAlias, this.cat);
      //   this.$store.commit("successLoading");
      // } catch (e) {
      //   this.$store.commit("failLoading");
      //   console.error(e);
      // }
    },
  },
  async created() {
    await this.loadCat();
  },
};
</script>

<style lang="scss" scoped>
.cat-card {
  margin-top: 1.25rem;
  border-color: transparent;
  border-radius: 0.375rem;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.043137254901960784);
  background-color: rgba(255, 255, 255, 1);
  &__header {
    padding: 1.25rem;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-color: rgb(237, 242, 247);
    h2 {
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 500;
      margin-right: auto;
    }
  }

  &__body {
    display: flex;
    padding: 1.25rem;
  }

  &__avatar {
    width: 13rem;
    margin-left: 1.5rem;
  }

  &__info {
    flex: 1 1 0;
    padding: 0 1rem;
  }
}
</style>
