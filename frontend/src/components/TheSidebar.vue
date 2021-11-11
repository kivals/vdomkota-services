<template>
  <aside class="side-nav">
    <div class="side-nav__header">
      <p>ВДОМКОТА</p>
      <img
        class="side-nav__logo"
        src="https://firebasestorage.googleapis.com/v0/b/vdomkota-6332e.appspot.com/o/logos%2Flogo_v_dom_kota.jpg?alt=media&token=e5635bf3-73a7-4b97-bb56-dbee2b013f16"
        alt=""
      />
    </div>
    <div class="side-nav__deliver"></div>
    <app-nav-bar />
  </aside>
</template>

<script>
import AppNavBar from "@/components/TheNavBar";

export default {
  name: "AppSidebar",
  components: { AppNavBar },
};
</script>

<style scoped></style>
