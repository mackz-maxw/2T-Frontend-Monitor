<template>
    <div class="score-container">
        <div class="score-box" :class="{'green':props.score>=props.green&&props.score<=100,'warn':props.score<props.green&&props.score>=props.warn,'danger':props.score<props.warn&&props.score>=0,'bg':props.showBg}">
            <div class="circle-base "></div>
            <div class="circle-trans transform"></div>
            <span class="score-number" v-bind="$attrs">{{props.score}}</span>
        </div>
    </div>
</template>

<script>
// 使用普通的 <script> 来声明选项
export default {
  inheritAttrs: false
}
</script>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    score: {
        type: Number,
        required: true
    },
    green: {
        type: Number,
        default: 85
    },
    warn: {
        type: Number,
        default: 60
    },
    showBg:{
        type: Boolean,
        default: true
    },
    borderSize:{
        type: String,
        default: '.3rem'
    }
})

let angle = computed(()=>{
    if(props.score<props.warn){
        return `-${(180-360*(props.score/100)).toFixed(1)}deg`
    }else{
        return `-${(360-360*(props.score/100)).toFixed(1)}deg`
    }
})

let borderSize = computed(()=>{
    return props.borderSize;
})

</script>

<style scoped lang="scss">

$border-size:v-bind(borderSize);
.score-container {
    position: relative;
    width: 100%;
    padding: 50% 0;
}

.circle-base {
    clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
}
.circle-trans {
    clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
}

.score-container {

    .circle-base,
    .circle-trans {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 100%;
    }

    .score-box {
        position: absolute;
        transform: translateY(-50%);
        width: 100%;
        height: 100%;
        border-radius: 100%;
        text-align: center;
    }
}

.score-number {
    font-size: 1.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.danger {
    color: #ff4e5c;
    &.bg{
        background-image: linear-gradient(180deg,#fdc5c5,#ffefef);
        
    }
    .circle-trans {
        border: $border-size solid #fed5d4;
    }

    .circle-base {
        border: $border-size solid #ff4e5c;
    }
}

.warn {
    color: #ff9103;
    &.bg{
        background-image: linear-gradient(180deg,#ffe9cf,#fffaf5);
    
    }
    .circle-trans,
    .circle-base {
        border: $border-size solid #ff9103;
    }
}

.green {
    color: #28c989;
    &.bg{
        background-image: linear-gradient(180deg,#d7f5e9,#f3fcf8);
        
    }
    .circle-trans,
    .circle-base {
        border: $border-size solid #28c989;
    }

}



.transform {
    transform: rotate(v-bind(angle));
}
</style>