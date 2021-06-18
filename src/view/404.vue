<template>
<div>
  <h1>404</h1>
  <h1>页面找不到了</h1>
  <router-link to="/login" class="ant-btn ant-btn-primary">回到首页</router-link>
</div>
<img src="~@/assets/403.png" alt="403 Forbidden"/>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: '404',
})
</script>