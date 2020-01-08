<template>
 <div class="admin-div">
   <p class="admin-hand">头部</p>
   <el-col :span="4">
   <el-row class="admin-nav">
      <el-col :span="24">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#000"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title" >发布文章</span>
          </el-menu-item>
          <el-menu-item index="2" >
            <i class="el-icon-document"></i>
            <span slot="title">留言板审核</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">简历编写</span>
          </el-menu-item>
          <el-menu-item index="4">
            <router-link to="/admin/Articles">
            <i class="el-icon-setting"></i>
            <span slot="title">页面风格修改</span>
            </router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
  </el-row>
   </el-col>
   <el-col :span="20">
     <router-view></router-view>
   </el-col>

 </div>
</template>
<style>
  p{
    margin: 0;
  }
  .admin-div{
    width: 100%;
    height: 100%;
    background-color: black;
  }
  .admin-hand{
    height: 5rem;
    width: 100%;
    background-color: black;
  }
  .el-menu-item{
    text-align: left;
  }
  .admin-nav{
    height: 100%;
    background-color: black;
  }
  .el-menu{
    border-right: 0;
  }
</style>
<script>
export default {
  name: 'Admin',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
