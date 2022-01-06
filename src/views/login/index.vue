<template>
  <div>登陆</div>
</template>

<script lang="ts" setup>
import { getLoginInfo } from '@/api/common'
import type { ILoginInfo } from '@/api/types/common'
import { onMounted, ref } from '@vue/runtime-core'

const list = ref<ILoginInfo['slide']>([])

onMounted(() => {
  getLoginInfo().then(data => {
    list.value = data.slide
    console.log(list.value)
    console.log(list)
  })
})

</script>

<style lang="scss"></style>
