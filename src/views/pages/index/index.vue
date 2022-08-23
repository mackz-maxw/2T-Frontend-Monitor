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
          <MDropDown></MDropDown>
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
        <IndexCard></IndexCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MDropDown from "@/components/MDropDown/MDropDown.vue";
import IndexCard from "@/components/IndexCard/IndexCard.vue"
import { ref } from "@vue/reactivity";

let isGrid = ref(true);

function changeToGrid() {
  isGrid.value = true;
}

function changeToList() {
  isGrid.value = false;
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