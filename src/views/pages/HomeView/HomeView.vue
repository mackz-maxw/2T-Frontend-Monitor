<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <el-menu 
            :router="true"
        >
            <el-menu-item index="/overview">
                <el-icon><icon-menu /></el-icon>
                <span>概览</span>
            </el-menu-item>

            <el-menu-item index="/healthstate">
                <el-icon><icon-menu /></el-icon>
                <span>健康状况</span>
            </el-menu-item>

            <el-menu-item index="/performance">
                <el-icon><icon-menu /></el-icon>
                <span>性能预览</span>
            </el-menu-item>

            <el-menu-item index="/map">
                <el-icon><icon-menu /></el-icon>
                <span>地域分布</span>
            </el-menu-item>
        </el-menu>

      </el-aside>

      <!-- ___main___ -->
      <el-main >
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
    // import Tabs from '../components/Tabs.vue';
    import { ref } from 'vue';
    export default {
    components: {
            name: 'HomeView',
        },
    };
</script>

<style scoped>
.container{
    margin-top: 20px;
}

</style>