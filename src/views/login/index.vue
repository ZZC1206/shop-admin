<template>
  <div class="login-container">
    <el-form
      class="login-form"
      :rules="rules"
      ref="form"
      :model="user"
      size="medium"
      @submit.prevent="handleSubmit"
    >
      <div class="login-form__header">
        <img
          class="login-logo"
          src="@/assets/login_logo.png"
          alt="拉勾心选"
        >
      </div>
      <el-form-item prop="account">
        <el-input
          v-model="user.account"
          placeholder="请输入用户名"
          :prefix-icon="icoUser"
        />
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input
          v-model="user.pwd"
          placeholder="请输入密码"
          type="password"
          :prefix-icon="Lock"
        />
      </el-form-item>
      <el-form-item prop="imgcode">
        <div class="imgcode-wrap">
          <el-input
            v-model="user.imgcode"
            placeholder="请输入验证码"
            :prefix-icon="Key"
          />
          <img
            class="imgcode"
            alt="验证码"
            :src="captChaSrc"
            @click="loadCaptCha"
          >
        </div>
      </el-form-item>
      <el-form-item>
        <el-button
          class="submit-button"
          type="primary"
          :loading="loading"
          native-type="submit"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import {
  User as icoUser,
  Lock,
  Key
} from '@element-plus/icons-vue'
import { getCaptcha, login } from '@/api/common'
import { useRouter } from 'vue-router'
import type { IElForm, IFormRule } from '@/types/element-plus'

const router = useRouter()
const form = ref<IElForm | null>(null)
const captChaSrc = ref('')
const user = reactive({
  account: 'admin',
  pwd: '123456',
  imgcode: ''
})
const loading = ref(false)
const rules = ref<IFormRule>({
  account: [
    { required: true, message: '请输入账号', trigger: 'change' }
  ],
  pwd: [
    { required: true, message: '请输入密码', trigger: 'change' }
  ],
  imgcode: [
    { required: true, message: '请输入验证码', trigger: 'change' }
  ]
})

onMounted(() => {
  loadCaptCha()
})

const loadCaptCha = async () => {
  const data = await getCaptcha()
  captChaSrc.value = URL.createObjectURL(data)
}

const handleSubmit = async () => {
  // 表单验证
  const valid = form.value?.validate
  if (!valid) {
    return false
  }
  // 验证通过，展示 loading
  loading.value = true
  // 请求提交
  const data = await login(user).finally(() => {
    loading.value = false
  })
  console.log(data)
  // 处理响应
  router.replace({
    name: 'home'
  })
}

</script>

<style lang="scss" scoped>
.login-container {
  min-width: 400px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2d3a4b;
}

.login-form {
  padding: 30px;
  border-radius: 6px;
  background: #fff;
  min-width: 350px;
  .login-form__header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
  }

  .el-form-item:last-child {
    margin-bottom: 0;
  }

  .login__form-title {
    display: flex;
    justify-content: center;
    color: #fff;
  }

  .submit-button {
    width: 100%;
  }

  .login-logo {
    width: 271px;
    height: 74px;
  }
  .imgcode-wrap {
    display: flex;
    align-items: center;
    .imgcode {
      height: 37px;
    }
  }
  ::v-deep .el-input__icon {
    font-size: 19px;
    cursor: pointer;
  }
}
</style>
