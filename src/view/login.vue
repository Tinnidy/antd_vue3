<template>
  <div class="login-container">
    <a-row>
      <a-col :xs="0" :md="0" :sm="12" :lg="14" :xl="16"></a-col>
      <a-col :xs="24" :md="24" :sm="12" :lg="10" :xl="10">
        <div class="login-container-form">
          <header>
            <img src="@/assets/403.png"/>
            <span>vue3-admin</span>
          </header>
          <a-form :model="form" @submit="handleSubmit" @submit.prevent>
            <a-form-item>
              <a-input v-model:value="form.username" size="large"></a-input>
              <template v-slot:prefix><user-outlined type="user"/></template>
            </a-form-item>
            <a-form-item>
              <a-input v-model:value="form.password" type="password" size="large"></a-input>
              <template v-slot:prefix><lock-outlined type="user"/></template>
            </a-form-item>
            <a-form-item>
              <a-button type="primary" size="large" @click="handleSubmit" block>Login in</a-button>
            </a-form-item>
          </a-form>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import {UserOutlined, LockOutlined} from "@ant-design/icons-vue";
import {defineComponent, reactive, toRefs} from 'vue';   //defineComponent
import {message} from "ant-design-vue";
import {login} from "@/api/login"
export default defineComponent({
  components:{
    UserOutlined, LockOutlined
  },
  //初始化加载自动执行
  setup(){
    const state = reactive({
      form: {
        username: '',
        password: ""
      }
    })

    const handleSubmit = async() =>{
      const {username, password} = state.form;    //es6解构赋值
      if(username.trim() == '' || password.trim() == '')
        return message.warning("用户名和密码不能为空！")
      const res = await login({username, password})
      console.log(res);   
    }
    return {...toRefs(state), handleSubmit}
  }
})
</script>