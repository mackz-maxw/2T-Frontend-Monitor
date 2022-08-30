<template>
    <div class="container-fluid">
        <div class="row-title">
            <h1 class="col-md-12 fw-bold fs-4">健康数据</h1>  
        </div>

        <div class="row">
            <div class="col-md-12 mb-3">
                <div class="card text-black bg-light" >
                        <div class="card-body" >
                            <img src="@/assets/QQ.png" alt="">
                            <!-- <HelloEcharts :option="option" autoresize/> -->
                            <!-- <HelloEcharts :option= "option2" :width="width_chart1" :height="height_chart1" /> -->
                        </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <div class="card " style="height: 20rem;">
                    <div class="card-body" >
                        <h5 class="card-title">Js报错趋势</h5>
                        <h6 class="card-subtitle mb-2 text-muted">2022-08-16</h6>
                        <MCharts  :option= "option3"  style="width: 100%; height: 100%;"/>
                    </div>     
                </div>
            </div>
            <div class="col">
                <!-- -md-6 mb-3 -->
                <div class="card " style="height: 20rem;">
                    <!-- <div class="card-body" style="width: 100%; height: 100%"> -->
                    <div class="card-body" >
                        <h5 class="card-title">自定义异常趋势</h5>
                        <h6 class="card-subtitle mb-2 text-muted">2022-08-16</h6>
                        <MCharts  :option= "option3" style="width: 100%; height: 100%;"/>
                    </div>   
                </div>
            </div>
            <div class="col">
                <div class="card " style="height: 20rem;">
                    <div class="card-body" >
                        <h5 class="card-title">静态资源加载报错</h5>
                        <h6 class="card-subtitle mb-2 text-muted">2022-08-16</h6>
                            <MCharts  :option= "option3" style="width: 100%; height: 100%;"/>
                    <!-- <MCharts :option= "option3" style="max-width: 100%; max-height: 100%;"/> -->
                    </div>    
                </div>
            </div>
        </div>

        <br/>
        <div class = "row">
            <div class="col-md-4 mb-3">
                <div class="card " style="height: 20rem;">
                    <div class="card-body" >
                        <h5 class="card-title">接口请求报错</h5>
                        <h6 class="card-subtitle mb-2 text-muted">2022-08-16</h6>
                            <MCharts  :option= "option3" style="width: 100%; height: 100%;"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts">

import MCharts from "@/components/MCharts/MCharts.vue";

import { option1, option2, option3 } from "./optionHealth";
 
export default {
    name: "HealthState",
    components: {
        MCharts,
  },
    data() {
        return {
            option: option1,
            option2: option2,
            option3: option3,
            width_chart1: "200px",
            height_chart1: "150px",
            width_chart2: "150px",
            height_chart2: "150px"
        };
    },
}
</script>


<style scoped>
.embed-responsive .card-img-top {
    object-fit: cover;
}
/* .pic1{
    object-fit: cover;
} */
</style>