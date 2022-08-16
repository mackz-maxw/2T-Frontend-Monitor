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

<style>
</style>