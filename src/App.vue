<template>
  <div class="container clearfix">
    <Nav></Nav>
    <div class="layout">
      <CustomSlider></CustomSlider>
    </div>
  </div>
</template>

<script lang = 'ts'>
import { defineComponent, defineAsyncComponent} from "vue";
export default defineComponent({
  name: "App",
  components: {
    Nav: defineAsyncComponent(() => import("./components/Nav.vue")),
    CustomSlider: defineAsyncComponent(
      () => import("./components/CustomSlider.vue")
    )
  }
})
</script>


<style lang="scss" scoped>

</style>
