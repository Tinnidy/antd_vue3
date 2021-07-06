<template>
  <a-layout class="app-wrapper">
    <!---sider-->
    <a-layout-sider
      class="app-sider"
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
    >
      <a-menu theme="dark" v-model:selectedKeys="selectedKeys" mode="inline">
        <a-menu-item key="1">
          <my-icon type="icon-dianzan"></my-icon>
          <span>Option 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <desktop-outlined />
          <span>Option 2</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <user-outlined />
              <span>User</span>
            </span>
          </template>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <team-outlined />
              <span>Team</span>
            </span>
          </template>
          <a-menu-item key="6">Team 1</a-menu-item>
          <a-menu-item key="8">Team 2</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <file-outlined />
          <span>File</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <!--右main-->
    <a-layout>
      <!--header-->
      <a-layout-header class="app-header">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />

        <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" class="avatar"/>
      </a-layout-header>
      <!--content-->
      <a-layout-content></a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import {
  createFromIconfontCN,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from "@ant-design/icons-vue"; //按需引用图标

import { reactive, toRefs } from "vue"; //响应式\自定义组件

const MyIcon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js', 
})

export default {
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
    MyIcon
  },
  setup() {
    const state = reactive({
      collapsed: false, //不折叠的状态
      selectedKeys: ["1"], //配置选取菜单
    });
    return { ...toRefs(state) };
  },
  data() {
    return {
      collapsed: true,
    };
  },
};
</script>
<style lang="scss">
.app-wrapper {
  .app-sider {
    left: 0;
    height: 100vh;
    overflow: auto;
  }
  .app-header {
    background: #fff;
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    .avatar{
      width: 32px;
      height: 32px;
    }
  }
}
</style>
