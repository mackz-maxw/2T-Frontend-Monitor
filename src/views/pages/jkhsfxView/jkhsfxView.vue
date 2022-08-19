<template>
    <div class="container-fluid">
        
        <div class = "row ">
            <div class="col-md-5 mb-3">
                <div class="card h-200">
                        <div class="card-header">
                            <h6>接口耗时分段</h6>
                        </div>
                        <div class="card-body">
                            <div class="d-grid gap-5 d-md-block">
                                <button class="btn btn-primary" type="button">小于1秒</button>
                                <button class="btn btn-primary" type="button">1-5秒</button>
                                <button class="btn btn-primary" type="button">5-10秒</button>
                                <button class="btn btn-primary" type="button">10-30秒</button>
                                <button class="btn btn-primary" type="button">大于30秒</button>
                            </div>
                            <!-- <div class = "row"> -->
                                <ul class="list-inline">
                                <li class="list-inline-item">50 数量</li>
                                <li class="list-inline-item">0.01% 百分比</li>
                                <li class="list-inline-item">08-16 日期</li>
                                </ul>
                            <!-- </div> -->

                        </div>
                    </div>
                </div>
            <div class="col-md-7 mb-3"><!-- h-100 -->
                    <div class="card ">
                        <div class="card-header ">
                            <h6>30天变化趋势 <small>（点击切换其他日期）</small></h6>
                        </div>
                        <div class="card-body ">
                            <MCharts :option="option" style="width: 100%; height: 180px"/>
                        </div>
                    </div>
            </div>

            <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">接口列表（点击查看接口详情）</a>
                    </li>
            </ul>
                <!-- <div class = "container-fluid">  style="height: 200px;" -->
            <div class = "row ">
                        <div class="col-md-5 mb-3">
                            <div class="card-header ">
                                <h6>30天变化趋势 <small>（点击切换其他日期）</small></h6>
                            </div>
                            <div class="card-body ">
                                <MCharts :option="option2" style="width: 100%; height: 300px"/>
                            </div>
                        </div>
                        <div class="col-md-7 mb-3">
                            <div class="card-header ">
                                <h6>12:00数量趋势</h6>
                            </div>
                            <div class="card-body ">
                                <MCharts :option="option2" style="width: 100%; height: 300px"/>
                            </div>
                        </div>
            </div>
                
                <!--  <div class="container">-->
            <div class = "row"><h5>时间范围12:00</h5></div>

            <!-- <div class="container"> -->
                    <div class="col-md-4 mb-3">
                        <div class="list-group">
                            <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                                https://www.test.com/mcl/ltv/application/promote/query   (85)
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">https://www.test.com/mcl/ltv/application/promote/query   (85)</a>
                            <a href="#" class="list-group-item list-group-item-action">https://www.test.com/mcl/ltv/application/promote/query   (85)</a>
                            <a href="#" class="list-group-item list-group-item-action">https://www.test.com/mcl/ltv/application/promote/query   (85)</a>
                            <a href="#" class="list-group-item list-group-item-action">https://www.test.com/mcl/ltv/application/promote/query   (85)</a>
                            <a href="#" class="list-group-item list-group-item-action">https://www.test.com/mcl/ltv/application/promote/query   (85)</a>
                            <a href="#" class="list-group-item list-group-item-action">https://www.test.com/mcl/ltv/application/promote/query   (85)</a>
                            <a href="#" class="list-group-item list-group-item-action">https://www.test.com/mcl/ltv/application/promote/query   (85)</a>
                            <a href="#" class="list-group-item list-group-item-action">https://www.test.com/mcl/ltv/application/promote/query   (85)</a>
                            <a href="#" class="list-group-item list-group-item-action">https://www.test.com/mcl/ltv/application/promote/query   (85)</a>
                        </div>
                    </div>
                    <div class="col-md-8 mb-3">
                        <div class="row">
                                <div class="col">                             
                                    <div class="card" >
                                        <div class="card-body">
                                            <h5 class="card-title">平均网络耗时 </h5>
                                            <p class="card-text">19.37s </p>    
                                         </div>
                                    </div>
                                </div>
                                <div class="col">                             
                                    <div class="card" >
                                        <div class="card-body">
                                            <h5 class="card-title">影响用户 </h5>
                                            <p class="card-text">2 </p>    
                                         </div>
                                    </div>
                                </div>
                                <div class="col">                             
                                    <div class="card" >
                                        <div class="card-body">
                                            <h5 class="card-title">发生页面 </h5>
                                            <p class="card-text">4 </p>    
                                         </div>
                                    </div>
                                </div>
                        </div>
                        <br/><br/><br/>
                        <h5>发生页面列表</h5>
                        <div class="row">
                            <div class="col">
                               <div class="card">
                                <div class="card-body">
                                    http://www.test.com/webfunny_multi/home.html
                                </div>
                                </div>
                            </div>
                        <div class="col">
                            <div class="card text-end">
                                <div class="card-body">
                                    1
                                </div>
                            </div>
                        </div>
                        </div>
                    <div class="row">
                            <div class="col">
                               <div class="card">
                                <div class="card-body">
                                    http://www.test.com/webfunny_multi/home.html
                                </div>
                                </div>
                            </div>
                        <div class="col">
                            <div class="card text-end">
                                <div class="card-body">
                                    1
                                </div>
                            </div>
                        </div>
                    </div>
                <!-- </div> -->
                    </div>               
        </div>

    </div>

</template>

<script lang="ts">

import MCharts from "@/components/MCharts/MCharts.vue";
import { option1, option2} from "./option.js";
export default {
    name: "JkhsfxView",
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


</style>