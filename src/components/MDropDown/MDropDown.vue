<template>
    <div class="dropdown">
        <span class="dropdown-title align-middle">{{props.name}}</span>
        <button class="btn btn-select dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
            aria-expanded="false">
            {{itemChecked.name}}
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li v-for="(item,index) in props.menuList" :key="`menu_${index}`"  @click="select(item)"><a class="dropdown-item" href="#">{{item.name}}</a></li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { reactive } from "@vue/reactivity"


let props=defineProps({
    name:{
        type:String,
        default:"标签"
    },
    menuList:{
        type:Array,
        default:[{name:'标签1',value:0},{name:'标签2',value:1},{name:'标签3',value:2}]
    }
})

let itemChecked:{name:string,value:string|number|null}=reactive({
    name:"请选择",
    value:null
})

const emit=defineEmits(['select'])

function select(item:{name:string,value:string|number|null}){
    let {name,value}=item
    itemChecked.name=name;
    itemChecked.value=value;
    console.log(itemChecked)
    emit('select',item)
}
</script>

<style scoped >
.btn-select {
    border: none;
}

.dropdown {
    display: inline-block;
    background: var(--el-color-info-light-9);
    border-radius: .5rem;
    text-align: left;
    margin: 0 .5rem;
}

.btn{
    font-size: inherit;
}

.dropdown-title {
    padding: 1rem;
    padding-right: 0;
}
</style>