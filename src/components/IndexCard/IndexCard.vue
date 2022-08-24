<template>
  <div class="card" @click="gotoHome">
      <div class="card-body fw-bold">
        {{props.projectName}}
        <span class="float-end">
          <button  class="btn-set" @click.stop="gotoSet">
            <i class="bi bi-gear"></i>
          </button>
        </span>
      </div>
      <div class="card-body">
        <div class="row align-items-end">
          <div class="col-3 text-center user-info-1">
            <p class="fs-1 m-0 f-active">{{props.activeUser}}</p>
            <p class="fs-s">位活跃用户</p>
          </div>
          <div class="col-3 text-center " v-for="(item,index) in props.userInfo" :key="`userInfo_${index}`">
            <p class="fs-3 m-0">{{item.value}}<span class="fs-6">万</span></p>
            <p class="fs-s">{{item.name}}</p>
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
                <ScoreCircle :score="props.heathScore"></ScoreCircle>
              </div>
            </div>
            <div class="col-10 text-center lh-harf">
              <div class="row">
                <div class="col-6" v-for="(item,index) in props.heathInfo" :key="`heathInfo_${index}`">
                  <label class="text-gery fs-s">{{item.name}}：<label class="text-dark-gery fs-6">{{item.value}}</label>%</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import ScoreCircle from "@/components/ScoreCircle/ScoreCircle.vue"
import { onMounted } from "@vue/runtime-core"
import { useRouter } from 'vue-router'
const props=defineProps({
  projectId:{
    type:String,
    required:true
  },
  option:{
    type:Object,
    required:false
  },
  userInfo:{
    type:Array,
    required:true
  },
  heathInfo:{
    type:Array,
    required:true
  },
  activeUser:{
    type:Number,
    required:true
  },
  heathScore:{
    type:Number,
    required:true
  },
  projectName:{
    type:String,
    default:"项目名称"
  }
})

const router=useRouter();

function gotoHome(){
  router.push({ name: 'home', params: { projectId:props.projectId }})
}
function gotoSet(){
  router.push({ name: 'test', params: { projectId:props.projectId }})
}

</script>

<style scoped>
.score-box{
  width:4rem;
  margin:0 auto
}

.danger{

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
.btn-set{
  border: none;
  background: transparent;
  position:relative
}
.btn-set:hover::after{
  content: '提示';
  position: absolute ;
  top: 0;
  left: 50%;
  transform: translate(-50%,-120%);
  white-space: nowrap;
  background: #434343;
  color: white;
  padding: .2rem .4rem;
  border-radius: .2rem;
}
.btn-set:hover::before{
  content: '';
  position: absolute ;
  top: 0;
  left: 50%;
  transform: translate(-50%,-100%);
  width: 0;
  height: 0;
  border-top: .5rem solid #434343 ;
  border-left: .4rem solid transparent ;
  border-right: .4rem solid transparent ;
}
.card{
  cursor: pointer;
}
</style>