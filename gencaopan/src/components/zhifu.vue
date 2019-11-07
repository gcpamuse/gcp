<template>
 <div class="pay-wrap" id="orderParam"> 
    <div class="pay-top">您当前要订阅<span>平湖习剑</span>导师</div> 
    <div class="pay-con"> 
        <h3 id="subTime">订阅期： 2019年09月27日-2020年09月26日</h3> 
        <h3>您可以通过订阅导师，看到导师实时持仓和实时交易，从而学习导师策略</h3> 
        
        <div> 
            
            <!-- <input type="radio" name="gender" id="week" value="week"> -->
            <van-radio-group v-model="radio1" class="demo-radio-group">
                <div class="gender-set"><van-radio name="1"><em>400</em>元/周</van-radio></div>
                <div class="gender-set"><van-radio name="2"><em>1000</em>元/月</van-radio></div>
                <div class="gender-set"><van-radio name="3"><em>2800</em>元/季</van-radio></div>
                <div class="gender-set"><van-radio name="4"><em>6666</em>元/年</van-radio></div>
            </van-radio-group>
        </div>   
        <h3>您还应支付：<span><em id="totalPay">6666</em>元</span></h3> 
        <!-- <div class="other-payway"> 
            <input type="hidden" name="paytype" value="2"> 
            <div class="checkbox-set mt10"> 
                <label for='spxcAgree'>
                    接受并同意 《
                    <a>跟操盘平台订阅用户服务协议</a>》
                </label>
                <input type="checkbox" name="favcolor" id="spxcAgree" value="spxcAgree"  checked="checked">
            </div> 
            <button class="submit mt20 success" onclick="doPay();">微信支付</button> 
        </div> 
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
        </div>  -->
    </div> 
</div> 
	
</template>

<script>

export default {
    data(){
        return{
            radio1: '1',
        }
    },
    methods:{
         onChange(event) {
            this.setData({
            radio: event.detail
            });
        },

        onClick(event) {
            const { name } = event.currentTarget.dataset;
            this.setData({
            radio: name
            });
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
.pay-con .submit,
.pay-con .submit:focus{ 
    background-color: #f24848; 
    color: #fff; 
    text-shadow:none; 
}
.pay-con .pay,
.pay-con .pay:focus{ 
    background-color: #28A200; 
    color: #fff; 
    text-shadow:none; 
}
.other-payway{ 
    margin-top:10px;
}
.other-payway h2.tit{ 
    color: #333; 
    text-shadow:none; 
    font-weight: normal; 
    font-size: 14px; 
    line-height: 1.5rem; 
    border-bottom: solid 1px #ddd; 
}
.other-payway h2.tit span{ 
    padding: 4px; 
    border-bottom: solid 2px #28A200; 
}
fieldset.radio-img{ 
    margin: 15px 0; 
    padding: 0; 
}
fieldset.radio-img.ui-controlgroup-vertical .ui-controlgroup-controls .ui-btn{ 
    border-bottom-width: 1px; 
}
fieldset.radio-img label{ 
    width: 30%; 
} 
fieldset.radio-img img{ 
    width: 160px; 
    height: 50px; 
}
.checkbox-set label{ 
    position: relative; 
    padding: .7em 3em; 
    line-height: 18px; 
    background: #f6f6f6; 
    border: solid 1px #ddd; 
    border-radius: .3125em; 
    font-size: 12px; 
    color: #666! important; 
    font-weight: normal; 
}
.checkbox-set label input{ 
    position: absolute; 
    top: 17px; left: 7px; 
    display: block; 
    margin: -9px 2px 0 2px; 
    width: 18px; 
    height: 18px; 
    border-radius: .1875em; 
}
.checkbox-set label input.off{
    background-color: #666; 
    background-color: rgb(0,0,0,.3); 
    filter:Alpha(Opacity=20); 
    opacity: .2; 
}
.checkbox-set label input.on{ 
    background: url("") center center no-repeat; 
    background-color: #38c; 
    color: #fff; 
}

.checkbox-set label a{ 
    font-weight: normal; 
}

</style>
