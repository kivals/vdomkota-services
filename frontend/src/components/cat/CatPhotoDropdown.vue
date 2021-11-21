<template>
  <div class="cat-photo-dropdown" :class="{ show: isShow }">
    <a href="" class="cat-photo-dropdown__item"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-users w-4 h-4 mr-2 w-4 h-4 mr-2"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
      На главную
    </a>
    <a href="" class="cat-photo-dropdown__item"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-trash w-4 h-4 mr-2 w-4 h-4 mr-2"
      >
        <polyline points="3 6 5 6 21 6"></polyline>
        <path
          d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
        ></path>
      </svg>
      Удалить
    </a>
  </div>
</template>

<script>
export default {
  name: "CatPhotoDropdown",
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.cat-photo-dropdown {
  opacity: 0;
  visibility: hidden;
  width: 160px;
  position: absolute;
  right: 0.25rem;
  top: 2rem;
  z-index: 9999;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.09019607843137255);
  background-color: white;
  border-radius: 0.375rem;
  overflow: hidden;
  &.show {
    opacity: 1;
    visibility: visible;
  }
  &__item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0.5rem 1rem;
    color: inherit;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      background-color: rgb(237, 242, 247);
    }
    svg {
      width: 1rem;
      height: 1rem;
      margin-right: 1rem;
      display: inline-block;
      stroke-width: 1.5;
    }
  }
}
</style>
