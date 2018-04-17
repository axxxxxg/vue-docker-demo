<template>
  <div id="edit-campaign">
    <p class="title">编辑活动</p>
    <campaign :campaignData="campaignData" v-on:saveCampaign="editCampaign"></campaign>
  </div>
</template>

<script>
import Campaign from '@/components/campaign/Campaign.vue'
export default {
  name: 'edit-campaign',
  components: {
    Campaign
  },
  data () {
    return {
      campaignName: '编辑活动',
      campaignTime: [1523289600000, 1527696000000],
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
    editCampaign (val) {
      console.log(val)
    }
  }
}
</script>

<style scoped>
  #edit-campaign {
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
