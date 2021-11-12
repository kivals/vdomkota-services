<template>
  <ul class="side-nav__list">
    <li>
      <router-link
        :to="{ name: 'Cats' }"
        class="side-menu"
        exact-active-class="side-menu_active"
      >
        <div class="side-menu__icon">
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
            class="feather feather-home"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </div>
        <span class="side-menu__title">Котики</span>
      </router-link>
    </li>
    <li>
      <router-link
        :to="{ name: 'SiteContent' }"
        class="side-menu"
        exact-active-class="side-menu_active"
      >
        <div class="side-menu__icon">
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
            class="feather feather-layout"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="9" y1="21" x2="9" y2="9"></line>
          </svg>
        </div>
        <span class="side-menu__title">Страницы сайта</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "AppNavBar",
};
</script>

<style scoped></style>
