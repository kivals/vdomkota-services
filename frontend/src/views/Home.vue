<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js" />
  </div>
  <p @click="getDataFromApi">
    тут будет текст <br>
    {{ text }}
  </p>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      text: "some test text",
    };
  },
  async mounted() {
    const data = await axios.get("/api/cat/short-cat-info");
    console.log(data);
  },
  methods: {
    async getDataFromApi() {
      this.text = await axios.get("/api/cat/short-cat-info");
    },
  },
};
</script>
