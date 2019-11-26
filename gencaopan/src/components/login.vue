<template>
<div class="myjoin loginwarp"> 
    <div style="text-align:center;color:#ccc;"> 
        <img src="../img/heidi_logo.png" > 
        <p style="padding:10px 0 0 0 ;">汇聚操盘牛人&nbsp;带你账户翻红</p> 
    </div> 
    <van-cell-group>
        <van-field
            v-model="username"
            placeholder="手机号码或用户名"
        />
        <van-field
            v-model="password"
            type="password"
            placeholder="密码"
        />
    </van-cell-group>
    
    <van-button size="large" class="btn login" @click="login">登录</van-button>
    <van-button size="large" class="btn reg" @click="scanCode">还没有账号，立即注册</van-button>
    <router-link to="/findPasswd" style="color:#999;font-size:15px;float: right;margin: 12px 0;"><span style="color:#38c;">忘记密码</span></router-link>
   
</div> 
	
</template>

<script>

export default {
    data(){
        return{
            username:'',
            password:''
        }
    },
    methods:{
        login(){
            if(this.username==""&&this.password==""){
                this.$toast('用户名或密码不能为空！')
            }else{
                var params = { 
                    username:this.username,
                    password:this.password
                };
                this.$axios.post('http://192.168.0.99:8080/auth/login',params).then( res=>{
                    console.log(res)
                //    this.$router.push({path:'/'})
                })
                .catch( error=>{
            　　　　console.log("出错喽："+error);
            　　});
            }
        },
        scanCode(){
            this.$router.push('/register')
        }
    }
}
</script>

<style lang="less" scoped="scoped">
.myjoin{ 
    padding: 0 0.625rem; 
    font-size: 1rem; 
    background-color: rgb(241, 241, 241);
    margin-bottom: -50px;
    min-height: 667px;
}
.myjoin img{ 
    margin-top: 1.25rem; 
    height: 3.750rem;
}
.myjoin .van-cell{
    padding: 8px 16px;
    border: solid 1px #757575;
    color: #666;
    border-radius: 5px;
    margin-top: 20px;
}
.myjoin .btn{
    width: 100%;
    height: 45px;
    line-height: 41px;
    background-color:#f24848;
    border-radius:5px;
    color: #fff;
    margin-top: 20px;
    font-weight: 700;
}
.myjoin .btn.reg{
    background: #fff;
    border:2px solid #f24848;
    color: #666;
}
.van-cell-group {
    background-color: #f1f1f1;
}
</style>
