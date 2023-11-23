<template>
  <div class="flex flex-wrap">
    <div class="w-full px-1">
      <el-card class="rounded--lg" shadow="never">
        <div class="flex flex-wrap px-3">
          <div class="w-full">
            <p class="font-semibold text-blue-800 text-xl">
              <span class="mdi mdi-account-circle-outline" />
              Resumen de la empresa
            </p>
          </div>
          <div class="w-full mt-4">
            <p class="font-semibold">Descripción</p>
          </div>
          <div class="w-full">
            <p class="text-justify">
              {{ description }}
            </p>
          </div>
          <div class="w-full md:w-6/12 lg:w-6/12 mt-4">
            <p class="font-semibold">Correo electrónico</p>
            <p class="">{{ email }}</p>
          </div>
          <div class="w-full md:w-6/12 lg:w-6/12 mt-4">
            <p class="font-semibold">Número de contacto</p>
            <p class="">{{ phone }}</p>
          </div>
          <div class="w-full md:w-6/12 lg:w-6/12 mt-4">
            <p class="font-semibold">Estados deseados buscados</p>
            <p class="">{{ status_search }}</p>
          </div>
          <div class="w-full md:w-6/12 lg:w-6/12 mt-4">
            <p class="font-semibold">Rol más buscado</p>
            <p class="">{{ roles_search }}</p>
          </div>
        </div>
      </el-card>
    </div>

    <div class="w-full md:w-12/12 sm:w-12/12 lg:w-6/12 mt-4 px-1">
      <el-card shadow="never" class="rounded--lg">
        <div class="flex flex-wrap px-3">
          <div class="w-full">
            <p class="font-semibold text-blue-800 text-xl">
              <span class="mdi mdi-bullseye-arrow" />
              Áreas de interés
            </p>
            <div class="flex flex-wrap space-x-1 mt-4">
              <el-tag
                v-for="(item, i) in areasOfInterest"
                :key="i"
                size="default"
                color="#e0f0fa"
                class="text-xl mb-2"
                round
                effect="light"
              >
                {{ item }}
              </el-tag>
            </div>
          </div>
        </div>
      </el-card>
    </div>
    <div class="w-full md:w-12/12 sm:w-12/12 lg:w-6/12 mt-4 px-1">
      <el-card shadow="never" class="rounded--lg">
        <div class="flex flex-wrap px-3">
          <div class="w-full">
            <p class="font-semibold text-blue-800 text-xl">
              <span class="mdi mdi-head-lightbulb-outline" />
              Vacantes sugeridas por AI
            </p>
            <div class="flex flex-wrap space-x-1 mt-4">
              <el-tag
                v-for="(item, i) in vacanciesSuggestedByAI"
                :key="i"
                size="default"
                color="#e0f0fa"
                class="text-xl mb-2"
                round
                effect="light"
              >
                {{ item }}
              </el-tag>
            </div>
          </div>
        </div>
      </el-card>
    </div>

    <div class="w-full px-3 mt-4">
      <el-divider class="font-semibold text-blue-800 text-xl title" content-position="left">
        Lo que buscamos en el talento
      </el-divider>
    </div>

    <div class="w-full md:w-12/12 sm:w-12/12 lg:w-6/12 mt-4 px-1">
      <el-card shadow="never" class="rounded--lg">
        <div class="flex flex-wrap px-3">
          <div class="w-full">
            <p class="font-semibold text-blue-800 text-xl">
              <span class="mdi mdi-brain" />
              Conocimientos
            </p>
            <div class="flex flex-wrap justify-between mt-4">
              <el-tag
                v-for="(item, i) in knowledge"
                :key="i"
                size="default"
                color="#e0f0fa"
                class="text-xl mb-2"
                round
                effect="light"
              >
                {{ item }}
              </el-tag>
            </div>
          </div>
        </div>
      </el-card>
    </div>
    <div class="w-full md:w-12/12 sm:w-12/12 lg:w-6/12 mt-4 px-1">
      <el-card shadow="never" class="rounded--lg">
        <div class="flex flex-wrap px-3">
          <div class="w-full">
            <p class="font-semibold text-blue-800 text-xl">
              <span class="mdi mdi-paperclip" />
              Habilidades
            </p>
            <div class="flex flex-wrap justify-between mt-4">
              <el-tag
                v-for="(item, i) in skills"
                :key="i"
                size="default"
                color="#e0f0fa"
                class="text-xl mb-2"
                round
                effect="light"
              >
                {{ item }}
              </el-tag>
            </div>
          </div>
        </div>
      </el-card>
    </div>
    <div class="w-full md:w-12/12 sm:w-12/12 lg:w-6/12 mt-4 px-1">
      <el-card shadow="never" class="rounded--lg">
        <div class="flex flex-wrap px-3">
          <div class="w-full">
            <p class="font-semibold text-blue-800 text-xl">
              <span class="mdi mdi-hammer-wrench" />
              Herramientas
            </p>
            <div class="flex flex-wrap justify-between mt-4">
              <el-tag
                v-for="(item, i) in tools"
                :key="i"
                size="default"
                color="#e0f0fa"
                class="text-xl mb-2"
                round
                effect="light"
              >
                {{ item }}
              </el-tag>
            </div>
          </div>
        </div>
      </el-card>
    </div>
    <div class="w-full md:w-12/12 sm:w-12/12 lg:w-6/12 mt-4 px-1">
      <el-card shadow="never" class="rounded--lg">
        <div class="flex flex-wrap px-3">
          <div class="w-full">
            <p class="font-semibold text-blue-800 text-xl">
              <span class="mdi mdi-translate" />
              Idiomas
            </p>
            <div class="flex flex-wrap space-x-1 mt-4">
              <el-tag
                v-for="(item, i) in languages"
                :key="i"
                size="default"
                color="#e0f0fa"
                class="text-xl mb-2"
                round
                effect="light"
              >
                {{ item }}
              </el-tag>
            </div>
          </div>
        </div>
      </el-card>
    </div>
    <div class="w-full mt-4 px-1">
      <el-card shadow="never" class="rounded--lg">
        <div class="flex flex-wrap px-3">
          <div class="w-full">
            <p class="font-semibold text-blue-800 text-xl">
              <span class="mdi mdi-format-list-bulleted" />
              Metodologías
            </p>
            <div class="flex flex-wrap space-x-1 mt-4">
              <el-tag
                v-for="(item, i) in methodologies"
                :key="i"
                size="default"
                color="#e0f0fa"
                class="text-xl mb-2"
                round
                effect="light"
              >
                {{ item }}
              </el-tag>
            </div>
          </div>
        </div>
      </el-card>
    </div>

    <div class="w-full px-3 mt-4">
      <el-divider class="font-semibold text-blue-800 text-xl title" content-position="left">
        Lo que ofrecemos en la empresa
      </el-divider>
    </div>

    <div class="w-full md:w-12/12 sm:w-12/12 lg:w-6/12 mt-4 px-1">
      <el-card shadow="never" class="rounded--lg">
        <div class="flex flex-wrap px-3">
          <div class="w-full">
            <p class="font-semibold text-blue-800 text-xl">
              <span class="mdi mdi-check-decagram-outline" />
              Beneficios que ofrecemos
            </p>
            <div class="flex flex-wrap space-x-2 mt-4">
              <el-tag
                v-for="(item, i) in benefits"
                :key="i"
                size="default"
                color="#e0f0fa"
                class="text-xl mb-2"
                round
                effect="light"
              >
                {{ item }}
              </el-tag>
            </div>
          </div>
        </div>
      </el-card>
    </div>
    <div class="w-full md:w-12/12 sm:w-12/12 lg:w-6/12 mt-4 px-1">
      <el-card shadow="never" class="rounded--lg">
        <div class="flex flex-wrap px-3">
          <div class="w-full">
            <p class="font-semibold text-blue-800 text-xl">
              <span class="mdi mdi-briefcase-variant-outline" />
              Formas de trabajo que ofrecemos
            </p>
            <div class="flex flex-wrap justify-between mt-4">
              <el-tag
                v-for="(item, i) in formsOfWork"
                :key="i"
                size="default"
                color="#e0f0fa"
                class="text-xl mb-2"
                round
                effect="light"
              >
                {{ item }}
              </el-tag>
            </div>
          </div>
        </div>
      </el-card>
    </div>
    <div class="w-full md:w-12/12 sm:w-12/12 lg:w-6/12 mt-4 px-1">
      <el-card shadow="never" class="rounded--lg">
        <div class="flex flex-wrap px-3">
          <div class="w-full">
            <p class="font-semibold text-blue-800 text-xl">
              <span class="mdi mdi-wechat" />
              Cultura que ofrecemos
            </p>
            <div class="flex flex-wrap space-x-2 mt-4">
              <el-tag
                v-for="(item, i) in culture"
                :key="i"
                size="default"
                color="#e0f0fa"
                class="text-xl mb-2"
                round
                effect="light"
              >
                {{ item }}
              </el-tag>
            </div>
          </div>
        </div>
      </el-card>
    </div>
    <div class="w-full md:w-12/12 sm:w-12/12 lg:w-6/12 mt-4 px-1">
      <el-card shadow="never" class="rounded--lg">
        <div class="flex flex-wrap px-3">
          <div class="w-full">
            <p class="font-semibold text-blue-800 text-xl">
              <span class="mdi mdi-account-group-outline" />
              Comunidades
            </p>
            <div class="flex flex-wrap space-x-2 mt-4">
              <el-tag
                v-for="(item, i) in communities"
                :key="i"
                size="default"
                color="#e0f0fa"
                class="text-xl mb-2"
                round
                effect="light"
              >
                {{ item }}
              </el-tag>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCompanyStore } from '@/stores/company'
import { storeToRefs } from 'pinia'
const {
  description,
  email,
  phone,
  status_search,
  roles_search,
  areasOfInterest,
  vacanciesSuggestedByAI,
  knowledge,
  skills,
  tools,
  languages,
  methodologies,
  benefits,
  formsOfWork,
  culture,
  communities
} = storeToRefs(useCompanyStore())
</script>

<style lang="scss">
.title {
  .el-divider__text {
    font-weight: 630;
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: #1a247c;
  }
}
</style>
