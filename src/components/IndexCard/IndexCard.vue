<template>
  <div class="card">
      <div class="card-body fw-bold">
        项目名称
        <span class="float-end">
          <i class="bi bi-gear"></i>
        </span>
      </div>
      <div class="card-body">
        <div class="row align-items-end">
          <div class="col-3 text-center user-info-1">
            <p class="fs-1 m-0 f-active">4115</p>
            <p class="fs-s">位活跃用户</p>
          </div>
          <div class="col-3 text-center ">
            <p class="fs-3 m-0">4115<span class="fs-6">万</span></p>
            <p class="fs-s">位活跃用户</p>
          </div>
          <div class="col-3 text-center">
            <p class="fs-3 m-0">4115<span class="fs-6">万</span></p>
            <p class="fs-s">位活跃用户</p>
          </div>
          <div class="col-3 text-center">
            <p class="fs-3 m-0">4115<span class="fs-6">万</span></p>
            <p class="fs-s">位活跃用户</p>
          </div>
        </div>
        <div class="mb-2">
          <h4 class="fs-m fw-bold">活跃趋势</h4>
          <div style="height:100px" class="bg-dark"></div>
          <!-- <HelloChart></HelloChart> -->
        </div>
        <div>
          <h4 class="fs-m fw-bold">健康总分</h4>

          <div class="row py-2">
            <div class="col-2 text-center">
              <div class="score-box">
                <ScoreCircle :score="10"></ScoreCircle>
              </div>
            </div>
            <div class="col-5 text-center lh-harf">
              <div><label class="text-gery fs-s">JS报错率：<label class="text-dark-gery fs-6">1.3</label>%</label></div>
              <div><label class="text-gery fs-s">JS报错率：<label class="text-dark-gery fs-6">1.3</label>%</label></div>
            </div>
            <div class="col-5 text-center lh-harf">
              <div><label class="text-gery fs-s">JS报错率：<label class="text-dark-gery fs-6">1.3</label>%</label></div>
              <div><label class="text-gery fs-s">JS报错率：<label class="text-dark-gery fs-6">1.3</label>%</label></div>

            </div>
          
          </div>

        </div>
      </div>
    </div>
</template>

<script setup>
import ScoreCircle from "@/components/ScoreCircle/ScoreCircle.vue"

</script>

<style>
.score-box{
  width:4rem;
  margin:0 auto
}

.text-gery{
  color: #8c9090;
}
.text-dark-gery{
  color: #434343;
}

.lh-harf{
  line-height: 2rem;
}
.f-active{
    color: #21d48f;
}

.user-info-1{
    position: relative;
}
.user-info-1::after{
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 50%;
    border-right: 1px solid #dee2e6;
}
</style>