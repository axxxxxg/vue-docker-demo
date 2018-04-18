<template>
  <div id="browse-campaign">
    <p class="title">活动详情</p>
    <not-start-campaign/>
    <!--<begun-campaign></begun-campaign>-->
  </div>
</template>

<script>
import NotStartCampaign from '@/components/browseCampaign/NotStartCampaign'
import BegunCampaign from '@/components/browseCampaign/BegunCampaign'

export default {
  name: 'BrowseCampaign',
  components: {
    NotStartCampaign,
    BegunCampaign
  },
  data () {
    return {
      campaignName: '',
      campaignTime: [1523289600000, 1527696000000],
      teamValid: 1,
      discount: 0.1,
      peopleNum: 2,
      goodsData: null
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  #browse-campaign {
    padding: 40px;
    font-size: 14px;
    background-color: rgba(216, 223, 227, .3);
    box-shadow: inset 0 0 0.75rem rgba(0, 0, 0, .25);
  }

  .title {
    font-size: 24px;
    font-weight: bold;
    margin: -10px 40px 20px;
  }
</style>
