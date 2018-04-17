import { shallow } from '@vue/test-utils'
import CreateCampaign from '@/pages/createCampaign/Index'
import { goodsData, addGoodsData } from './testData'

describe('createCampaign', () => {
  const wrapper = shallow(CreateCampaign)

  it('页面渲染后,标题为创建活动', () => {
    expect(wrapper.find('.title').text()).toEqual('创建活动')
  })

  it('将新增商品列表(除已存在的商品外)加入到商品列表中', (done) => {
    wrapper.vm.goodsData = goodsData
    wrapper.vm.selectData(addGoodsData)
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.goodsData.length).toBe(4)
      expect(wrapper.vm.goodsIds).not.toEqual([1, 2, 31])
      expect(wrapper.vm.goodsIds).toEqual([1, 2, 31, 3])
      done();
    })
  })
})
