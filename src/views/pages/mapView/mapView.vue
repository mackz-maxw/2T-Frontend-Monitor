<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 map-box">
                <div class="card text-black bg-light h-100" >
                    <!-- <div class="card-header"> TTFB平均时间</div> -->
                        <div class="card-body  h-100">
                            <h5 class="card-title">静态资源加载报错</h5>
                            <div class="position-absolute top-0 end-0 card-body">
                                <div class="btn-group" role="group" aria-label="...">
                                    <button type="button" class="btn btn-outline-dark btn-sm">Left</button>
                                    <button type="button" class="btn btn-outline-dark btn-sm">Middle</button>
                                </div>
                            </div>
                            <HelloEcharts :option= "option" height="calc(100% - 2rem)"/>
                        </div>
                </div>
            </div>
            <div class="map-list">
                <div class="card text-black bg-light" >
                    <!-- <div class="card-header"> TTFB平均时间</div> -->
                        <div class="card-body">
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import HelloEcharts from "@/components/MCharts/MCharts.vue";
// import echarts from 'echarts';
import { option } from "./optionMap";


            // width_chart1: "200px",
            // height_chart1: "150px",
            // width_chart2: "150px",
            // height_chart2: "150px"
</script>


<style scoped>
.map-box{
    max-width: calc(100% - 30rem);
    height: calc(100vh - 7rem);
}
.map-list{
    width:30rem;
}
</style>