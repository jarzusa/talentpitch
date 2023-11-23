<script setup lang="ts">
import ActivitiesRecently from '@/components/ActivitiesRecently.vue'
import { Download, Share } from '@element-plus/icons-vue'
import { ref } from 'vue'

const valueRate = ref(4)
</script>
<template>
  <div
    class="container_relative lg:ml-20 lg:mt-28 md:mt-28 z-1 lg:absolute p-3 w-full md:w-12/12 sm:w-12/12 lg:w-3/12"
  >
    <el-card
      class="flex justify-center items-center text-center min-w-40em rounded--lg"
      shadow="never"
    >
      <el-avatar class="custom-bg__avatar--blue" :size="200">
        <p class="text-blue-700 font-extrabold text-6xl">AC</p>
      </el-avatar>
      <p class="text-blue-700 font-semibold text-xl mt-3">A.C. Telecom</p>
      <p class="text-gray-400 text-sm mt-2">@ac-telecom</p>
      <p class="text-gray-400 font-semibold text-md mt-2">Startup - tecnología</p>
      <p class="text-green-500 font-semibold text-md mt-2 items-center">
        <el-icon><SuccessFilled /></el-icon>
        Empresa activa
      </p>
      <p class="text-gray-400 font-semibold text-md mt-2 items-center">
        <el-icon><Location /></el-icon>
        Floridablanca - Colombia
      </p>
      <el-rate v-model="valueRate" disabled :size="'large'" />
      <p class="text-pink-400 font-semibold text-md mt-2 items-center">
        <el-icon><Link /></el-icon>
        https://www.actelecom.net/telecom
      </p>
      <el-image class="mt-4" src="../../public/profile_company.png" fit="cover" />
      <el-card class="rounded--lg mt-2" shadow="never">
        <el-image src="../../public/profile_company_qr.png" fit="cover" />
      </el-card>
      <div>
        <el-button color="#DE1C7D" class="mt-4 w-full" :icon="Share"> Compartir perfil </el-button>
      </div>
      <div>
        <el-button color="#DE1C7D" class="mt-4 w-full text-pink-500" plain :icon="Download">
          Descargar resumen
        </el-button>
      </div>
      <ActivitiesRecently />
    </el-card>
  </div>
</template>
<style lang="scss" scoped>
.custom-bg {
  &__avatar {
    &--blue {
      background-color: #e0f0fa; /* Reemplaza esto con el color deseado */
    }
  }
}

.rounded {
  &--lg {
    border-radius: 0.5rem;
  }
}
</style>
