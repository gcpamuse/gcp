<template>
 <div class="nopageGroup" style="display:block;margin-bottom: -50px;"> 
    <div id="dpage-invite" class="dpage" style="display:block;"> 
        <div class="content"> 
            <div class="banner"> 
                <img src="../img/banner2.png" alt="跟操盘"> 
                <div class="banner-text">分享跟操盘首页或者任意导师详情页，用户通过链接进入即算您的客户，每次消费您都可获100元奖励</div> 
            </div> 
            <div class="list-block icon-content"> 
                <div class="qr-block disblock"> 
                    <img src="../img/qcode.png" alt="跟操盘分享"> 
                </div> 
                <div class="invite-code j-havecode">http://daoshi.simutz.com/share/83564</div> 
                <div class="invite-ps">长按复制您的专属邀请链接，分享给您的朋友获得更多奖励</div> 
                <div class="invite-spread" onClick="window.open('');">推广建议</div> 
                <div class="item-content invite-mine"> 
                    <div class="item-inner"> 
                        <div class="item-title mine-left">我的账户:<span class="mine-money">0.00</span>元</div>
                        <div class="mine-right j-rule_click" @click="onClickAlert">提现</div> 
                    </div> 
                </div> 
                <div class="invite-lists"> 
                    <div class="lists-box"> 
                        <div class="lists-title">您已获得<span class="lists-money">0</span>元奖励</div> 
                        <div class="lists-content">  </div> 
                    </div> 
                </div> 
            </div> 
        </div>
        <van-dialog v-model="show" title="" @confirm='determine'>
            <div class="m-plate_sure_layer"> 
                <div class="close_box j-close j-sure_close" @click="closeBox"> 
                    <img class='close_img' src="../img/xx-1.png" alt="跟操盘提现"> 
                </div> 
                <div class="list-block item f-cb cash-box"> 
                    <div class="item-content cash-text"> 
                        <div class="item-title cash-title">金额：</div> 
                        <input type="text" v-model="amount" id="withdraw_amount" class="cash-input" placeholder="预提金额"> 
                        <span class="cash-end">元</span> 
                    </div> 
                    <div class="item-content cash-text"> 
                        <div class="item-title cash-title">支付宝：</div> 
                        <input type="text" v-model="account" id="withdraw_account" class="cash-input" placeholder="支付宝账号"> 
                        <span class="cash-end"></span> 
                    </div> 
                    <div class="item-content cash-text"> 
                        <div class="item-title cash-title">姓名：</div> 
                        <input type="text" v-model="name" id="withdraw_name" class="cash-input" placeholder="真实姓名"> 
                        <span class="cash-end"></span> 
                    </div> 
                    <div class="item-content cash-text"> 
                        <div class="item-title cash-title">手机号：</div> 
                        <input type="text" v-model="mobile" id="withdraw_mobile" class="cash-input" placeholder="手机号"> 
                        <span class="cash-end"></span> 
                    </div> 
                </div> 
                
            </div>
            
        </van-dialog>
    </div> 
    
</div> 
	
</template>

<script>


export default {
    

    data(){
        return{
            show:false,
            amount:'',
            account:'',
            name:'',
            mobile:'',
        }
    },
    methods:{
        onClickAlert(){
            this.show = true
        },
        determine(){
            
        },
        closeBox(){
            this.show = false
        }
    }
}
</script>

<style lang="less" scoped="scoped">
.nopageGroup .banner img {
	width: 100%;
	display: block
}
.nopageGroup .banner .banner-text {
	font-size: 12.5px;
    color: #2b2728;
	text-align: center;
	padding: 8.5px 13px 0 13px;
    line-height: 1.8
}
#dpage-invite .content .icon-content .qr-block {
	padding: 15px 0;
}
#dpage-invite .content .icon-content .qr-block img {
	display: block;
	margin: 0 auto;
	width: 163px;
	height: 163px;
}
#dpage-invite .content .invite-code {
	display: block;
	margin: 0 auto;
	text-align: center;
	background: #f3ce97;
	width: 265px;
	height: 44px;
	line-height: 44px;
	font-size: 13px;
	color: #b18b52
}
#dpage-invite .content .invite-ps {
	font-size: 10px;
	color: #9d9d9d;
	text-align: center;
	margin: 13px 9px;
}
#dpage-invite .content .invite-spread {
	color: #fff;
	text-align: center;
	font-size: 13px;
	margin: 0 auto;
	width: 90px;
	background-color: #f05724;
	height: 44px;
	line-height: 44px;
	border-radius: 9px;
}
#dpage-invite .content .invite-mine {
	margin: 13px 0;
    background: #140a09;
    padding: 0 35px;
    font-size: 15px;
    overflow: hidden;
    height: 65px;
    line-height: 65px;
}
#dpage-invite .content .invite-mine .item-inner {
	padding: 0
}
#dpage-invite .content .invite-mine .item-inner:after {
	display: none
}
#dpage-invite .content .invite-mine .item-inner::after {
	display: none
}
#dpage-invite .content .invite-mine .item-inner .mine-left {
    color: #f3ce97;
    float: left;
}
#dpage-invite .content .invite-mine .item-inner .mine-left .mine-money {
	color: #f24e24
}
#dpage-invite .content .invite-mine .item-inner .mine-right {
	text-decoration: underline;
    color: #0782ff;
    float: right;
}
#dpage-invite .content .invite-lists {
	background: #140a09
}
#dpage-invite .content .invite-lists .lists-box {
	margin: 0 15px;
}
#dpage-invite .content .invite-lists .lists-box .lists-title {
	text-align: center;
	font-size: 15px;
	color: #f3ce97;
	border-bottom: 1px #f3ce97 dashed;
	padding: 12px 0;
}
#dpage-invite .content .invite-lists .lists-box .lists-title .lists-money {
	color: #f24e24
}
#dpage-invite .content .invite-lists .lists-box .lists-content {
	padding: 15px 0;
	font-size: 13px;
	color: #969696
}
.m-plate_sure_layer{
    padding: 20px 10px 10px;
}
.item-content.cash-text{
    display: flex;
    min-height:2.2rem;
    box-sizing: border-box;
    width: 240px;
    justify-content: space-between;
    align-items: center;
    margin:8px auto;
}
.m-plate_sure_layer .close_box {
	position: absolute;
    color: #009cff;
    right: 0;
    top: 5px;
    width: 35px;
    height: 35px;
    line-height: 40px;
}
#dpage-invite  .cash-title {
	width: 60px;
	text-align: right;
	font-size: 14px;
}
#dpage-invite  .cash-input {
	width: 120px;
	height: 30px;
	border: 1px solid #999;
    border-radius: 5px;
    padding: 0 0 0 .25rem;
}
#dpage-invite  .cash-end {
	width: 20px;
}

</style>
