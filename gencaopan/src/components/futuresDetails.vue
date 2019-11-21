<template>
  <div class="app">
      <div data-role="page" data-dom-cache="true"  style="background-color:#fff;"> 
        <div data-role="main"> 
            <div class="superior-top fix" :style="bgImg"> 
                <div class="pic" @click="toReward"><img class="avatar" src="../img/default_middle.png" alt="naihaha"/></div> 
                <div class="superior-main"> 
                    <h2>naihaha</h2> 
                    <div class="mychart_d"> 
                        <p class="mychart_p"> 
                            <span class="mychart_span" style="padding-left:0;float:none;"> 坚持固定的体系是最难的，也是最简单的。 </span> 
                            <a class="mychart_a" href="#"></a> 
                        </p> 
                    </div> 
                </div>
                <div class="quxian">
                    <div class="book-btn" @click="guanZhu" v-show="guanzhu">+关注</div>
                    <div class="book-btn" @click="lookBiJi" v-show="biji">看笔记</div>
                </div> 
            </div> 
            <div class="superior-content">
                <van-tabs active="b" line-height='0' background='#f6f6f6'>
                    <van-tab title="交易概况" name="a">
                        <div class="superior-con">
                            <ary></ary>
                            
                            <p class="tip">订阅该导师后，即可查看该导师的交易记录</p> 
                            <h5 class="numone">历史交易记录</h5>    
                            <div class="tradingRecord-state"> 
                                <a class="dingyue" @click="toSubscribe">订 阅</a>
                                <span class="fl">后可查看全部交易记录</span>
                            </div>
                            <transaction></transaction>
                        </div> 
                    </van-tab>
                    <van-tab title="净值分析" name="b">
                        <div class="superior-con">
                            <netWorth></netWorth>
                            <h5 class="numone">出入金</h5> 
                            <div class="jy_crj"> 
                                <div>出入金</div> 
                                <div>金额</div> 
                                <div>日期<font color="red">(*半年内)</font></div> 
                            </div> 
                            <inoutMoney></inoutMoney>
                            <!-- <div class="jy_count" v-for="item in inoutList" :key="item.id">

                                <div>{{item.ocname}}</div> 
                                <div>{{item.money}}</div> 
                                <div>{{item.dateline}}</div> 
                            </div>  -->
                        </div>
                    </van-tab>
                    <van-tab title="实时持仓" name="c">
                        <div class="tradingRecord-state" v-show="false"> 
                            <a class="dingyue">登 录</a>
                            <span class="fl">后订阅该导师可查看全部交易记录</span>
                        </div>
                        <div class="tradingRecord-state"> 
                            <a class="dingyue" @click="toSubscribe">订 阅</a>
                            <span class="fl">后可查看全部交易记录</span>
                        </div>
                        <holdPositions></holdPositions>
                    </van-tab>
                    <van-tab title="当日成交" name="d">
                        <div class="tradingRecord-state" v-show="false"> 
                            <a class="dingyue">登 录</a>
                            <span class="fl">后订阅该导师可查看全部交易记录</span>
                        </div>
                        <div class="tradingRecord-state"> 
                            <a class="dingyue" @click="toSubscribe">订 阅</a>
                            <span class="fl">后可查看全部交易记录</span>
                        </div>
                        <transaction></transaction>
                    </van-tab>
                </van-tabs>
                <!-- <promise v-show="modePop"></promise> -->
            </div>
            <div class="tabbar"> 
                <div class="tab">
                    <div class="caopan" @click="toGuanZhu">操盘学习</div>
                    <div class="fuzhi" @click="toRenZheng">立即复制</div>
                </div> 
            </div>
        </div> 
    </div>
    
  </div>
</template>

<script>
import ary from './ary';
import netWorth from './netWorth'
import transaction from './transaction'
import holdPositions from './holdPositions'
import inoutMoney from './inoutMoney'
// import promise from './promise'
export default {
    data(){
        return{
            bgImg:{
                backgroundImage:"url("+require('../img/s_daoshibg2.jpg')+")",
                backgroundRepeat: "no-repeat",
                backgroundSize:'100% 100%'
            },
            guanzhu:true,
            biji:false,
            inoutList:[],
            modePop:false,
        }
    },
    methods:{
        toReward(){
            this.$router.push({name: 'reward'})
        },
        guanZhu(){
            this.guanzhu=false;
            this.biji=true;
        },
        lookBiJi(){
            this.$router.push({name: 'looknotes'})
        },
        toRenZheng(){
            this.$router.push({name: 'applyInvestor'})
        },
        toGuanZhu(){
            this.$router.push({name: 'wechatPay',params: { id: 1}})
        },
        toSubscribe(){
            this.$router.push({name: 'zhifu'})
            // this.modePop=true;
        }
    },
    components:{
        ary,
        netWorth,
        transaction,
        holdPositions,
        inoutMoney,
        // promise
    }
}
</script>

<style lang="less" scoped="scoped">
    .superior-top {
        padding: 10px 10px 15px;
        background-color: #fff;
        font-size: 0.750rem;
        border-bottom: solid 1px #f3f3f3;
        display: flex;
        .pic{
            width: 18%;
            .avatar{
                border-radius: 10px;
                width: 55px;
                height: 55px;
            }
        }
        .superior-main{
            width: 70%;
            h2{
                font-size: 14px;
                line-height: 22px;
                color: #fff;
            }
            .mychart_d{
                color: #CFB696;
                line-height: 18px;
                .mychart_p{
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    overflow: hidden;
                }
            }
        }
        .quxian{
            width: 12%;
            text-align: right;
            padding-top: 26px;
            .book-btn{
                text-align: center;
                background-color: #f24848;
                color: #fff;
                padding:5px 2px;
                border-radius: 5px;
                width: 40px;
            } 
        }
    }
    .van-tabs{
		/deep/ .van-tab--active{
			color: red;
		}
    }
    .superior-content{
        .superior-con{
            .numone{
                padding: 10px;
                color: #3333;
                border-bottom: 2px solid #eee;
                font-size: 15px;
            }
            .table-m1{
                width: 100%;
                text-align: center;
                font-size: 12px;
                color: #666;
                tr{
                    line-height: 25px;
                }
                .xuxian{
                    border-bottom: 1px dashed #eee;
                }
            }
            .tip{
                position: relative;
                margin: .750rem auto;
                width: 90%;
                text-shadow: none;
                font-weight: normal;
                background-color: #f90;
                color: #fff;
                text-align: center;
                font-size: .875rem;
                line-height: 2.2;
                border-radius: 5px;
            }
            .tip:after {
                position: absolute;
                bottom: -1.5rem;
                left: 50%;
                margin-left: -.750rem;
                content: "";
                width: 0;
                height: 0;
                border: solid 12px transparent;
                border-top: solid 12px #f90;
            }
            .tradingRecord-state{
                text-align: center;
                padding-top: 20px;
                margin-bottom: 50px;
                .dingyue{
                    display: inline-block;
                    border-radius: .5rem;
                    width: 6rem;
                    height: 2rem;
                    text-shadow: none;
                    line-height: 2rem;
                    text-align: center;
                    background-color: #f24848;
                    color: #fff; 
                }
                .fl{
                    font-size: 12px;
                    color: #333;
                }
            }
            .jy_crj,.jy_count{
                display: flex;
                font-size: 13px;
                text-align: center;
                border-bottom: 1px dashed #eee;
                div{
                    width: 33.33%;
                    padding: 10px 0;
                }
            }
            .jy_crj{
                font-weight: bold;
                border-bottom: 1px solid #eee;
            }
        }
    }
    
    .tradingRecord-state{
            text-align: center;
            padding-top: 20px;
            margin-bottom: 50px;
            .dingyue{
                display: inline-block;
                border-radius: .5rem;
                width: 6rem;
                height: 2rem;
                text-shadow: none;
                line-height: 2rem;
                text-align: center;
                background-color: #f24848;
                color: #fff; 
            }
            .fl{
                font-size: 12px;
                color: #333;
            }
        }
    
    .toast-mask {
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(46, 44, 44, 0.4);
        z-index: 10000;
        width: 100%;
        height: 100%;
    }
    .toast {
        position: fixed;
        top: 50%;
        left: 50%;
        z-index: 20000;
        transform: translate(-50%, -50%);
        width: 17.4375rem;
        background: #fff;
        border-radius: 0.3125rem;
        padding: 0.3125rem;
        box-shadow: 0 0 15px rgb(68, 67, 67);
        .toast-container {
            position: relative;
            width: 100%;
            height: 100%;
            padding: 8px 12px 12px;
            .gao{
                line-height: 35px;
            }
            input{
                border: 1px solid #ccc;
                width: 245px;
                padding:8px 5px;
                border-radius: 8px;
                box-shadow: 0 0 3px #b3b1b1 inset;
            }
            input:focus{
                box-shadow: 0 0 0 #b3b1b1 inset;
                box-shadow: 0 0 8px #38c;
            }
            .toast-cancel {
                background: #f24848;
                padding: 12px 5px;
                margin-top: 15px;
                margin-bottom: 5px;
                border-radius: 6px;
                color: #fff;
                width: 245px;
                text-align: center;
            }
        }
    }
    .tabbar{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        .tab{
            display: flex;
            text-align: center;
            width: 100%;
            background-color: #f6f6f6;
            border-top: 1px solid #dbd8d8;
            font-size: 14px;
            .caopan{
                width: 49.5%;
                line-height: 40px;
                border-right: 1px solid #dbd8d8;
            }
            .fuzhi{
                width: 50%;
                line-height: 40px;
                color: red;
            }
        }
    }
</style>