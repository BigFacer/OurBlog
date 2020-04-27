<template>
    <div id="login-div">
            <div class="login">
              <div class="title-div"><span class="title">welcome</span></div>
              <el-row class="name-div">
                <el-row class=" name">
                  <el-col :span="2">
                    <i class="el-icon-user-solid el-icon"></i>
                  </el-col>
                  <el-col :span="22">
                    <input class="name-input" type="text" v-model="username" >
                  </el-col>
                </el-row>
                <p class="bottom-line"></p>
                <el-row class=" name">
                  <el-col :span="2">
                    <i class="el-icon-key el-icon"></i>
                  </el-col>
                  <el-col :span="22">
                    <input class="name-input" type="password" v-model="passworld">
                  </el-col>
                </el-row>
                <p class="bottom-fline "></p>
              </el-row>
              <div class="login-btn-div" @click="Login">
                 <span>  <i class="el-icon-right"></i> </span>
              </div>
            </div>
    </div>
</template>
<style>
 @import "../../../assets/css/login.css";
</style>
<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      passworld: ''
    }
  },
  methods: {
    Login () {
      this.$router.push('/Admin')
    }
  }
}
</script>
