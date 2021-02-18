<template>
  <div id="app">
        <header-partial></header-partial>
          <router-view></router-view>
        <footer-partial></footer-partial>
    </div>
</template>

<script>
import HeaderPartial from "./components/common/HeaderPartial";
import FooterPartial from "./components/common/FooterPartial";

  export default {
    name: "App",
    components: {
      HeaderPartial,
      FooterPartial
    }
  }
</script>

<style>

</style>
