<template>
  <div class="container">
    <app-sidebar></app-sidebar>

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppSidebar from "@/components/TheSidebar";

export default {
  name: "MainLayout",
  components: { AppSidebar },
};
</script>

<style lang="scss">
.container {
  display: flex;
  overflow: hidden;
  background-color: rgb(22, 35, 67);
  position: relative;
  z-index: 0;
}

.side-nav {
  flex-shrink: 0;
  width: 16rem;
  padding: 1rem;
  &__header {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-weight: 600;
      font-size: 2rem;
      color: $color-brand;
      padding: 0.75rem 0;
    }
  }
  &__logo {
    height: 8rem;
    width: 8rem;
    object-fit: cover;
    border-radius: 9999px;
  }

  &__deliver {
    height: 1px;
    position: relative;
    width: 100%;
    background-color: rgb(38, 52, 87);
    margin: 1.5rem 0;
  }
}

.side-menu {
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 0.25rem;
  padding-left: 1.25rem;
  position: relative;
  color: rgb(148, 161, 183);

  &__title {
    display: flex;
    align-items: center;
    margin-left: 0.75rem;
    width: 100%;
  }

  &_active {
    background-color: rgb(28, 63, 170);
    .side-menu__title {
      color: #fff;
      font-weight: 500;
    }
  }
}
.content {
  border-radius: 35px/50px 0 0 0;
  background-color: rgb(240, 245, 255);
  flex: 1 1 0%;
  margin-left: 1rem;
  min-width: 0;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 2.5rem;
  position: relative;
  &:before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    border-radius: 40px 0 0 0;
    background-color: rgb(191, 203, 228);
    margin-top: 2rem;
    margin-left: -1rem;
  }

  &__data {
    margin-top: 1rem;
  }
}

.cats-content {
  &__body {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.25rem;
    padding-top: 1.25rem;
    margin-top: 1.25rem;
    border-top-width: 1px;
    border-color: rgb(222, 229, 245);
  }
}

.switcher-filter {
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 12rem;
  height: 3rem;
  border-radius: 9999px;
  border: 2px solid #e2e8f0;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.043137254901960784);

  &__text {
    color: rgb(74, 85, 104);
    margin-right: 1rem;
  }

  &__toggle {
    position: relative;
    border-radius: 9999px;
    cursor: pointer;
    outline: 2px solid transparent;
    outline-offset: 2px;
    width: 38px;
    height: 24px;
    padding: 1px;
    border: 1px solid #e2e8f0;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      width: 22px;
      height: 22px;
      transition: all 0.2s ease-in-out;
      box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
      border-radius: 9999px;
      margin: auto 0;
    }
  }
}
</style>
