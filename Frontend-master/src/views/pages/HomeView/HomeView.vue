<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <el-menu :router="true" :default-active="activeIndex" >
          <el-menu-item index="/home/overview">
            <el-icon>
              <icon-menu />
            </el-icon>
            <span>概览</span>
          </el-menu-item>

          <el-menu-item index="/home/healthstate">
            <el-icon>
              <icon-menu />
            </el-icon>
            <span>异常数据趋势图</span>
          </el-menu-item>

          <el-menu-item index="/home/performance">
            <el-icon>
              <icon-menu />
            </el-icon>
            <span>性能预览</span>
          </el-menu-item>

          <el-menu-item index="/home/index">
            <el-icon>
              <icon-menu />
            </el-icon>
            <span>异常数据展示</span>
          </el-menu-item>

          <el-menu-item index="/home/map">
            <el-icon>
              <icon-menu />
            </el-icon>
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
// import Tabs from '../components/Tabs.vue';
import { ref } from 'vue';

const activeIndex = ref('/overview')
// const handleSelect = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
export default {
  components: {
    name: 'HomeView'
  }
}
</script>

<style scoped>
.container {
  margin-top: 20px;
}
/* #menu-left{
  border-right:0;
} */
</style>