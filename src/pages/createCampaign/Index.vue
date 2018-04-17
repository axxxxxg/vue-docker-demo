<template>
  <div id="create-campaign">
    <p class="title">创建活动</p>
    <campaign
      :campaign-data="campaignData"
      @saveCampaign="createCampaign"/>
  </div>
</template>

<script>
  import Campaign from '@/components/campaign/Campaign.vue'
  export default {
    name: 'CreateCampaign',
    components: {
      Campaign
    },
    data () {
      return {
        campaignName: '',
        campaignTime: null,
        teamValid: 1,
        discount: 0.1,
        peopleNum: 2,
        goodsData: null,
        goodsIds: []
      }
    },
    computed: {
      campaignData () {
        return {
          campaignName: this.campaignName,
          campaignTime: this.campaignTime,
          teamValid: this.teamValid,
          discount: this.discount,
          peopleNum: this.peopleNum,
          goodsData: this.goodsData
        }
      }
    },
    methods: {
      createCampaign (val) {
        console.log(val)
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  #create-campaign {
    padding: 40px;
    font-size: 14px;
    background-color: rgba(216,223,227,.3);
    box-shadow: inset 0 0 0.75rem rgba(0,0,0,.25);
  }
  .title {
    font-size: 24px;
    font-weight: bold;
    margin: -10px 40px 20px;
  }
</style>
