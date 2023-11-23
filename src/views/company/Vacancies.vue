<script setup lang="ts">
import { useVacanciesStore } from '@/stores/vacancies'
import { ElMessage } from 'element-plus'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const { vacanciesList } = storeToRefs(useVacanciesStore())

const valueRate = ref(4)

const AppliedToVacancy = (vacancyName: string) => {
  ElMessage({
    dangerouslyUseHTMLString: true,
    message: `<p>Felicidades, has aplicado a la vacante <strong>${vacancyName}</strong></p>`,
    type: 'success'
  })
}
</script>
<template>
  <div>
    <p class="text-xl text-blue-900 font-semibold mb-4">Publicadas recientemente</p>
    <div class="carousel">
      <el-carousel
        indicator-position="none"
        :interval="40000"
        trigger="click"
        type="card"
        height="auto"
      >
        <el-carousel-item v-for="item in vacanciesList" :key="item.id" style="min-height: 650px">
          <el-card
            class="rounded--lg"
            :body-style="{ padding: '0px' }"
            style="min-height: 72%; max-width: 60%"
          >
            <img :src="item.image" class="image" style="width: 100%; height: 100px" />
            <div class="flex flex-wrap bg-gray-200 px-3">
              <div class="flex w-full md:w-8/12 sm:w-12/12 lg:w-8/12 p-3 px-2 justify-between">
                <p class="font-semibold text-base">Experticia</p>
                <el-rate
                  v-model="valueRate"
                  disabled
                  :colors="['#99A9BF', '#99A9BF', '#99A9BF']"
                  :size="'default'"
                />
              </div>
              <div
                class="flex w-full md:w-4/12 sm:w-12/12 lg:w-4/12 justify-center lg:justify-end md:justify-end xs:px-0 sm:px-0 md:px-0 lg:px-2 xs:py-0 sm:py-0 md:py-3 lg:py-3"
              >
                <span
                  class="mdi mdi-share-variant-outline px-2 text-base lg:text-xl text-pink-500"
                />
              </div>
            </div>
            <div class="flex flex-wrap bg-white-200 px-3 relative">
              <div class="flex w-full p-3 px-2">
                <p class="font-semibold text-base lg:text-xl text-blue-900 capitalize line-clamp-2">
                  {{ item.name }}
                </p>
              </div>
              <div class="flex w-full p-3 px-2 pt-1">
                <el-tag
                  size="default"
                  color="#e0f0fa"
                  class="text-base lg:text-xl truncate"
                  round
                  effect="light"
                >
                  Creada por organizacion: Jose Arzusa
                </el-tag>
              </div>
              <div class="flex w-full p-3 px-2 pt-1">
                <p
                  class="text-justify text-xs lg:text-base line-clamp-2 xs:line-clamp-2 sm:line-clamp-3 md:line-clamp-4 lg:line-clamp-6"
                >
                  {{ item.description }}
                </p>
              </div>
              <div class="w-full flex flex-wrap justify-between pt-1 px-3">
                <div>
                  <el-tag
                    size="default"
                    color="#de1c7d"
                    class="text-xl pink-tag"
                    round
                    effect="dark"
                  >
                    {{ item.views_count }}
                  </el-tag>
                  <p class="text-xs lg:text-base">Vistas</p>
                </div>
                <div>
                  <el-tag
                    size="default"
                    color="#de1c7d"
                    class="text-xl pink-tag"
                    round
                    effect="dark"
                  >
                    {{ item.comments_count }}
                  </el-tag>
                  <p class="text-xs lg:text-base">Comentarios</p>
                </div>
                <div>
                  <el-tag
                    size="default"
                    color="#de1c7d"
                    class="text-xl pink-tag"
                    round
                    effect="dark"
                  >
                    {{ item.pitches_count }}
                  </el-tag>
                  <p class="text-xs lg:text-base">Pitches</p>
                </div>
              </div>
              <div class="w-full p-3 px-2 justify-center p-3 px-0 py-0">
                <el-divider />
              </div>
              <div class="flex w-full justify-start p-3 px-2 pt-0">
                <el-button color="#DE1C7D" @click="AppliedToVacancy(item.name)">
                  Aplicar a vacante
                </el-button>
              </div>
            </div>
          </el-card>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<style>
.el-carousel__item {
  color: #475669;
  margin: 0;
  text-align: -webkit-center;
}

.pink-tag {
  border-color: #de1c7d;
}

.el-carousel__item {
}
</style>
