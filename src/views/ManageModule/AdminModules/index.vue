<template>
 <div class="admin-div">
    <el-row class="admin-hand-div">
      <el-col :span="4" class="admin-hand-left-div">&nbsp;</el-col>
       <el-col :span="2" class="admin-hand admin-exit"><span @click="exit">退出</span></el-col>
       <el-col :span="2" class="admin-hand ">GRH</el-col>
    </el-row>
    <el-row class="admin-nav-div">
       <el-col :span="4" class="admin-item-div">
         <el-row class="admin-nav">
            <el-col :span="24">
              <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                text-color="#fff"
                background-color="#2f343b"
                active-text-color="#ffd04b">
                <router-link to="/Admin/Articles">
                  <el-menu-item index="1">
                      <i class="el-icon-menu"></i>
                      <span class="admin-nav-item">发布文章</span>
                  </el-menu-item>
                </router-link>
                <router-link to="/Admin/GuestBook">
                  <el-menu-item index="2" >
                      <i class="el-icon-document"></i>
                      <span class="admin-nav-item">留言板审核</span>
                  </el-menu-item>
                </router-link>
                <router-link to="">
                  <el-menu-item index="3">
                      <i class="el-icon-setting"></i>
                      <span class="admin-nav-item">简历编写</span>
                  </el-menu-item>
                </router-link>
                <router-link to="">
                  <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span class="admin-nav-item">页面风格修改</span>
                  </el-menu-item>
                </router-link>
              </el-menu>
            </el-col>
        </el-row>
       </el-col>
       <el-col :span="20" class="router-div">
         <router-view></router-view>
       </el-col>
    </el-row>

 </div>
</template>
<style>
  a{
    text-decoration: none;
  }
  p{
    margin: 0;
  }
  .admin-div{
    width: 100%;
    height: 100%;
    /*background-color: black;*/
  }
  .admin-hand-left-div{
    background-color: #2f343b;
    background: url("../../../assets/logo/e86e6b3f498ca819c2616d686d033e3a.jpg") no-repeat 100% ;
    background-size: auto;
    height: 100%;
  }
  .admin-hand-div{
    position: fixed;
    top: 0;
    height: 3rem;
    width: 100%;
    background-color: #000;
    color: #fff;
    z-index:999;
  }
  .admin-hand{
    float: right;
    text-align: right;
    padding-right: 2rem;
    padding-top: 1rem;
    /*color: #ffffff;*/
    height: 3rem;
    font-size: 1.2rem;
    cursor: pointer;
    z-index:999;
  }
  .admin-exit{
   padding-top: 0.7rem;
    padding-right: 6rem;
  }
  .el-menu-item{
    text-align: left;
  }
  .admin-nav-div{
    height: 100%;
    padding-top: 3rem;
  }
  .admin-item-div{
    height: 100%;
    padding-top: 2rem;
    background-color: #2f343b;
  }
  .admin-nav{
    height: 100%;
    /*background-color: black;*/
  }
  .admin-nav-item{
    color: #7f7f7f;
  }
  .el-menu-item i{
    color: #7f7f7f;
  }
  .el-menu{
    border-right: 0;
  }
  .is-active span{
    color: rgb(255, 208, 75);
  }
  .router-div{
    height: 100%;
    padding-top: 3rem;
    background-color: #e8ebf0;
  }
  .el-input__inner{
    height: 3rem;
    background-color: rgba(255,255,255,0.5);
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
    },
    exit () {
      this.$router.push('/')
    }
  }
}
</script>
