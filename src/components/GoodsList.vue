<template>
  <div>
    <button class="new-add" @click="isShow=true"><i class="el-icon-plus"></i>新增</button>
    <el-dialog title="商品列表" :visible.sync="isShow">
      <el-table :data="currentData" stripe height="450">
        <el-table-column type="selection" @row-click="selectGoods"></el-table-column>
        <el-table-column align="center" prop="id" label="商品编号"></el-table-column>
        <el-table-column align="center" prop="name" label="商品名称"></el-table-column>
        <el-table-column align="center" prop="stock" label="库存"></el-table-column>
        <el-table-column align="center" prop="price" label="价格"></el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          layout="total, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
        <el-button @click="isShow = false">取 消</el-button>
        <el-button type="primary" @click="getGoodsList(scope)">确定</el-button>
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
        price: 40
      }, {
        id: 2,
        name: '鸡腿',
        stock: 20,
        price: 60
      }, {
        id: 31,
        name: '天津麻花',
        stock: 20,
        price: 80
      }, {
        id: 15,
        name: '煎饼',
        stock: 20,
        price: 50
      }, {
        id: 15,
        name: '煎饼',
        stock: 20,
        price: 50
      }, {
        id: 15,
        name: '煎饼',
        stock: 20,
        price: 50
      }, {
        id: 15,
        name: '煎饼',
        stock: 20,
        price: 50
      }, {
        id: 15,
        name: '煎饼',
        stock: 20,
        price: 50
      }, {
        id: 15,
        name: '煎饼',
        stock: 20,
        price: 50
      }, {
        id: 15,
        name: '煎饼',
        stock: 20,
        price: 50
      }, {
        id: 15,
        name: '煎饼',
        stock: 20,
        price: 50
      }, {
        id: 15,
        name: '煎饼',
        stock: 20,
        price: 50
      }, {
        id: 15,
        name: '煎饼',
        stock: 20,
        price: 50
      }],
      currentData: [],
      currentPage: 1,
      total: 0
    }
  },
  created () {
    let temp = this.goodsList.concat([])
    this.total = temp.length
    this.currentData = temp.splice(0, 9)
  },
  methods: {
    getGoodsList () {
    },
    selectGoods (row) {
      console.log(row)
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
