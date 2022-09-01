<template>
  <div>
    <el-container>
      <el-aside width="200px" class="aside-left" :border="true">
        <el-menu 
        :default-active="$route.path" 
        :router="true" 

        class="menu-left"
        active-text-color="#21d48f" 
        :border="true">
          <el-menu-item index="/home/overview">
            <img src="/img/about.svg" alt="icon" />
            <span>概览</span>
          </el-menu-item>

          <el-menu-item index="/home/healthstate">
            <img src="/img/detect.svg" alt="icon" />
            <span>健康状况</span>
          </el-menu-item>

          <el-menu-item index="/home/performance">
            <img src="/img/performance.svg" alt="icon" />
            <span>性能预览</span>
          </el-menu-item>

          <el-menu-item index="/home/map">
            <img src="/img/region.svg" alt="icon" />
            <span>地域分布</span>
          </el-menu-item>
        </el-menu>

      </el-aside>

      <!-- ___main___ -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
export default {
  components: {
    name: 'HomeView'
  }
}
</script>

<style scoped>
.container {
  margin-top: 20px;
  /* position: fixed; */
}
.aside-left{
  border-right: 1px solid #dcdfe6;
}
.menu-left::after{
  /* border: 2px rgb(162, 215, 211) solid; */
  width: 400%;
  height: 288px;
  
  content: '';
  position: absolute;
  top: 150%;
  left: -150%;

  display: block;
  transform: rotate(45deg);
  background-image: url(/img/tomato.svg);
  background-repeat: repeat;
  /* background-position: 0 8%; */
  z-index: -5;
}
.menu-left{
  border-right:0;
  background-color: transparent;

  /* position: fixed;
  z-index: 10; */
}
.menu-left > *{
  background-color: transparent;
}
img{
  margin: 0 15px;
}
</style>