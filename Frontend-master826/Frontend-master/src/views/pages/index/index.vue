<template>
  <div class="container-fluid">
    <div class="row justify-content-between my-3 fs-6 head-filter">
      <div class="col-4">
        <button type="button" class="btn btn-primary px-3 py-1">+ Primary</button>
      </div>
      <div class="col-8 ">
        <div class="d-flex justify-content-end align-items-center">
          <MDropDown></MDropDown>
          <MDropDown></MDropDown>
          <MDropDown name="下拉3" @select="tapselect"></MDropDown>
          <div class="input-group flex-nowrap w-auto">
            <input type="text" class="form-control " placeholder="Username" aria-label="Username"
              aria-describedby="addon-wrapping">
            <span class="input-group-text"><i class="bi bi-search"></i></span>
          </div>
          <div @click="changeToGrid"><i class="bi page-grid" :class="[isGrid ? 'bi-grid-fill active' : 'bi-grid']"></i>
          </div>
          <div @click="changeToList"><i class="bi page-list bi-list" :class="{ 'active': !isGrid }"></i></div>
        </div>
      </div>
    </div>
    <div class="row gx-2">
      <div class="col-4 pb-2" v-for="item in 10" :key="item">
        <IndexCard :active-user="1651" :heath-info="healthInfo" :heath-score="10*item" :user-info="userInfo" project-id="oedrtjghoehruf"></IndexCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MDropDown from "@/components/MDropDown/MDropDown.vue";
import IndexCard from "@/components/IndexCard/IndexCard.vue"
import { reactive, ref } from "vue";

let userInfo=reactive([{
  name:"位活跃用户",
  value:1341
},{
  name:"位活跃用户",
  value:5345
},{
  name:"位活跃用户",
  value:1231
}
]);

let healthInfo=reactive([{
  name:"JS报错率",
  value:13
},{
  name:"JS报错率",
  value:53
},{
  name:"JS报错率",
  value:12
},{
  name:"JS报错率",
  value:51
}
]);

let isGrid = ref(true);

function changeToGrid() {
  isGrid.value = true;
}

function changeToList() {
  isGrid.value = false;
}

function tapselect(e:{name:string,value:string|number}){
  console.log(e)
}
</script>

<style scoped lang="scss">

.head-filter {
  font-size: .8em
}

.head-filter * {
  font-size: .8rem
}

.page-grid {
  padding-left: .5rem;
  font-size: 1.4rem;
}


.page-list {
  padding-left: .2rem;
  font-size: 1.9rem;
}

.page-list,
.page-grid {
  color: #8c9090;
}

.page-list.active,
.page-grid.active {
  color: #2ed796;
}

</style>