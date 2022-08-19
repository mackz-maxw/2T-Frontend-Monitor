<template>
        <div class="container-fluid">
        <div class="row-title">
            <h1 class="col-md-12 fw-bold fs-4">核心数据</h1>  
        </div>
        <div class="text-black bg-light card mb-3">
            <div class="card-body">
                <h5 class="card-title">流量数据</h5>
                <div class="row" >
                    <div class="col-md-2 text-center">
                        <h3 class="fs-6">浏览量(pv)</h3>
                        <p class="fs-2">41454155</p>
                        <p class="fs-6">较昨日<span class="text-success">154%↑</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card mb-3" style="height: 15rem;">
            <div class="card-body">
                        <h5 class="card-title">Js报错趋势</h5>
                        <h6 class="card-subtitle mb-2 text-muted">2022-08-16</h6>
                        <!-- <HelloEcharts :option= "option3" /> -->
            </div>
        </div>

        <div class="row">
            <div class="col-md-4 mb-3">
                <div class="card position-relative" style="height: 20rem;">
                    <div class="card-body">
                        <h5 class="card-title">Js报错趋势</h5>
                        <h6 class="card-subtitle mb-2 text-muted">2022-08-16</h6>
                        <div class="position-absolute top-0 end-0 card-body">
                            <p class="text-end"><span class="text-success">20%↑</span><br/>较一周前</p>
                        </div>

                        <!-- <HelloEcharts :option= "option3" /> -->
                    </div>     
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card " style="height: 20rem;">
                    <div class="card-body">
                        <h5 class="card-title">自定义异常趋势</h5>
                        <h6 class="card-subtitle mb-2 text-muted">2022-08-16</h6>
                        <div class="position-absolute top-0 end-0 card-body">
                            <p class="text-end"><span class="text-success">20%↑</span><br/>较一周前</p>
                        </div>

                            <!-- <HelloEcharts :option= "option3" /> -->
                    </div>   
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card " style="height: 20rem;">
                    <div class="card-body">
                        <h5 class="card-title">静态资源加载报错</h5>
                        <h6 class="card-subtitle mb-2 text-muted">2022-08-16</h6>
                        <div class="position-absolute top-0 end-0 card-body">
                            <p class="text-end"><span class="text-success">20%↑</span><br/>较一周前</p>
                        </div>

                            <!-- <HelloEcharts :option= "option3" /> -->
                    </div>    
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card " style="height: 20rem;">
                    <div class="card-body">
                        <h5 class="card-title">接口请求报错</h5>
                        <h6 class="card-subtitle mb-2 text-muted">2022-08-16</h6>
                        <div class="position-absolute top-0 end-0 card-body">
                            <p class="text-end"><span class="text-success">20%↑</span><br/>较一周前</p>
                        </div>

                            <!-- <HelloEcharts :option= "option3" /> -->
                    </div>
                    <!-- <div class="card-body"> -->      
                </div>
            </div>
        </div>
        <div class="row-title mb-3">
                <h1 class="fw-bold fs-4  d-inline-block mb-0  align-middle">综合数据</h1>
                <span class="d-inline-block ms-2">
                    <div class="btn-group" role="group" aria-label="...">
                        <button type="button" class="btn btn-outline-dark btn-sm">Left</button>
                        <button type="button" class="btn btn-outline-dark btn-sm">Middle</button>
                        <button type="button" class="btn btn-outline-dark btn-sm">Right</button>
                    </div>
                </span>
        </div>
        <div class="row">
            <div class="col-md-4 mb-3">
                <div class="card " style="height: 20rem;">
                    <div class="card-body">
                        <h5 class="card-title">Js报错趋势</h5>
                        <h6 class="card-subtitle mb-2 text-muted">2022-08-16</h6>
                        <!-- <HelloEcharts :option= "option3" /> -->
                    </div>     
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card " style="height: 20rem;">
                    <div class="card-body">
                        <h5 class="card-title">自定义异常趋势</h5>
                        <h6 class="card-subtitle mb-2 text-muted">2022-08-16</h6>
                            <!-- <HelloEcharts :option= "option3" /> -->
                    </div>   
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card " style="height: 20rem;">
                    <div class="card-body">
                        <h5 class="card-title">静态资源加载报错</h5>
                        <h6 class="card-subtitle mb-2 text-muted">2022-08-16</h6>
                            <!-- <HelloEcharts :option= "option3" /> -->
                    </div>    
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card " style="height: 20rem;">
                    <div class="card-body">
                        <h5 class="card-title">接口请求报错</h5>
                        <h6 class="card-subtitle mb-2 text-muted">2022-08-16</h6>
                            <!-- <HelloEcharts :option= "option3" /> -->
                    </div>
                    <!-- <div class="card-body"> -->      
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">

// setTimeout(() => {
//     let a=document.createElement('script');
//     a.src="http://localhost:3000/js.js";
//     document.body.appendChild(a);
// }, 2000);
</script>


<style scoped>
    
</style>