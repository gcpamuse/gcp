<template>
<div class="myjoin password"> 
    <div style="padding-top: 20px;"> 
        <van-cell-group>
            <van-field
                v-model="phone"
                placeholder="手机号码"
            >
                <van-button @click="countDown" slot="button" size="small" type="primary" style="background-color: #f24848;border: 1px solid #f24848;">{{content}}</van-button>
            </van-field>
            <van-field
                v-model="number"
                placeholder="请输入您收到的短信验证码"
            >
            </van-field>
            <van-field
                v-model="password"
                placeholder="请输入新密码"
            >
            </van-field>
        </van-cell-group>
        
    </div> 
    <van-button size="large" class="btn login" @click="scanCode">确定</van-button>

   
</div> 
	
</template>

<script>
export default {
    data(){
        return{
            phone:'',
            number:'',
            password:'',
            content: '获取短信验证码',
            totalTime: 60,
            canClick: true
        }
    },
    methods:{
        countDown () {
            if(this.phone == ''){
                this.$toast('手机号不能为空！');
                return false;
            }else{
                if(!(/^1[34578]\d{9}$/.test(this.phone))){
                    this.$toast('请输入正确的手机号格式');
                    return false;
                }
            }
            if (!this.canClick) return
            this.canClick = false
            this.content = this.totalTime + 'S后重新发送'
            let clock = window.setInterval(() => {
                this.totalTime--
                this.content = this.totalTime + 'S后重新发送'
                if (this.totalTime < 0) {
                    window.clearInterval(clock)
                    this.content = '重新发送验证码'
                    this.totalTime = 10
                    this.canClick = true
                }
            },1000)
            var params = {
                phone:this.phone, 
                captcha:this.number
            };
            this.$axios.post('http://192.168.0.99:8080/',params).then( res=>{
                console.log(res)
            })
            .catch( error=>{
        　　　　console.log("出错喽："+error);
        　　});
        },
        scanCode(){
            if(this.phone == ''){
                this.$toast('手机号不能为空！');
                return false;
            }else{
                if(!(/^1[34578]\d{9}$/.test(this.phone))){
                    this.$toast('请输入正确的手机号格式');
                    return false;
                }
            }
            if(this.number == ''){
                this.$toast('请输入手机验证码！');
                return false;
            }
            if(this.password == ''){
                this.$toast('新密码不能为空！');
                return false;
            }
            var params = { 
                phone:this.phone,
                sms:this.number,
                password:this.password
            };
            this.$axios.post('http://192.168.0.99:8080/auth/forgetPassword',params).then( res=>{
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
</style>
