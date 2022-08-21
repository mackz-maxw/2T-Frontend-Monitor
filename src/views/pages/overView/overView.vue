<template>
    <div class="container-fluid">
        <div class="row-title">
            <div class="col-md-12 fw-bold fs-4">核心数据</div>
        </div>

        <div class="row">
            <!-- <div class="col-md-4 mb-3"> -->
            <div class="card text-black bg-light h-100" id="card-md12">
                <div class="card-header">流量数据</div>
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <div class="card">
                                <div class="card-header">浏览量(PV)</div>
                                <div class="card-body">
                                    2109832
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card">
                                <div class="card-header">访客数(UV)</div>
                                <div class="card-body">
                                    657891
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card">
                                <div class="card-header">新访客</div>
                                <div class="card-body">
                                    129871
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <div class="card-header">IP数</div>
                                <div class="card-body">
                                    657591
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <div class="card-header">频次(人均)</div>
                                <div class="card-body">
                                    3.21
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <div class="card-header">跳出率</div>
                                <div class="card-body">
                                    59.05%
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <br />
    <div class="row ">
        <div class="col-md-12">
            <div class="card" style="height: 20rem;" id="card-md12">
                <div class="card-header">
                    <h6>页面加载耗时分段数量占比</h6>
                </div>
                <div class="card-body">
                    <MCharts :option="option" style="width: 100%; height: 100%" />
                    <!-- <userPie /> -->
                </div>
            </div>
        </div>

    </div>
    <br />
    <div class="row">
        <div class="col-md-4 mb-3">
            <div class="card">
                <div class="card-header">
                    <h6>页面访问量趋势</h6>
                </div>
                <div class="card-body">
                    <MCharts :option="option" style="width: 100%; height: 400px" />
                </div>
            </div>
        </div>
        <div class="col-md-4 mb-3">
            <div class="card">
                <div class="card-header">
                    <h6>用户活跃量趋势</h6>
                </div>
                <div class="card-body">
                    <MCharts :option="option" style="width: 100%; height: 400px" />
                </div>
            </div>
        </div>

        <div class="col-md-4 mb-3">
            <div class="card ">
                <div class="card-header">
                    <h6>新用户活跃量趋势</h6>
                </div>
                <div class="card-body">
                    <MCharts :option="option" style="width: 100%; height: 400px" />
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-4 mb-3">
            <div class="card h-150">
                <div class="card-header">
                    <h6>跳出率趋势</h6>
                </div>
                <div class="card-body">
                    <MCharts :option="option" style="width: 100%; height: 400px" />
                </div>
            </div>
        </div>

        <div class="col-md-4 mb-3">
            <div class="card h-150">
                <div class="card-header">
                    <h6>用户平均在线时长</h6>
                </div>
                <div class="card-body">
                    <MCharts :option="option" style="width: 100%; height: 400px" />
                </div>
            </div>
        </div>

        <div class="col-md-4 mb-3">
            <div class="card h-150">
                <div class="card-header">
                    <h6>新用户次日留存率</h6>
                </div>
                <div class="card-body">
                    <MCharts :option="option" style="width: 100%; height: 400px" />
                </div>
            </div>
        </div>
    </div>

    <div class="row-title">
        <div class="col-md-12 fw-bold fs-4">综合数据</div>
    </div>
    <div class="row">
        <div class="col">
            <div class="card h-150">
                <div class="card-header">
                    <h6>网站访问量Top 10</h6>
                </div>
                <div class="card-body">
                    <MCharts :option="option2" style="width: 100%; height: 500px" />
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-150">
                <div class="card-header">
                    <h6>来源网站Top 10</h6>
                </div>
                <div class="card-body">
                    <MCharts :option="option2" style="width: 100%; height: 500px" />
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-150">
                <div class="card-header">
                    <h6>城市名称访问用户量Top 10</h6>
                </div>
                <div class="card-body">
                    <MCharts :option="option2" style="width: 100%; height: 500px" />

                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="card h-150">
                <div class="card-header">
                    <h6>设备型号用户量Top 10</h6>
                </div>
                <div class="card-body">
                    <MCharts :option="option2" style="width: 100%; height: 500px" />
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-150">
                <div class="card-header">
                    <h6>系统版本用户量Top 10</h6>
                </div>
                <div class="card-body">
                    <MCharts :option="option2" style="width: 100%; height: 500px" />
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-150">
                <div class="card-header">
                    <h6>应用版本访问用户量Top 10</h6>
                </div>
                <div class="card-body">
                    <MCharts :option="option2" style="width: 100%; height: 500px" />
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="card h-150">
                <div class="card-header">
                    <h6>浏览器使用量Top 10 </h6>
                </div>
                <div class="card-body">
                    <MCharts :option="option2" style="width: 100%; height: 500px" />
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-150">
                <div class="card-header">
                    <h6>设备分辨率量Top 10 </h6>
                </div>
                <div class="card-body">
                    <MCharts :option="option2" style="width: 100%; height: 500px" />
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-150">
                <div class="card-header">
                    <h6>新用户次日留存率</h6>
                </div>
                <div class="card-body">
                    <MCharts :option="option2" style="width: 100%; height: 500px" />
                </div>
            </div>
        </div>
    </div>

</template>


<script >

import MCharts from "@/components/MCharts/MCharts.vue";
import { option1, option2 } from "./option.js";
export default {
    name: "OverView",
    components: {
        MCharts,
    },
    data() {
        return {
            option: option1,
            option2: option2,
            width: "400px",
        };
    },
}

</script>


<style scoped>
.row-title {
    display: flex;
    /* text-align: center; */
    /* line-height: 10px; */
    height: 40px;
    margin-top: -20px;
    /* margin-bottom: 10px; */
    justify-content: center;
    flex-direction: column;
}

/* .row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display:         flex;
  flex-wrap: wrap;
}
.row > [class*='col-'] {
  display: flex;
  flex-direction: column;
}  */
#card-md12 {
    padding: 0px;
}
</style>