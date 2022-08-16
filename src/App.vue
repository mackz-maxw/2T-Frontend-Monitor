<template>
  <!-- <div class="container clearfix">
    <Nav></Nav>
    <div class="layout">
      <CustomSlider></CustomSlider>
    </div>
  </div> -->
  <NavBar></NavBar>
  <router-view></router-view>
</template>

<script lang = 'ts'>
// import { defineComponent, defineAsyncComponent} from "vue";
import { useRoute, useRouter } from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import NavBar from './components/NavBar.vue';

export default {
    setup () {
      const route = useRoute
      const router = useRouter()
    },
    name: "App",
    components:{
      NavBar
  }
}
// export default defineComponent({
//   name: "App",
//   components: {
//     Nav: defineAsyncComponent(() => import("./components/Nav.vue")),
//     CustomSlider: defineAsyncComponent(
//       () => import("./components/CustomSlider.vue")
//     )
//   }
// })
</script>


<style lang="scss" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
