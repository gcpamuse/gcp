<template>
  <div class="app">
      <div data-role="page" data-dom-cache="true"  style="background-color:#fff;"> 
        <div data-role="main"> 
            <div class="superior-top fix" :style="bgImg"> 
                <div class="pic"><img class="avatar" :src="user.portrait" alt=""/></div><!--../img/default_middle.png--> 
                <div class="superior-main"> 
                    <h2>{{user.name}}</h2> 
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
                            <ary :id="id"></ary>
                            
                            <p class="tip">订阅该导师后，即可查看该导师的交易记录</p> 
                            <h5 class="numone">历史交易记录</h5> 
                            <div class="tradingRecord-state" v-if="islogin"> 
                                <a class="dingyue" @click="login">登 录</a>
                                <span class="fl">后订阅该导师可查看全部交易记录</span>
                            </div>  
                            <div v-else-if="subscribeStatus" class="lishi" v-for="item in tradeRecords" :key="item.id">
                                <div>{{item.contract}}</div>
                                <div>{{item.tradeAt}}</div>
                                <div>{{item.volume}}</div>
                                <div>{{item.price}}</div>
                            </div> 
                            <div class="tradingRecord-state" v-else> 
                                <a class="dingyue" @click="toSubscribe">订 阅</a>
                                <span class="fl">后可查看全部交易记录</span>
                            </div>
                            
                            <transaction v-if="subscribeStatus" :id="id"></transaction>
                        </div> 
                    </van-tab>
                    <van-tab title="净值分析" name="b">
                        <div class="superior-con">
                            <netWorth :id="id"></netWorth>
                            <h5 class="numone">出入金</h5> 
                            <div class="jy_crj"> 
                                <div>出入金</div> 
                                <div>金额</div> 
                                <div>日期<font color="red">(*半年内)</font></div> 
                            </div> 
                            <inoutMoney :id="id"></inoutMoney>
                        </div>
                    </van-tab>
                    <van-tab title="实时持仓" name="c">
                        <div class="tradingRecord-state" v-if="islogin"> 
                            <a class="dingyue" @click="login">登 录</a>
                            <span class="fl">后订阅该导师可查看全部交易记录</span>
                        </div>
                        <holdPositions v-else-if="subscribeStatus" :id="id"></holdPositions>
                        <div class="tradingRecord-state" v-else> 
                            <a class="dingyue" @click="toSubscribe">订 阅</a>
                            <span class="fl">后可查看全部交易记录</span>
                        </div>
                    </van-tab>
                    <van-tab title="当日成交" name="d">
                        <div class="tradingRecord-state" v-if="islogin"> 
                            <a class="dingyue" @click="login">登 录</a>
                            <span class="fl">后订阅该导师可查看全部交易记录</span>
                        </div>
                        <transaction v-else-if="subscribeStatus" :id="id"></transaction>
                        <div class="tradingRecord-state" v-else> 
                            <a class="dingyue" @click="toSubscribe">订 阅</a>
                            <span class="fl">后可查看全部交易记录</span>
                        </div>
                    </van-tab>
                </van-tabs>
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
            id:this.$route.params.id,
            islogin:false,
            data:{},
            tradeRecords:[],
            subscribeStatus:"",
            user:{}
        }
    },
    mounted(){
        this.todenglu();
        this.initData();
        this.chicang();
        this.drchengjiao();
    },
    methods:{
        initData(){
            var params = { 
                id: this.id,
            };
            this.$axios.post('/futures/info',params).then(res=>{
                console.log(res.data.data)
                this.data = res.data.data;
                this.tradeRecords = data.tradeRecords;
                this.subscribeStatus = data.subscribeStatus;
                this.user = data.user;
                console.log(this.data.newDate+".......")
            })
            .catch( error=>{
        　　　　console.log(error);
        　　});
        console.log("++++++||||||||"+this.id)
        },
        guanZhu(){
            var params = { 
                isFollow: true,
                followId: this.id
            };
            this.$axios.post('order/subscribe',params).then((res) => {
                
            });
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
            // this.$router.push({name: 'wechatPay',params: { id: 1}})
            this.$router.push({name: 'zhifu'})
        },
        toSubscribe(){
            this.$router.push({name: 'zhifu'})
        },
        todenglu(){
            let token = localStorage.getItem('Authorization');
            if(token === null || token === ''){
                this.islogin = true
            }
        },
        login(){
            this.$router.push({name: 'login'})
        },
        chicang(){
            var params = { 
                id: this.id,
            };
            this.$axios.post('/futures/position',params).then(res=>{
                console.log(res)
            })
            .catch( error=>{
        　　　　console.log(error);
        　　});
        },
        drchengjiao(){
            var params = { 
                id: this.id,
            };
            this.$axios.post('/futures/trade',params).then(res=>{
                console.log(res)
            })
            .catch( error=>{
        　　　　console.log(error);
        　　});
        },
    },
    components:{
        ary,
        netWorth,
        transaction,
        holdPositions,
        inoutMoney,
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
                    /*! autoprefixer: off */
                    -webkit-box-orient: vertical;
                    /* autoprefixer: on */
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
            .lishi{
                display: flex;
                div{
                    width: 25%;
                }
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
            //241
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
    //279
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