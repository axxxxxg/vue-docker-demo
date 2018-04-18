<template>
  <div class="content">
    <div class="input-group">
      <label class="label-name">活动名称: </label>
      <el-tag type="warning">{{ campaignName }}</el-tag>
    </div>
    <div class="input-group">
      <label class="label-name">活动时间: </label>
      <el-date-picker
        v-model="campaignTime"
        :disabled="true"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        value-format="timestamp"
        align="left"/>
    </div>
    <hr>
    <div class="input-group">
      <label class="label-name">拼团时效：</label>
      <el-tag type="warning">{{ teamValid }} 小时</el-tag>
    </div>
    <div class="input-group">
      <label class="label-name">拼团折扣：</label>
      <el-tag type="warning">{{ discount }} 折</el-tag>
    </div>
    <div class="input-group">
      <label class="label-name">成团人数：</label>
      <el-tag type="warning">{{ peopleNum }} 人</el-tag>
    </div>
    <div class="input-group">
      <p class="label-name">拼团商品</p>
      <div class="goods-list">
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
        </el-table>
      </div>
    </div>
    <p class="edit-btn">
      <router-link
        :to="{ name: 'EditCampaign', params: { id: $route.params.id } }"
        tag="button">编辑</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'NotStartCampaign',
  data () {
    return {
      campaignName: '活动',
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
  .label-name {
    display: inline-block;
    color: #686868;
    width: 80px;
    font-weight: bold;
    font-size: 15px;
  }

  .content {
    background-color: #fff;
    padding: 40px 40px 60px;
  }

  .input-group {
    margin: 20px 0;
  }

  .rules {
    margin: 20px 0;
  }

  .goods-list {
    background-color: rgba(0, 0, 0, .1);
    padding: 20px;
  }

  .el-tag--warning {
    background-color: rgba(123, 125, 229, .1);
    border-color: rgba(123, 125, 229, .2);
    color: #9787ff;
  }

  .edit-btn {
    margin: 0;
    text-align: center;
    button {
      width: 127px;
      height: 36px;
      line-height: 36px;
      background: #7662fe;
      box-shadow: 0 3px 9px 0 rgba(123, 125, 229, 0.75);
      border-radius: 2px;
      color: #fff;
      cursor: pointer;
      border: 0;
      outline: none;
    }
  }
</style>
