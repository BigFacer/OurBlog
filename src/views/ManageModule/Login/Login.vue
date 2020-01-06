<template>
    <div id="login-div">
            <div class="login">
              <div class="title-div"><span class="title">welcome</span></div>
              <div class="name-div">
                <p class=" name"><i class="el-icon-user-solid el-icon"></i><input class="name-input" type="text" v-model="username" ></p>
                <p class="bottom-line"></p>
                <p class=" name"><i class="el-icon-key el-icon"></i><input class="name-input" type="password" v-model="passworld"></p>
                <p class="bottom-fline "></p>
              </div>
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
