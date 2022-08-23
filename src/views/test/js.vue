<template>
  <div id="container">
      <div id="content">
        <input
          id="errorBtn"
          type="button"
          value="点击报错"
          @click="errorClick()"
        />
        <input
          id="promiseErrorBtn"
          type="button"
          value="点击抛出Promise报错"
          
          @click="promiseErrorClick()"
        />
        <input
          id="promiseErrorBtn"
          type="button"
          value="点击抛出延迟处理Promise报错"
          @click="latePromiseErrorClick()"
        />
      </div>

      <div class="outer">
      <div class="inner">
        <div class="box">hello</div>
      </div>
    </div>

    </div>
</template>

<script setup lang="ts">
function errorClick():void{
        window.someVar.error = "error";
      }
      function promiseErrorClick():void {
        new Promise(function (resolve, reject) {
          window.someVar.error = "error";
          // reject('err')
        }).then(
          (res) => {
            console.log("+++ ", res);
          }
        ).catch(err=>{
          console.log('err',err)
        })
      }
      
      function latePromiseErrorClick():void {
        function foo()
        {
          return Promise.reject('Hello, Fundebug!');
        }
        var r = foo();
        setTimeout(() =>
        {
          r.catch(e =>{});
        }, 1000);
      }
</script>

<style scoped>
      .outer {
        width: 400px;
        height: 700px;
        background: blue;
        margin: 0 auto;
        display: flex;
        align-items: center;
      }

      .inner {
        position: relative;
        width: 100%;
        /* height: 0; */
        padding: 50% 0;
        background: red;
      }

      .box {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
</style>