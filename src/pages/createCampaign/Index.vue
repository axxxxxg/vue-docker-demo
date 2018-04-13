<template>
  <div class="section">
    <p class="title">创建活动</p>
    <div class="input-group">
      <label class="label-name">活动名称: </label>
      <input type="text" class="el-input__inner re-input" v-model="campaignName" placeholder="请输入活动名称">
    </div>
    <div class="input-group">
      <label class="label-name">活动时间: </label>
      <el-date-picker
        v-model="campaignTime"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        align="left">
      </el-date-picker>
    </div>
    <hr>
    <div class="input-group">
      <p class="label-name rules">拼团规则: </p>
      <div class="rules-content">
        <label class="label-name">拼团时效：</label>
        <el-input-number v-model="teamValid" :min="1" label="拼团时效"></el-input-number>
        <el-tag class="tag" type="warning"><i class="el-icon-bell icon"></i>单位: 小时</el-tag>
        <div class="input-group">
          <label class="label-name">拼团折扣：</label>
          <el-input-number v-model="discount" :min="0.1" :step="0.1" :max="10" label="拼团时效"></el-input-number>
          <el-tag class="tag" type="warning"><i class="el-icon-bell icon"></i>例如: 八五折对于8.5</el-tag>
        </div>
        <div class="input-group">
          <label class="label-name">成团人数：</label>
          <el-input-number v-model="peopleNum" :min="2" :step="1" label="成团人数"></el-input-number>
        </div>
      </div>
    </div>
    <div class="input-group">
      <p class="label-name">拼团商品</p>
      <div class="goods-list">
        <div class="button-group">
          <el-button type="primary" icon="el-icon-plus">新增</el-button>
        </div>
        <el-table :data="goodsData" stripe height="450">
          <el-table-column align="center" prop="name" label="商品名称"></el-table-column>
          <el-table-column align="center" prop="stock" label="库存"></el-table-column>
          <el-table-column align="center" prop="teamBuyPrice" label="拼团价格"></el-table-column>
          <el-table-column align="center" prop="discountPrice" label="单团优惠估算"> </el-table-column>
          <el-table-column align="center" label="操作" prop="id">
            <template slot-scope="scope">
              <el-button @click.native.prevent="deleteGoods(scope.row.id)" type="danger" icon="el-icon-delete" circle></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'create-campaign',
  data () {
    return {
      campaignName: '',
      campaignTime: '',
      teamValid: '',
      discount: '',
      peopleNum: '',
      goodsData: [{
        id: 1,
        name: '夏威夷果',
        stock: 20,
        teamBuyPrice: 40,
        discountPrice: 200
      }, {
        id: 2,
        name: '番茄酱',
        stock: 20,
        teamBuyPrice: 60,
        discountPrice: 200
      }, {
        id: 31,
        name: '沙拉酱',
        stock: 20,
        teamBuyPrice: 80,
        discountPrice: 200
      }, {
        id: 15,
        name: '手抓饼',
        stock: 20,
        teamBuyPrice: 50,
        discountPrice: 200
      }]
    }
  },
  methods: {
    deleteGoods (goodsId) {
      this.$confirm('是否删除此商品?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
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
  .section {
    padding: 3%;
    width: 75%;
    font-size: 14px;
    margin: 40px auto;
    box-shadow: 3px 1px 5px rgba(7, 0, 22, 0.25);
  }
  .re-input {
    width: 400px;
  }
  .input-group {
   margin: 20px 0;
  }
  .title {
    font-size: 24px;
    font-weight: bold;
    margin: -10px 0 20px;
    color: #F56C6C;
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
</style>
