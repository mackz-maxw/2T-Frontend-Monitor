<template>
    <div class="container-fluid">
        <el-row>
            <el-col :span="12" class="border-0">
                <el-menu :router="true" mode="horizontal" :default-active="$route.path" class="border-0">
                    <el-menu-item index="/errorStat_total">概览</el-menu-item>
                    <el-menu-item index="/errorStat_list">错误列表</el-menu-item>
                    <el-menu-item index="/errorStat_rele">版本分析</el-menu-item>
                    <el-menu-item index="/errorStat_proc">待处理错误</el-menu-item>
                </el-menu>
                <!-- <ul class="nav">
                            <li class="nav-item">
                                <router-link :to="{ name: 'errorStat_total' }">概览</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{ name: 'errorStat_list' }">错误列表</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{ name: 'errorStat_rele' }">版本分析</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{ name: 'errorStat_proc' }">待处理错误</router-link>
                            </li>
                        </ul> -->
                <router-view></router-view>
            </el-col>
        </el-row>
        <!-- <div class="row">
            <router-view></router-view>
        </div> -->
    </div>
</template>


<script>
export default {
    name: 'errorStat',
}
</script>


<style scoped>
el-menu {
    border: 0;
}
</style>