<template>
  <div class="login-container">
    <a-row>
      <a-col :xs="0" :md="0" :sm="12" :lg="14" :xl="14">
        <header>
          <img src="@/assets/login.png" />
        </header>
      </a-col>
      <a-col :xs="24" :md="24" :sm="12" :lg="10" :xl="10">
        <div class="login-container-form">
          <span class="title">Tinnidy_Blog_Plat</span>
          <a-form :model="form" @submit="handleSubmit" @submit.prevent>
            <a-form-item>
              <a-input v-model:value="form.username" size="large"></a-input>
              <template v-slot:prefix>
                <user-outlined type="user" />
              </template>
            </a-form-item>
            <a-form-item>
              <a-input
                v-model:value="form.password"
                type="password"
                size="large"
              ></a-input>
              <template v-slot:prefix>
                <lock-outlined type="user" />
              </template>
            </a-form-item>
            <a-form-item>
              <a-button
                type="primary"
                size="large"
                @click="handleSubmit"
                block
                class="login_btn"
                >Login in</a-button
              >
            </a-form-item>
          </a-form>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { defineComponent, reactive, toRefs  } from "vue"; //defineComponent
import {useRouter} from "vue-router";
import { message } from "ant-design-vue";
import { login } from "@/api/login.js";
export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
  },
  //初始化加载自动执行
  setup() {
    const state = reactive({
      form: {
        username: "",
        password: "",
      },
    });
    const router = useRouter();
    const handleSubmit = async () => {
      const { username, password } = state.form; //es6解构赋值
      if (username.trim() == "" || password.trim() == "")
        return message.warning("用户名和密码不能为空！");
      const res = await login({
        username,
        password,
      });
      if (res.success == false) {
        return message.warning("登录账号密码不正确!");
      } else {
        router.push({path: '/index'})
      }
    };
    return {
      ...toRefs(state),
      handleSubmit,
    };
  },
});
</script>

<style lang="scss">
.login-container {
  width: 100%;
  header {
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .login-container-form {
    text-align: center;
    width: 80%;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 2px 2px 10px #909090;
    transform: translate(20%, 50%);
    span[class="title"] {
      font-size: 24px;
      line-height: 24px;
      font-weight: 700;
    }
    form {
      margin-top: 20px;
      max-height: 100%;
    }
    .login_btn {
      width: 80%;
    }
  }
}
</style>
