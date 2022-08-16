<template>
    <div class="col-md-12">
        <div class="card text-black bg-light h-100">
            <div class="card-body">
                <p>时间范围</p>
                <el-menu :router="true" mode="horizontal">
                    <el-menu-item index="/error_table">表格</el-menu-item>
                </el-menu>
                <router-view></router-view>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <div class="card text-black bg-light h-100">
                <div class="card-body">
                    <p>JS错误</p>
                    <!-- <el-item index="/error_table"></el-item> -->
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="card text-black bg-light h-100">
                <div class="card-body">
                    <p>自定义异常</p>
                    <!-- <el-item index="/error_table"></el-item> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'errorStat_total',
}
</script>


<style scoped>
</style>