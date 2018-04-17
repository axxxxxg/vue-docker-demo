import { shallow } from '@vue/test-utils'
import Campaign from '@/components/campaign/Campaign'
import { goodsData, addGoodsData } from '@root/test/testData/testData'

describe('createCampaign', () => {
  const wrapper = shallow(Campaign, {
    propsData: {
      campaignData: {
        campaignName: '',
        campaignTime: [],
        teamValid: 1,
        discount: 0.1,
        peopleNum: 2,
        goodsData: goodsData
      }
    }
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
