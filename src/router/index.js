import Vue from 'vue'
import Router from 'vue-router'
import CreateCampaign from '@/pages/createCampaign/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CreateCampaign',
      component: CreateCampaign
    }
  ]
})
