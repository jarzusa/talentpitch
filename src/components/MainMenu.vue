<script setup lang="ts">
import { Download, Share, User, UserFilled } from '@element-plus/icons-vue'
import Parallax from '@/components/Parallax.vue'
import Tabs from '@/components/Tabs.vue'
import CompanyCover from '@/components/CompanyCover.vue'
import { ref } from 'vue'

const valueRate = ref(4)
</script>
<template>
  <el-container>
    <el-header class="" style="background: #1a237e">
      <div class="flex flex-wrap sm:pb-3 xs:pb-3 md:pb-0 lg:pb-0">
        <div class="w-full md:w-1/4 sm:w-4/4 lg:w-1/4 p-3 xs:items-center">
          <img
            src="https://media.talentpitch.co/app/logos/new_logo_talentpitch.svg"
            alt="TalentPitch"
            class="block max-w-none"
            width="220"
            height="28"
          />
        </div>
        <div class="w-full md:w-2/4 sm:w-4/4 lg:w-2/4">
          <el-container :class="'justify-center'">
            <el-menu
              mode="horizontal"
              :ellipsis="false"
              background-color="#1a237e"
              text-color="#fff"
            >
              <el-menu-item index="1">Conectate</el-menu-item>
              <el-menu-item index="2">Mi muros</el-menu-item>
              <el-menu-item index="3">Mis listas</el-menu-item>
              <el-menu-item index="4">Aprende</el-menu-item>
            </el-menu>
          </el-container>
        </div>
        <div class="w-full lg:w-1/4 md:w-1/4 sm:w-2/4" style="margin: auto; text-align: center">
          <el-button color="#DE1C7D" style="margin-right: 10%">
            Comenzar <el-icon class="el-icon--right"><Plus /></el-icon>
          </el-button>
          <el-button color="#DE1C7D" text style="margin: auto" link>
            <el-icon size="20"><Message /></el-icon>
          </el-button>
          <el-button color="#DE1C7D" text style="margin: auto" link>
            <el-icon size="20"><Bell /></el-icon>
          </el-button>
          <el-button circle text link>
            <el-avatar :size="40" :icon="UserFilled" />
            <el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
        </div>
      </div>
    </el-header>
    <Parallax />
    <CompanyCover />
    <div class="flex flex-wrap sm:pb-3 xs:pb-3 md:pb-0 lg:pb-0 lg:gap-28">
      <div class="w-full md:w-12/12 sm:w-12/12 lg:w-3/12 p-3 hidden lg:block detail_cover_hidden"></div>
      <div class="w-full md:w-12/12 sm:w-12/12 lg:w-8/12 p-3 xs:items-center detail_cover">
        <el-card class="rounded--lg el-card_border_none" shadow="never">
          <div class="flex flex-wrap">
            <div class="w-full md:w-4/12 sm:w-12/12 lg:w-4/12 p-3 px-0 xs:items-center">
              <p class="text-lg font-semibold text-gray-400">
                Match con la cultura
                <span class="text-green-400 font-semibold">80%</span>
              </p>
            </div>
            <div class="w-full md:w-4/12 sm:w-12/12 lg:w-4/12 p-3 xs:items-center self-center">
              <el-progress :percentage="80" :stroke-width="15" status="success" />
            </div>
            <div class="w-full md:w-4/12 sm:w-12/12 lg:w-4/12 p-3 xs:items-center">
              <div class="flex justify-center lg:justify-end md:justify-end">
                <el-button color="#DE1C7D"> Enviar Pitch </el-button>
                <el-button color="#DE1C7D" plain> Seguir </el-button>
              </div>
            </div>
            <div class="w-full">
              <Tabs />
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </el-container>
</template>
<style lang="scss">
.el-menu--horizontal.el-menu {
  border-bottom: none;
}

img {
  display: block;
  margin: auto;
}
.el-header {
  height: auto;
}

.rounded {
  &--lg {
    border-radius: 0.5rem;
  }
}

.el-card_border_none {
  border: none;
}

// :deep(.el-card__body) {
//   padding-left: inherit !important;
// }
</style>
