<template>
<div class="myjoin registerwarp"> 
    <div style="padding-top: 20px;">
        <van-cell-group>
            <van-field
                v-model="imgcode"
                placeholder="图形验证码"
            >
            </van-field>
            <div style="margin-bottom:20px;">
                <img :src="IdentifyingCode" alt="点击刷新" @click="updateIdentifyingCode(true)">
                <span  @click="updateIdentifyingCode(true)">点击刷新图片</span>
            </div>
            
            <van-field
                v-model="phone"
                placeholder="手机号码"
            >
                <van-button slot="button" @click="sendSms" size="small" type="primary" style="background-color: #f24848;border: 1px solid #f24848;">获取短信验证码</van-button>
            </van-field>
            <van-field
                v-model="number"
                placeholder="请输入您收到的短信验证码"
            >
            </van-field>
            <van-field
                v-model="username"
                placeholder="用户名最多32个字符"
            >
            </van-field>
            <van-field
                v-model="password"
                type="password"
                placeholder="请输入密码"
            >
            </van-field>
        </van-cell-group> 
    </div>
    <van-radio-group class="demo-radio-group">
        <div class="gender-set"><van-checkbox v-model="checkboxShape" shape="square"> 我已阅读并同意《跟操盘平台订阅用户服务协议》</van-checkbox></div>
    </van-radio-group>
    <van-button size="large" class="btn login" @click="Register">注册</van-button>
    <router-link to="/login" style="color:#38c;font-size:15px;float: right;margin: 12px 0;">已有账号，直接登录</router-link>
   
</div> 
	
</template>

<script>

export default {
    data(){
        return{
            imgcode:'',
            phone:'',
            number:'',
            username:'',
            password:'',
            checkboxShape:'true',
            IdentifyingCode:'http://daoshi.simutz.com/vildateCode.shtml'
        }
    },
    methods:{
        updateIdentifyingCode(bRefresh){
            this.IdentifyingCode = "http://daoshi.simutz.com/vildateCode.shtml?" + Math.random() * 5;
        },
        sendSms(){
            var params = {
                phone:this.phone, 
                captcha:this.number
            };
            this.$axios.post('http://192.168.0.99:8080/', {params: params}).then( res=>{
                console.log(res)
            })
            .catch( error=>{
        　　　　console.log("出错喽："+error);
        　　});
        },
        Register(){
            var params = { 
                username:this.username,
                password:this.password,
                sms:this.number,
                phone:this.phone
            };
            this.$axios.post('http://192.168.0.99:8080/', {params: params}).then( res=>{
                console.log(res)
            })
            .catch( error=>{
        　　　　console.log("出错喽："+error);
        　　});
        }
    }
}
</script>

<style lang="less" scoped="scoped">
.myjoin{ 
    padding: 0 0.625rem; 
    font-size: 1rem;
    margin-bottom: -50px;
    min-height: 667px;
}
.myjoin img{ 
    vertical-align: middle;
}
.myjoin .van-cell{
    padding: 8px 16px;
    border: solid 1px #757575;
    color: #666;
    border-radius: 5px;
    margin-bottom: 20px;
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
.gender-set{
    background-color: #f6f6f6;
    border-color: #ddd;
    padding: 8px 10px;
    border-width: 1px;
    border-style: solid;
    border-radius: 5px;
    margin: 8px 0;
    font-size: 12px;
}
em{
    font-style: normal;
}
</style>
