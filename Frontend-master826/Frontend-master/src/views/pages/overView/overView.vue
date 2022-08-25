<template>
    <div class="container-fluid">
        <div class="row-title">
            <div class="col-md-12 fw-bold fs-4">核心数据</div>
        </div>

        <div class="row">
            <div class="card text-black bg-light h-100 mb-3" id="card-md12">
                <div class="card-header">流量数据</div>
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <div class="card">
                                <div class="card-header">浏览量(PV)</div>
                                <div class="card-body">
                                    {{ pv_length }}
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card">
                                <div class="card-header">访客数(UV)</div>
                                <div class="card-body">
                                    {{uv_length}}
                                </div>
                            </div>
                        </div>

                        </div> 
                    </div>

                
            </div>
        </div>

    <br />
    <!-- <div class="row ">
        <div class="col-md-12">
            <div class="card" style="height: 20rem;" id="card-md12">
                <div class="card-header">
                    <h6>页面加载耗时分段数量占比</h6>
                </div>
                <div class="card-body">
                    <MCharts :option="option" style="width: 100%; height: 100%" />
                    
                </div>
            </div>
        </div>

    </div> -->
    <br />
    <div class="row">
        <div class="col-md-6 mb-3">
            <div class="card">
                <div class="card-header">
                    <h6>页面访问量趋势</h6>
                </div>
                <div class="card-body">
                    <MCharts :option="option" style="width: 100%; height: 400px" />
                </div>
            </div>
        </div>
        <div class="col-md-6 mb-3">
            <div class="card">
                <div class="card-header">
                    <h6>用户活跃量趋势</h6>
                </div>
                <div class="card-body">
                    <MCharts :option="option" style="width: 100%; height: 400px" />
                </div>
            </div>
        </div>

        <!-- <div class="col-md-4 mb-3">
            <div class="card ">
                <div class="card-header">
                    <h6>新用户活跃量趋势</h6>
                </div>
                <div class="card-body">
                    <MCharts :option="option" style="width: 100%; height: 400px" />
                </div>
            </div>
        </div> -->
    </div>
    </div>

</template>


<script >
import MCharts from "@/components/MCharts/MCharts.vue";
// import { onMounted } from "vue";
import { option1, option2 ,pv_length,uv_length} from "./option.js";
import axios from 'axios';
import {ref} from 'vue';
// import router from '@/router/index';
// import {useStore} from 'vuex';

let values = ref("")
export default {
    name: "OverView",
    components: {
        MCharts,
    },

    mounted(){
    let url3 = "http://43.138.46.207:9123/get/pv/";//http://43.138.46.207:9123/upload/pv/
    axios.get(url3).then(promise => {
        // const store = useStore();
        // let value = ref('');
        let data = JSON.stringify(promise.data)
        // values.value = promise.data.length
        const value = promise.data.length
        console.log("value:",value)
        // window.localStorage.setItem('pv',promise.data.length)

        // console.log("len",promise.data.length)
        window.localStorage.setItem('pvuv',data) //localStorage存值
            // window.localStorage.setItem("city_list ",JSON.stringify(this.city_list));
         console.log("pvuv",promise.data)
            // console.log(typeof promise.data)//object 
        })
    },
    // let value = window.localStorage.getItem('pv'),
    // setup() {
        
    // // console.log(store,router);

    // },
    data() {
        return {
            option: option1,
            option2: option2,
            width: "400px",
            pv_length: pv_length,
            uv_length: uv_length
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