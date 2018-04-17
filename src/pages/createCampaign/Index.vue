<template>
  <div id="create-campaign">
    <p class="title">创建活动</p>
    <campaign 
      :campaign-data="campaignData" 
      @saveCampaign="createCampaign"/>
    <div class="content">
      <div class="input-group">
        <label class="label-name">活动名称: </label>
        <input 
          v-model="campaignName" 
          type="text" 
          class="el-input__inner re-input" 
          placeholder="请输入活动名称">
      </div>
      <div class="input-group">
        <label class="label-name">活动时间: </label>
        <el-date-picker
          v-model="campaignTime"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="timestamp"
          align="left"/>
      </div>
      <hr>
      <div class="input-group">
        <p class="label-name rules">拼团规则: </p>
        <div class="rules-content">
          <label class="label-name">拼团时效：</label>
          <el-input-number 
            v-model="teamValid" 
            :min="1" 
            label="拼团时效"/>
          <el-tag 
            name="team-valid-tag" 
            class="tag" 
            type="warning"><i class="el-icon-bell icon"/>单位: 小时</el-tag>
          <div class="input-group">
            <label class="label-name">拼团折扣：</label>
            <el-input-number 
              v-model="discount" 
              :min="0.1" 
              :step="0.1" 
              :max="10" 
              label="拼团折扣"/>
            <el-tag 
              class="tag" 
              type="warning"><i class="el-icon-bell icon"/>例如: 八五折对于8.5</el-tag>
          </div>
          <div class="input-group">
            <label class="label-name">成团人数：</label>
            <el-input-number 
              v-model="peopleNum" 
              :min="2" 
              :step="1" 
              label="成团人数"/>
          </div>
        </div>
      </div>
      <div class="input-group">
        <p class="label-name">拼团商品</p>
        <div class="goods-list">
          <div class="button-group">
            <goods-list 
              :is-show="showGoodsList"
              @getSelectGoods="selectData" 
            />
          </div>
          <el-table 
            :data="goodsData" 
            stripe 
            height="450">
            <el-table-column 
              align="center" 
              prop="id" 
              label="商品编号"/>
            <el-table-column 
              align="center" 
              prop="name" 
              label="商品名称"/>
            <el-table-column 
              align="center" 
              prop="stock" 
              label="库存"/>
            <el-table-column 
              align="center" 
              prop="teamBuyPrice" 
              label="拼团价格"/>
            <el-table-column 
              align="center" 
              prop="discountPrice" 
              label="单团优惠估算"/>
            <el-table-column 
              align="center" 
              label="操作" 
              prop="id">
              <template slot-scope="scope">
                <el-button 
                  class="delete-goods" 
                  type="danger" 
                  icon="el-icon-delete" 
                  circle
                  @click.native.prevent="deleteGoods(scope.row.id)" 
                />
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <el-button 
        type="danger" 
        class="save-btn" 
        @click="createCampaign">保存</el-button>
    </div>
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
