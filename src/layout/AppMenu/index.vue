<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#304156"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
    :collapse="$store.state.isCollapse"
    router
  >
    <!-- 首页 -->
    <el-menu-item index="/">
      <el-icon>
        <icon-menu />
      </el-icon>
      <span>首页</span>
    </el-menu-item>
    <!-- 商品 -->
    <el-sub-menu index="/product">
      <template #title>
        <el-icon>
          <shop />
        </el-icon>
        <span>商品</span>
      </template>
      <el-menu-item index="/product/list">
        <el-icon><document /></el-icon>
        <span>商品列表</span>
      </el-menu-item>
      <el-menu-item index="/product/classify">
        <el-icon><coin /></el-icon>
        <span>商品分类</span>
      </el-menu-item>
      <el-menu-item index="/product/attr">
        <el-icon><refrigerator /></el-icon>
        <span>商品规格</span>
      </el-menu-item>
      <el-menu-item index="/product/reply">
        <el-icon><chat-dot-square /></el-icon>
        <span>商品评论</span>
      </el-menu-item>
    </el-sub-menu>
    <!-- 订单 -->
    <el-sub-menu index="/order">
      <template #title>
        <el-icon><list /></el-icon>
        <span>订单</span>
      </template>
      <el-menu-item index="/order/list">
        <el-icon><document /></el-icon>
        <span>订单列表</span>
      </el-menu-item>
      <el-menu-item index="/order/offline">
        <el-icon><sunset /></el-icon>
        <span>订单</span>
      </el-menu-item>
    </el-sub-menu>
    <!-- 媒体 -->
    <el-menu-item index="/media">
      <el-icon><video-camera-filled /></el-icon>
      <span>媒体</span>
    </el-menu-item>
    <!-- 权限 -->
    <el-sub-menu index="/permission">
      <template #title>
        <el-icon><stamp /></el-icon>
        <span>权限</span>
      </template>
      <el-menu-item index="/permission/admin">
        <el-icon><service /></el-icon>
        <span>管理员</span>
      </el-menu-item>
      <el-menu-item index="/permission/role">
        <el-icon><user /></el-icon>
        <span>角色</span>
      </el-menu-item>
      <el-menu-item index="/permission/rule">
        <el-icon><guide /></el-icon>
        <span>规则</span>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import {
  Menu as IconMenu,
  Document as document,
  Coin,
  Refrigerator,
  ChatDotSquare,
  Shop,
  List,
  Sunset,
  Stamp as stamp,
  Guide,
  User,
  Service,
  VideoCameraFilled
} from '@element-plus/icons-vue'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.el-menu {
  border-color: #304156;
}
.el-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
