import { defineStore } from 'pinia'
import axios from 'axios'

const URL_PATH = 'https://data2.talentpitch.co/api'
export const useVacanciesStore = defineStore('vacancies', {
  state: () => {
    return {
      vacanciesList: [] as
        | Array<{
            image: string
            id: number
            name: string
            description: string
            comments_count: number
            pitches_count: number
            views_count: number
          }>
        | []
    }
  },
  actions: {
    getVacanciesCompany() {
      axios
        .get(
          `${URL_PATH}/homeservice/categories/d/challenges/trending_challenges/unique/null?limit=100`
        )
        .then((response) => {
          this.vacanciesList = response.data.data
          //   console.log(response.data.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
})
