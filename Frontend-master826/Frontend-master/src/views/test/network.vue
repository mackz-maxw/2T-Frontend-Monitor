<template>
   <div id="container">
      <div class="content">
        <input
          type="button"
          id="successBtn"
          value="ajax成功请求"
          @click="sendSuccess()"
        />
        <input
          type="button"
          id="errorBtn"
          value="ajax失败请求"
          @click="sendError()"
        />
        <input
          type="button"
          id="errorBtn"
          value="发送axios请求"
          @click="sendAxios()"
        />
        <input
          type="button"
          id="successBtn"
          value="发送fetch请求"
          @click="sendFetch()"
        />
        <img src="http://localhost:3000/img"/>
      </div>
    </div>
</template>

<script setup lang="ts">
import ApiService from '@/service/api.service.js';
function sendSuccess() {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "/success", true);
        xhr.responseType = "json";
        xhr.onload = function () {
          console.log(xhr.response);
        };
        xhr.send();
      }
      function sendError() {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/error", true);
        xhr.responseType = "json";
        xhr.onload = function () {
          console.log(xhr.response);
        };
        xhr.onerror = function (err) {
          console.log(err);
        };
        xhr.send("name=lyy");
      }
      function sendAxios(){
        ApiService.post('/success',{say:"hello"})
      }

      function sendFetch(){
        fetch('/success').then(function(response) {
          return response.json();
        }).then(function(data) {
          console.log("data",data);
        }).catch(function(e) {
          console.log("Oops, error:",e);
        }); 
      }
</script>

<style>
</style>