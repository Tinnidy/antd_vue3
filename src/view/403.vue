<template>
<div>
  <h1>403</h1>
  <h1>当前账号没有操作角色，请联系管理员</h1>
  <router-link to="/login" class="ant-btn ant-btn-primary">回到首页</router-link>
</div>
<img src="~@/assets/404.png" alt="403 Forbidden"/>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: '403',
})
</script>