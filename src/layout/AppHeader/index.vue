<template>
  <el-space size="large">
    <ToggleSidebar class="center" />
    <Breadcrumb />
  </el-space>
  <el-space size="large">
    <!-- <MenuSearch /> -->
    <FullScreen class="center" />
    <Notification class="center" />
    <UserInfo />
  </el-space>
</template>

<script lang="ts" setup>
import ToggleSidebar from './ToggleSidebar.vue'
import Breadcrumb from './Breadcrumb.vue'
// import MenuSearch from './MenuSearch.vue'
import FullScreen from './FullScreen.vue'
import Notification from './Notification.vue'
import UserInfo from './UserInfo.vue'
</script>

<style lang="scss" scoped>
i {
  font-size: 22px;
  cursor: pointer;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
