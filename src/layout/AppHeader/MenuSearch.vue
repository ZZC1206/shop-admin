<template>
  <el-autocomplete
    v-model="state"
    :fetch-suggestions="querySearch"
    popper-class="my-autocomplete"
    placeholder="请输入内容"
    class="inline-input"
    value-key="menu_name"
  >
    <!-- @select="handleSelect" -->

    <template #default="{ item }">
      <router-link
        :to="item.menu_path"
        custom
        v-slot="{ href }"
      >
        <el-link
          class="menu-link"
          :href="href"
          :disabled="item.type === 1"
          :underline="false"
        >
          <span class="link-text">{{ item.menu_name }}</span>
          <!-- @click="handleLinkClick(item, $event)" -->
        </el-link>
      </router-link>
    </template>
  </el-autocomplete>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

// import { getMenus } from '@/api/home'
// import type { Menu } from '@/api/types/home'

// const menus = ref<Menu[]>([])
const state = ref('')
console.log(Search)

onMounted(() => {
  loadMenus()
})

const loadMenus = async () => {
  // const data = await getMenus()
  // menus.value = data
}

const querySearch = (queryString: string, cb: (val: any) => void) => {
  console.log('querySearch', queryString)
  // const results = queryString
  //   ? menus.value.filter(item => item.menu_name.includes(queryString))
  //   : menus.value
  // // 调用 callback 返回建议列表的数据
  // cb(results)
}

// const handleSelect = (item: Menu) => {
//   console.log(item)
//   return false
// }

// const handleLinkClick = (item: Menu, e: Event) => {
//   if (item.type === 1) {
//     e.preventDefault()
//     e.stopPropagation()
//   }
// }
</script>

<style lang="scss" scoped>
.is-disabled {
  color: #c0c4cc;
  cursor: not-allowed;
}

.menu-link,
.link-text {
  display: block;
}
</style>
