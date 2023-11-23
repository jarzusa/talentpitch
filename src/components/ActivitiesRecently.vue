<template>
  <div v-for="(item, i) in transactions">
    <el-row class="text-gray-400 font-semibold mt-7">
      <el-col :span="12" :sm="12" :md="20" :lg="20" class="text-left font-semibold">
        <span :class="item.icon" class="mr-2 text-2xl"></span>
        <span style="vertical-align: top" class="text-lg font-semibold"> {{ item.name }} </span>
      </el-col>
      <el-col :span="12" :sm="12" :md="4" :lg="4" class="text-right font-semibold text-lg  text-gray-500">
        {{ item.value }}
      </el-col>
    </el-row>
    <el-divider />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const transactions = ref([
  {
    name: 'Talentos',
    value: 20,
    icon: 'mdi mdi-account-group-outline'
  },
  {
    name: 'vistas del perfil',
    value: 20,
    icon: 'mdi mdi-eye-outline'
},
{
    name: 'Pitches recibidos',
    value: 20,
    icon: 'mdi mdi-video-outline'
  },
  {
    name: 'Exhibiciones',
    value: 20,
    icon: 'mdi mdi-crowd'
  },
  {
    name: 'Vacantes',
    value: 20,
    icon: 'mdi mdi-book-search-outline'
  },
  {
    name: 'Contenidos',
    value: 20,
    icon: 'mdi mdi-multimedia'
  }
])
</script>
