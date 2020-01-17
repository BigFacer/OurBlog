<template>
  <div class="guest-book-div">
    <el-row class="el-row-div">
      <el-col :span="6" class="el-col-div">
        <el-col :span="6" class="el-col-text">昵称</el-col>
        <el-col :span="3">&nbsp;&nbsp;</el-col>
        <el-col :span="15"><el-input v-model="GuestBookArray.userName"></el-input></el-col>
      </el-col>
      <el-col :span="6" class="el-col-div">
        <el-col :span="6" class="el-col-text">时间</el-col>
        <el-col :span="3">&nbsp;&nbsp;</el-col>
        <el-col :span="15">
          <el-date-picker
            v-model="GuestBookArray.guestDate"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-col>
      </el-col>
      <el-col :span="6" class="el-col-div">
        <el-col :span="6" class="el-col-text">审核状态</el-col>
        <el-col :span="3">&nbsp;&nbsp;</el-col>
        <el-col :span="15"><el-input v-model="GuestBookArray.auditStatus"></el-input></el-col>
      </el-col>
    </el-row>
    <el-row class="el-row-div">
       <el-col :span="12" class="handle-nav">
         <el-col :span="8">
            <i class="el-icon-delete-solid"></i>
             <span>删除</span>
         </el-col>
         <el-col :span="8">
           <i class="el-icon-search"></i>
           <span>查询</span>
         </el-col>
       </el-col>
    </el-row>
    <el-row>
      <el-col :span="21" class="el-col-table">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          background-color:="#e8ebf0"
          style="width: 100%"
          max-height="300"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            label="日期"
            width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            show-overflow-tooltip>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row class="el-col-page">
      <el-col :span="20"></el-col>
      <el-pagination
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </el-row>
  </div>

</template>
<style type="text/css" scoped>
  .guest-book-div{
    /*color: #ffffff;*/
    padding-left: 6rem;
  }
  .el-row-div{
    height: 5rem;
    line-height: 5rem;
    margin-bottom: 2rem;
    font-size: 1.3rem;
  }
  .el-col-div{
    margin-right: 7rem;
    margin-bottom: 2rem;
  }
  .handle-nav{
    float: right;
    padding-left: 23rem;
    cursor: pointer;
  }
  .el-input__inner{
    height: 3rem;
  }
  .el-col-table{
    margin-left: 1rem;
  }
  .el-col-page{
    text-align: left;
    margin-left: 1rem;
    padding-top: 0;
  }
  .el-pagination{
    padding: 0;
  }
  .el-table th, .el-table tr{
    background-color: #e8ebf0;
  }
 .el-col-table .el-table td, .el-table th.is-leaf{
    border-bottom:1px solid #ced1d6;
  }

  .el-date-editor.el-input, .el-date-editor.el-input__inner{
    width: 100%;
  }
</style>
<script>
export default {
  name: 'GuestBook',
  data () {
    return {
      GuestBookArray: {},
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      multipleSelection: []
    }
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    }
  }
}
</script>
