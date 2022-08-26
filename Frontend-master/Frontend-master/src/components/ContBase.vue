<template>
    <div class="container">
      <div class="card" >
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body">
          <slot></slot>
          <!-- 将content所有子元素全部渲染到slot里面 -->
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "ContentBase",
}
</script>
 
<style scoped>
  .container {
    margin-top: 20px;
  }
</style>
