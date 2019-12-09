<template>
 <div class="pay-wrap" id="orderParam"> 
    <div class="pay-top">您当前要订阅<span>平湖习剑</span>导师</div> 
    <div class="pay-con"> 
        <h3 id="subTime">订阅期： 2019年09月27日-2020年09月26日</h3> 
        <h3>您可以通过订阅导师，看到导师实时持仓和实时交易，从而学习导师策略</h3> 
        <van-radio-group v-model="radio1" class="demo-radio-group">
            <div class="gender-set"><van-radio name="400" value='400'><em>400</em>元/周</van-radio></div>
            <div class="gender-set"><van-radio name="600" value='600'><em>1000</em>元/月</van-radio></div>
            <div class="gender-set"><van-radio name="2800" value='2800'><em>2800</em>元/季</van-radio></div>
            <div class="gender-set"><van-radio name="6666" value='6666'><em>6666</em>元/年</van-radio></div>
        </van-radio-group>
        <h3>您还应支付：<span><em id="totalPay">{{radio1}}</em>元</span></h3> 
        <van-radio-group class="demo-radio-group">
            <div class="gender-set"><van-checkbox v-model="checkboxShape" shape="square">接受并同意《<em style="color:#38c;font-size: 12px;">跟操盘平台订阅用户服务协议</em>》</van-checkbox></div>
        </van-radio-group>
        <van-button size="large" class="wechatbtn" @click="weChatPayment">微信支付</van-button>
        <van-button size="large" class="wechatbtn1" @click="toChatPayment">
           去分享 当月每邀请5位好友注册可免费订阅一周
        </van-button>
        <div class="newtequan"> 
            <div class="newtequan_t"><span>会员特权</span></div> 
            <div class="newtequan_b"> 
                <div class="newtequan_b1"> 
                    <p>实时信号</p> 
                    <h3>接收导师完整、实时、实盘的交易信号提醒</h3> 
                </div> 
                <div class="newtequan_b2"> 
                    <p>实时持仓</p> 
                    <h3>实时、实盘的导师持仓查询</h3> 
                </div> 
                <div class="newtequan_b3"> 
                    <p>实时解盘</p> 
                    <h3>随时咨询，了解导师的操作动机</h3> 
                </div> 
                <div class="newtequan_b4"> 
                    <p>成为对冲基金经理</p> 
                    <h3>学习导师的方法，成为对冲基金经理</h3> 
                </div> 
            </div> 
        </div>
    </div> 
</div> 
	
</template>

<script>

export default {
    data(){
        return{
            radio1: '400',
            checkboxShape: true,
            gender: '',
            id:this.$route.params.id
        }
    },
    methods:{
        weChatPayment(){
            if(!this.checkboxShape){
                // alert('您未阅读并同意私募投资网协议');
                this.$toast('您未阅读并同意私募投资网协议');
            }else{
                
            }
        },
        toChatPayment(){
            this.$router.push({name: 'prizes'})
        }
    }
}
</script>

<style lang="less" scoped="scoped">
.pay-top{ 
    text-align: center; 
    background-color: #F7F7F7; 
    color: #666; 
    font-size:14px; 
    line-height:36px; 
}
.pay-top span{ 
    padding: 0 .25rem; 
    color: #f24848; 
    font-size: 15px; 
}
.pay-con{ 
    padding:10px; 
    color: #666; 
    font-size: 14px; 
}
.pay-con h3{ 
    margin-top: 12px;
    line-height: 1.5;
    font-size: 12px;
}
.pay-con h3 em{ 
    padding: 0 .25rem; 
    color: #f24848; 
    font-weight: bold; 

}
.pay-con em{
    font-style:normal
}
.gender-set{
    background-color: #f6f6f6;
    border-color: #ddd;
    padding: 8px 10px;
    border-width: 1px;
    border-style: solid;
    border-radius: 5px;
    margin: 8px 0;
}
.gender-set em{
    padding: 0 .5rem;
    color: #f24848;
    font-size: 1rem;
    font-weight: bold;
}
.wechatbtn{
    width: 100%;
    height: 45px;
    line-height: 45px;
    background-color:#f24848;
    border-radius:5px;
    color: #fff;
    margin-top: 20px;
}
.wechatbtn1{
    width: 100%;
    height: 45px;
    line-height: 45px;
    background-color:rgb(64, 146, 64);
    border-radius:5px;
    color: #fff;
    font-size: 14px;
    margin-top: 20px;
}
.newtequan{
    margin-top:10px;
}
.newtequan_t{    
    border-bottom: solid 1px #ddd;
    padding:4px 0;
}
.newtequan_t span{
    border-bottom:solid 2px red;
    padding:2px;
    color:#000;
}
.newtequan_b{
    margin-top:10px;
}
.newtequan_b>div{
    padding-left:50px;
    margin-top:5px;
}
.newtequan_b>div p{
    font-weight:bold;
    color:#000;
}
.newtequan_b>div h3{
    margin-top:0;
}
.newtequan_b1{
    background: url("../img/zaiying-bookPower-icon.png") 3px 7px no-repeat;
}
.newtequan_b2{
    background: url("../img/zaiying-bookPower-icon.png") 0px -87px no-repeat;
}
.newtequan_b3{
    background: url("../img/zaiying-bookPower-icon.png") 5px -40px no-repeat;
}
.newtequan_b4{
    background: url("../img/zaiying-bookPower-icon.png") 0px -138px no-repeat;
}

</style>
