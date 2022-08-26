<template>
    <div class="col-md-12">
        <div class="card text-black bg-light h-100">
            <div class="card-body">
                <p>全部错误</p>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="error" label="错误">
                    </el-table-column>
                    <el-table-column prop="count" label="发生次数" width="180">
                    </el-table-column>
                    <el-table-column prop="people" label="影响人数" width="180">
                    </el-table-column>
                </el-table>
                <!-- <el-element index="/error_table"></el-element> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'errorStat_list',
    data() {
        return {
            tableData: [
                {
                    error: 'Network error',
                    count: '130',
                    people: '2203'
                },
                {
                    error: 'Network error',
                    count: '130',
                    people: '2203'
                },
                {
                    error: 'Network error',
                    count: '130',
                    people: '2203'
                },
            ]
        };
    },
}
</script>


<style scoped>
</style>