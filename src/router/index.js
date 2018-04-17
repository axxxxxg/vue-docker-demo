import Vue from 'vue'
import Router from 'vue-router'
import CreateCampaign from '@/pages/createCampaign/Index'
import EditCampaign from '@/pages/editCampaign/Index'
import BrowseCampaign from '@/pages/browseCampaign/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CreateCampaign',
      component: CreateCampaign
    }, {
      path: '/edit-campaign/:id',
      name: 'EditCampaign',
      component: EditCampaign
    }, {
      path: '/browse-campaign/:id',
      name: 'BrowseCampaign',
      component: BrowseCampaign
    }
  ]
})
