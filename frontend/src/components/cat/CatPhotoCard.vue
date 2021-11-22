<template>
  <div class="cat-photo-card zoom-in">
    <div class="cat-photo-card__content">
      <div class="cat-photo-card__photo">
        <img
          src="http://tinker-vue.left4code.com/img/preview-9.a4a1f893.jpg"
          alt=""
        />
      </div>

      <app-dropdown>
        <template v-slot:toggler>
          <a class="cat-photo-dropdown__toggler">
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
        </template>
        <app-dropdown-content>
          <app-dropdown-item>
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
          </app-dropdown-item>
          <app-dropdown-item>
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
          </app-dropdown-item>
        </app-dropdown-content>
      </app-dropdown>
    </div>
  </div>
</template>

<script>
import AppDropdown from "@/components/ui/dropdown/AppDropdown";
import AppDropdownContent from "@/components/ui/dropdown/AppDropdownContent";
import AppDropdownItem from "@/components/ui/dropdown/AppDropdownItem";

export default {
  name: "CatPhotoCard",
  components: { AppDropdown, AppDropdownContent, AppDropdownItem },
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
}
</style>
