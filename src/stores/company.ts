import { defineStore } from 'pinia'

export const useCompanyStore = defineStore('company', {
  state: () => {
    return {
      description:
        'En ac telecom somos expertos en telecomunicaciones con mas de 25 años comprobables en el mercado, brindando empleo a mas de 321 empleados al rededor de todo el mundo ',
      email: 'ejemplo@ejemplo.com',
      phone: '3005895648',
      status_search: 'Emprendedor, practicas, primer empleo ',
      roles_search: 'Lider UX',
      creator: 'Ing. Jose Arzusa',
      areasOfInterest: ['Frontend', 'Figma', 'UX'],
      vacanciesSuggestedByAI: ['Frontend developer senior', 'Diseñador grafico', 'UX Lead'],
      knowledge: ['Desarrollo web', 'Análisis de datos', 'Arquitectura de software'],
      skills: ['Trabajo en equipo', 'Liderazgo', 'Gestión del tiempo', 'Inteligencia artificial.'],
      tools: ['Adobe Photoshop', 'Visual Studio Code', 'MySQL Workbench', 'Datagrip'],
      languages: ['Español', 'Ingles basico'],
      methodologies: ['Scrum', 'Kanban'],
      benefits: ['Salario competitivo', 'Ascensos'],
      formsOfWork: ['Remoto'],
      culture: ['Orientación hacia la persona', ' Orientación hacia el trabajo'],
      communities: ['Copy', 'Copy']
    }
  }
})
