<template>
    <div class="col-md-12">
        <div class="card text-black bg-light h-100">
            <div class="card-body" id="main-chart">
                <p>时间范围</p>
                <HelloEcharts :option="option1" />
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <div class="card text-black bg-light h-100">
                <div class="card-body">
                    <p>JS错误</p>
                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column prop="error" label="错误">
                        </el-table-column>
                        <el-table-column prop="count" label="发生次数" width="180">
                        </el-table-column>
                        <el-table-column prop="people" label="影响人数" width="180">
                        </el-table-column>
                    </el-table>
                    <!-- <el-item index="/error_table"></el-item> -->
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="card text-black bg-light h-100">
                <div class="card-body">
                    <p>自定义异常</p>
                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column prop="error" label="错误">
                        </el-table-column>
                        <el-table-column prop="count" label="发生次数" width="180">
                        </el-table-column>
                        <el-table-column prop="people" label="影响人数" width="180">
                        </el-table-column>
                    </el-table>
                    <!-- <el-item index="/error_table"></el-item> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import HelloEcharts from "@/components/MCharts/MCharts.vue";
// import echarts from 'echarts';
import { option1 } from "./optionStat";

export default {
    name: 'errorStat_total',
    components: {
        HelloEcharts,
    },
    data() {
        return {
            option1: option1,
            // option2: option2,
            // option3: option3,
            width_chart1: "200px",
            height_chart1: "300px",
            width_chart2: "150px",
            height_chart2: "150px",
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
#main-chart {
    height: 300px;
    margin-bottom: 20px;
}
</style>