<template>
    <div class="container-fluid">
        <div class="row-title">
            <div class="col-md-12 fw-bold fs-4">页面性能</div>  
        </div>

        <div class="row">
            <div class="col-md-4 mb-3">
                <div class="card text-black bg-light h-100" >
                    <!-- <div class="card-header"> TTFB平均时间</div> -->
                        <div class="card-body">
                            <h5 class="card-title">TTFB平均时间</h5>
                            <p class="card-text">              
                                159.91
                                <small>ms</small></p>
                        </div>
                </div>
            </div>

            <div class="col-md-4 mb-3">
                <div class="card text-black bg-light h-100" >
                    <!-- <div class="card-header"></div> -->
                        <div class="card-body">
                            <h5 class="card-title">Dom解析时间</h5>
                            <p class="card-text">
                                2.58
                                <small>s</small>
                            </p>
                        </div>
                </div>
            </div>

            <div class="col-md-4 mb-3">
                <div class="card text-black bg-light h-100" >
                    <!-- <div class="card-header">Header</div> -->
                        <div class="card-body">
                            <h5 class="card-title">页面平均加载时间</h5>
                            <p class="card-text">
                                2.74
                                <small>s</small>
                            </p>
                        </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6 mb-3">
                <div class="card h-100">
                    <div class="card-header">
                        <h6>页面加载耗时分段数量占比</h6>
                    </div>
                    <div class="card-body">
<<<<<<< HEAD
                        <MCharts :option="option" />
=======
                        <HelloEcharts :option="option" />
>>>>>>> ede040898ede27acfabcd414bc62cc44597544f6
                        <!-- <userPie /> -->
                    </div>
                </div>
            </div>
            <div class="col-md-6 mb-3">
                <div class="card h-100">
                    <div class="card-header">
                        页面加载耗时路由Top10
                    </div>
                    <div class="card-body">
                        <table class="table table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col">页面路由</th>
                                    <th scope="col">数量</th>
                                    <th scope="col">平均耗时</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">https://www.webfunny.cn/</th>
                                    <td>6.62万</td>
                                    <td>3.96s</td>
                                </tr>
                                <tr>
                                    <th scope="row">https://www.webfunny.cn/des.html</th>
                                    <td>5.53万</td>
                                    <td>1.38s</td>
                                </tr>
                                <tr>
                                    <th scope="row">https://www.webfunny.cn/home.html</th>
                                    <!-- <td colspan="2">5.53万</td> -->
                                    <td>5.53万</td>
                                    <td>1.38s</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="row-title">
            <div class="col-md-12 fw-bold fs-4">接口性能</div>  
        </div>
        
        <div class="row">
            <div class="col-md-4 mb-3">
                <div class="card text-black bg-light h-100" >
                    <!-- <div class="card-header"> 接口请求总量</div> -->
                        <div class="card-body">
                            <h5 class="card-title">接口请求总量</h5>
                            <p class="card-text">
                                214.15
                                <small>ms</small>
                            </p>
                        </div>
                </div>
            </div>

            <div class="col-md-4 mb-3">
                <div class="card text-black bg-light h-100" >
                    <!-- <div class="card-header">接口请求平均耗时</div> -->
                        <div class="card-body">
                            <h5 class="card-title">接口请求平均耗时</h5>
                            <p class="card-text">
                                214.15
                                <small>ms</small>          
                            </p>
                        </div>
                </div>
            </div>

            <div class="col-md-4 mb-3">
                <div class="card text-black bg-light h-100" >
                    <!-- <div class="card-header">接口请求成功率</div> -->
                        <div class="card-body">
                             <h5 class="card-title">接口请求成功率</h5>
                            <p class="card-text">
                                100%     
                            </p>
                        </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <div class="card " style="height: 20rem;">
                    <div class="card-header">
                        接口请求耗时分段数量占比
                    </div>
                    <div class="card-body">
<<<<<<< HEAD
                        <MCharts :option="option" />
=======
                        <HelloEcharts :option="option" />
>>>>>>> ede040898ede27acfabcd414bc62cc44597544f6
                    </div>
                </div>
            </div>
           <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        接口请求耗时Top10
                    </div>
                    <div class="card-body">
                        <table class="table table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col">接口地址</th>
                                    <th scope="col">数量</th>
                                    <th scope="col">平均耗时</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">https://www.webfunny.cn/</th>
                                    <td>6.62万</td>
                                    <td>197.7ms</td>
                                </tr>
                                <tr>
                                    <th scope="row">https://www.webfunny.cn/des.html</th>
                                    <td>5.53万</td>
                                    <td>197.7ms</td>
                                </tr>
                                <tr>
                                    <th scope="row">https://www.webfunny.cn/home.html</th>
                                    <!-- <td colspan="2">5.53万</td> -->
                                    <td>5.53万</td>
                                    <td>197.7ms</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
<<<<<<< HEAD
import MCharts from "@/components/MCharts/MCharts.vue";
=======
import HelloEcharts from "../bars/userPie.vue";
>>>>>>> ede040898ede27acfabcd414bc62cc44597544f6
// import echarts from 'echarts';
import { option1, option2 } from "./option";

export default {
    name: "PerformanceView",
  components: {
<<<<<<< HEAD
    MCharts,
=======
    HelloEcharts,
>>>>>>> ede040898ede27acfabcd414bc62cc44597544f6
  },

  data() {
    return {
      option: option1,
      width: "400px",
    };
  },
<<<<<<< HEAD
=======
//   methods: {
//     changeWidth() {
//       if (this.width == "600px") {
//         this.width = "800px";
//       } else {
//         this.width = "600px";
//       }
//     },
//     changeOption() {
//       if (this.option == option1) {
//         this.option = option2;
//       } else {
//         this.option = option1;
//       }
//     }
//   }
>>>>>>> ede040898ede27acfabcd414bc62cc44597544f6
}

</script>


<style scoped>

.performance-container{
    margin-left: var(--offcanvas-width);
}

.title{
    flex:3
}
.row {
    display:flex;
}
.card-title{
    font-size: 18px;
}
.card-text{
    font-size: 30px;
    font-weight: bold;
}
.row-title{
    display:flex;
    /* text-align: center; */
    /* line-height: 10px; */
    height: 50px;
    /* margin-top: 10px; */
    /* margin-bottom: 10px; */
    justify-content: center;
    flex-direction: column;
}
</style>