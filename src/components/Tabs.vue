<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeName = ref('profile')

const tabs = ref([
  {
    name: 'profile',
    label: 'Perfil',
    route_view: 'company_profile',
    disabled: false
  },
  {
    name: 'vacancies',
    label: 'Vacantes',
    route_view: 'company_vacancies',
    disabled: false
  },
  {
    name: 'list',
    label: 'Listas',
    route_view: 'company_vacancies',
    disabled: true
  }
])

const handleClick = (tab: TabsPaneContext, event: Event) => {
  const tabObject = tabs.value.find((item: { name: string }) => item.name == tab.props.name)
  if (tabObject) gotTo(tabObject)
}

const gotTo = (tabObject: { name: string; route_view: string }) => {
  activeName.value = tabObject?.name as string
  router.push({ name: tabObject?.route_view })
}

onMounted(() => {
  const tabObject = tabs.value.find((item: { name: string }) => item.name == activeName.value)
  if (tabObject) gotTo(tabObject)
})
</script>

<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane
      class="text-lg font-semibold text-gray-400"
      v-for="tab in tabs"
      :label="tab.label"
      :name="tab.name"
      :disabled="tab.disabled"
    >
      <RouterView />
    </el-tab-pane>
  </el-tabs>
</template>

<style>
.el-tabs__item {
  padding-left: 5%;
  line-height: 1.75rem;
  font-weight: 600;
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}

.el-tabs__item.is-active {
  color: #de1c7d;
}

.el-tabs__active-bar {
  background-color: #de1c7d;
}

.el-tabs__item:hover {
  color: #de1c7d;
  cursor: pointer;
}
</style>
