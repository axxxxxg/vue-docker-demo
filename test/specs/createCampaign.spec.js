import Vue from 'vue'
import CreateCampaign from '@/pages/createCampaign/Index'

describe('createCampaign', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(CreateCampaign)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.title').textContent)
      .toEqual('创建活动')
  })
})
