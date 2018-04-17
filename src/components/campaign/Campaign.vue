<template>
  <div
    v-show="!!campaignData"
    class="content"
  >
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
      @click="saveCampaign">保存</el-button>
  </div>
</template>

<script>
import GoodsList from './GoodsList.vue'
export default {
  name: 'Campaign',
  components: {
    GoodsList
  },
  props: {
    campaignData: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      goodsIds: [],
      showGoodsList: false,
      goodsData: null,
      campaignName: '',
      campaignTime: [],
      teamValid: 1,
      discount: 0.1,
      peopleNum: 2
    }
  },
  watch: {
    goodsData (val) {
      this.goodsIds = []
      for (let i = 0; i < val.length; i++) {
        this.goodsIds.push(val[i].id)
      }
    }
  },
  beforeMount () {
    this.goodsData = this.campaignData.goodsData
    this.campaignName = this.campaignData.campaignName
    this.campaignTime = this.campaignData.campaignTime
    this.teamValid = this.campaignData.teamValid
    this.discount = this.campaignData.discount
    this.peopleNum = this.campaignData.peopleNum
  },
  methods: {
    selectData (val) {
      if (this.goodsData === null) {
        this.goodsData = val
        return true
      }
      val.forEach((item) => {
        let tag = true
        this.goodsData.forEach((oldItem) => {
          if (oldItem.id === item.id) {
            tag = false
          }
        })
        if (tag) {
          this.goodsData.push(item)
        }
      })
    },
    deleteGoods (goodsId) {
      this.$confirm('是否删除此商品?', '提示', {
        confirmButtonText: '确定',
        confirmButtonClass: 'confirm-del',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.goodsData.forEach((item, index) => {
          if (item.id === goodsId) {
            this.goodsData.splice(index, 1)
          }
        })
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    saveCampaign () {
      let data = {
        campaignName: this.campaignName,
        campaignTime: this.campaignTime,
        teamValid: this.teamValid,
        discount: this.discount,
        peopleNum: this.peopleNum,
        goodsIds: this.goodsIds
      }
      this.$emit('saveCampaign', data)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .label-name {
    color: #686868;
    margin-right: 5px;
    width: 70px;
    font-weight: bold;
    font-size: 15px;
  }
  .content{
    background-color: #fff;
    padding: 40px 40px 60px;
  }
  .re-input {
    width: 400px;
  }
  .input-group {
    margin: 20px 0;
  }
  .rules {
    margin: 20px 0;
  }
  .rules-content {
    margin-left: 20px;
    .re-input {
      width: 180px;
    }
    .icon {
      margin-right: 5px;
    }
    .tag {
      margin-left: 10px;
    }
    .label-name {
      font-weight: normal;
    }
  }
  .goods-list {
    background-color: rgba(0, 0, 0, .1);
    padding: 20px;
  }
  .button-group {
    float: right;
    margin-bottom: 10px;
  }
  .el-tag--warning {
    background-color: rgba(123, 125, 229,.1);
    border-color: rgba(123, 125, 229,.2);
    color: #9787ff;
  }

  .save-btn {
    width: 127px;
    height: 36px;
    float: right;
  }
</style>
