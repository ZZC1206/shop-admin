<template>
  <el-dropdown>
    <span class="el-dropdown-link center">
      {{ $store.state.user?.account }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item @click="handleLogou">
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { ElMessage, ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'
import { ArrowDown } from '@element-plus/icons-vue'
import { logout } from '@/api/common'

const router = useRouter()
const store = useStore()

const handleLogou = () => {
  // 退出提示
  ElMessageBox.confirm('确认退出吗？', '退出提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async () => {
    // 确认发出退出请求
    await logout()

    // 清除用户登录信息
    store.commit('setUser', null)

    ElMessage({
      type: 'success',
      message: '退出成功!'
    })

    // 跳转到登录页
    router.push({
      name: 'login'
    })
  }).catch(() => {
    ElMessage({
      type: 'info',
      message: '已取消退出'
    })
  })
}
</script>

<style lang="scss" scoped>
i {
  font-size: 16px;
  cursor: pointer;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
