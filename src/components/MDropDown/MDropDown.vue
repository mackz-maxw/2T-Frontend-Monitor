<template>
    <div class="dropdown">
        <span class="dropdown-title align-middle">标签</span>
        <button class="btn btn-select dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
            aria-expanded="false">
            Dropdown button
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
    </div>
</template>

<script setup>

let props=defineProps({
    name:{
        type:String,
        default:""
    },
    menuList:{
        type:Array,
        default:[]
    }
})
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