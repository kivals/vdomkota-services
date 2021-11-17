<template>
  <article>
    <router-link :to="{ name: 'cat', params: { alias } }" class="cat-item">
      <div class="cat-item__wrapper zoom-in">
        <div class="cat-item__photo">
          <div class="cat-item__preview">
            <img :src="photo" :alt="alias" />
          </div>
        </div>
        <div class="cat-item__text">{{ name }}</div>
      </div>
    </router-link>
  </article>
</template>

<script>
export default {
  name: "CatPreviewCard",
  props: {
    name: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    alias: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.cat-item {
  display: block;
  color: inherit;
  text-decoration: inherit;

  &__wrapper {
    position: relative;
    padding: 0.75rem;
    border-radius: 0.375rem;

    background-color: rgb(255, 255, 255);
    cursor: pointer;
  }

  &__photo {
    position: relative;
    flex: none;
    display: block;
    &:before {
      content: "";
      padding-top: 100%;
      display: block;
      width: 100%;
      box-sizing: border-box;
      border-width: 0;
      border-style: solid;
      border-color: #e2e8f0;
    }
  }

  &__preview {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    img {
      border-radius: 0.375rem;
      height: 100%;
      object-fit: cover;
      position: absolute;
      width: 100%;
    }
  }

  &__text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    margin-top: 0.75rem;
    font-weight: 500;
    font-size: 1.2rem;
  }
}
</style>
