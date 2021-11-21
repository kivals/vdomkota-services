<template>
  <div class="cat-photo-card zoom-in">
    <div class="cat-photo-card__content">
      <cat-photo-dropdown :isShow="isDropdown" ref="menu" />
      <div class="cat-photo-card__photo">
        <img
          src="http://tinker-vue.left4code.com/img/preview-9.a4a1f893.jpg"
          alt=""
        />
      </div>
      <div class="cat-photo-card__menu cat-photo-menu">
        <a @click.prevent="clickShowMenuHandler" class="cat-photo-menu__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="
              feather feather-more-vertical
              w-5
              h-5
              text-gray-600
              w-5
              h-5
              text-gray-600
            "
          >
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="12" cy="5" r="1"></circle>
            <circle cx="12" cy="19" r="1"></circle>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import CatPhotoDropdown from "@/components/cat/CatPhotoDropdown";

export default {
  name: "CatPhotoCard",
  components: { CatPhotoDropdown },
  data() {
    return {
      isDropdown: false,
    };
  },
  methods: {
    clickShowMenuHandler() {
      const _this = this;

      const closeListerner = (e) => {
        console.log('WIN CLOSW')
        if (_this.catchOutsideClick(e, _this.$refs.menu))
          window.removeEventListener("click", closeListerner),
            (_this.isOpen = false);
      };

      window.addEventListener("click", closeListerner);
      this.isDropdown = !this.isDropdown;
    },
    catchOutsideClick(event, dropdown)  {

      // When user clicks menu — do nothing
      if( dropdown === event.target )
        return false

      // When user clicks outside of the menu — close the menu
      if( this.isOpen && dropdown !== event.target )
        return true

    }
    // closeDropdownHandler() {
    //
    //   if(this.isDropdown) {
    //     this.isDropdown = false;
    //     console.log('close')
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped>
.cat-photo-card {
  border-color: transparent;
  border-radius: 0.375rem;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.043137254901960784);
  background-color: rgb(255, 255, 255);
  &__content {
    position: relative;
    padding: 2rem;
    border-radius: 0.375rem;
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

  &__menu {
    position: absolute;
    top: 0;
    right: 0;
    margin-left: auto;
    margin-right: 0.5rem;
    margin-top: 0.5rem;
  }
}

.cat-photo-menu {
  cursor: pointer;
  &__icon {
    display: block;
    width: 1.25rem;
    height: 1.25rem;
    svg {
      width: 1.25rem;
      height: 1.25rem;
      color: rgb(113, 128, 150);
      display: inline-block;
      stroke-width: 1.5;
      vertical-align: middle;
    }
  }
}
</style>
