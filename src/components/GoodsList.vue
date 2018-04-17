<template>
  <div>
    <button class="new-add" @click="isShow=true"><i class="el-icon-plus"></i>新增</button>
    <el-dialog title="商品列表" :visible.sync="isShow">
      <el-table ref="goodsListTable" :data="currentData" stripe height="450" @selection-change="selectGoods">
        <el-table-column type="selection"></el-table-column>
        <el-table-column align="center" prop="id" label="商品编号"></el-table-column>
        <el-table-column align="center" prop="name" label="商品名称"></el-table-column>
        <el-table-column align="center" prop="stock" label="库存"></el-table-column>
        <el-table-column align="center" prop="teamBuyPrice" label="拼团价格"></el-table-column>
        <el-table-column align="center" prop="discountPrice" label="单团优惠估算"> </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          layout="total, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
        <el-button @click="isShow = false">取 消</el-button>
        <el-button type="primary" @click="saveSelectGoods()">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'goods-list',
  data () {
    return {
      isShow: false,
      goodsList: [{
        id: 1,
        name: '烤鸭',
        stock: 20,
        teamBuyPrice: 40,
        discountPrice: 200
      }, {
        id: 2,
        name: '鸡腿',
        stock: 20,
        teamBuyPrice: 40,
        discountPrice: 200
      }, {
        id: 31,
        name: '天津麻花',
        stock: 20,
        teamBuyPrice: 40,
        discountPrice: 200
      }, {
        id: 15,
        name: '煎饼',
        stock: 20,
        teamBuyPrice: 40,
        discountPrice: 200
      }, {
        id: 3,
        name: '夏威夷果',
        stock: 20,
        teamBuyPrice: 40,
        discountPrice: 200
      }, {
        id: 4,
        name: '番茄酱',
        stock: 20,
        teamBuyPrice: 60,
        discountPrice: 200
      }, {
        id: 5,
        name: '沙拉酱',
        stock: 20,
        teamBuyPrice: 80,
        discountPrice: 200
      }, {
        id: 6,
        name: '手抓饼',
        stock: 20,
        teamBuyPrice: 50,
        discountPrice: 200
      }, {
        id: 7,
        name: '鸡蛋卷',
        stock: 20,
        teamBuyPrice: 50,
        discountPrice: 200
      }, {
        id: 8,
        name: '鸡腿',
        stock: 20,
        teamBuyPrice: 50,
        discountPrice: 200
      }, {
        id: 9,
        name: '鸡脚',
        stock: 20,
        teamBuyPrice: 50,
        discountPrice: 200
      }, {
        id: 10,
        name: '鸭脚',
        stock: 20,
        teamBuyPrice: 50,
        discountPrice: 200
      }, {
        id: 11,
        name: '鸭腿',
        stock: 20,
        teamBuyPrice: 50,
        discountPrice: 200
      }, {
        id: 12,
        name: '鸭脖',
        stock: 20,
        teamBuyPrice: 50,
        discountPrice: 200
      }],
      currentData: [],
      currentPage: 1,
      total: 0,
      selectData: []
    }
  },
  created () {
    let temp = this.goodsList.concat([])
    this.total = temp.length
    this.currentData = temp.splice(0, 10)
  },
  methods: {
    saveSelectGoods () {
      this.isShow = false
      this.$emit('getSelectGoods', this.selectData)
      this.$refs.goodsListTable.clearSelection()
    },
    selectGoods (row) {
      this.selectData = row
    },
    handleCurrentChange (index) {
      let temp = this.goodsList.concat([])
      this.currentData = temp.splice((index - 1) * 10, temp.length)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .new-add{
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
    i {
      padding: 5px 10px 5px 0;
      font-weight: bold;
    }
  }

  .el-pagination {
    text-align: center;
    margin-bottom: 40px;
  }
</style>
