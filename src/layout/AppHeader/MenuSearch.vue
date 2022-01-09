<template>
  <el-autocomplete
    v-model="state"
    :fetch-suggestions="querySearchAsync"
    placeholder="请输入内容"
    @select="handleSelect"
    popper-class="my-autocomplete"
  >
    <template #suffix>
      <el-icon
        class="el-input__icon"
      >
        <search />
      </el-icon>
    </template>
    <template #default="{ item }">
      <div class="value">
        {{ item.value }}
      </div>
      <span
        class="link"
        v-html="showData(item.link, state)"
      />
    </template>
  </el-autocomplete>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { Search as search } from '@element-plus/icons-vue'

const state = ref('')

interface LinkItem {
  value: string
  link: string
}

const links = ref<LinkItem[]>([])

const loadAll = () => {
  return [
    { value: 'vue', link: 'https://github.com/vuejs/vue' },
    { value: 'element', link: 'https://github.com/ElemeFE/element' },
    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
    { value: 'babel', link: 'https://github.com/babel/babel' }
  ]
}

// let timeout: NodeJS.Timeout
const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {
  const results = queryString
    ? links.value.filter(createFilter(queryString))
    : links.value

  cb(results)
  // clearTimeout(timeout)
  // timeout = setTimeout(() => {
  // }, 3000 * Math.random())
}
const createFilter = (queryString: string) => {
  return (restaurant: LinkItem) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}

const handleSelect = (item: LinkItem) => {
  console.log(item)
}

// <!-- class="el-input__icon"
// @click="handleIconClick" -->
// const handleIconClick = (ev: Event) => {
//   console.log(ev)
// }

const showData = (val: string, searchData: string) => {
  // 不区分大小写  const Reg = new RegExp(searchData, 'i');
  // 全局替换  const Reg = new RegExp(searchData, 'g');
  const Reg = new RegExp(searchData, 'ig')
  if (val) {
    // 注意 这里推荐使用正则占位符$& 不使用${searchData}  因为当这里使用正则表达式（i）不区分大小写时，如果你的文本是大写，搜索的关键字是小写，匹配结果会替换掉大写的文本
    // const res = val.replace(Reg, `<span style="background-color: yellow;">${searchData}</span>`);
    // eslint-disable-next-line quotes
    const res = val.replace(Reg, `<span style="background-color: #FAAB0C;">$&</span>`)
    return res
  }
}

onMounted(() => {
  links.value = loadAll()
})
</script>

<style lang="scss">
.el-icon {
  font-size: 20px !important;
  cursor: pointer;
}

.value{
  font-weight: 600;
  margin-bottom: -10px;
}

</style>
