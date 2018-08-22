<template>
  <div class="fist">
    <div>
         <div class="easyD">
            <h2>
                Welcome To Mydemo
            </h2>
         </div>
        <div class="logindiv">
            <div class="msgdiv">
              <label for="username">用户名：</label>
              <div id="username">
               <el-input v-model="username" type="text"  placeholder="输入账号密码即可注册"></el-input>
              </div>
            </div>
            <div class="msgdiv">
              <label for="passward"> 密  码 ：</label>
              <div id="passward">
               <el-input  v-model="passward" type="password"  placeholder="注册成功后可以登录"></el-input>
              </div>
            </div>
          <el-button round  @click="enrollB()">注册</el-button>
          <el-button round  @click="enter()">登录</el-button>
        </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'HelloWorld',
    components: {

    },
    data () {
      return {
        username:'',
        passward:''
      }
    },methods:{
      enrollB(){
        if(this.username==''||this.password==''){
            this.$message('账号或密码不能为空！');
            return;
        }
         sessionStorage.setItem('usn',this.username);
         sessionStorage.setItem('psw',this.passward);
            this.$message('注册成功！');
      },
      enter(){
          if(this.username==sessionStorage.getItem('usn')&&this.passward==sessionStorage.getItem('psw')){

              this.$router.push({path:'/Login'})
              return;
          }
             this.$message('用户不存在或输入信息错误！');
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
