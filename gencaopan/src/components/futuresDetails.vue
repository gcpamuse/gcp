<template>
  <div>
      <div data-role="page" data-dom-cache="true"  style="background-color:#fff;"> 
        <div data-role="main"> 
            <div class="superior-top fix" :style="bgImg"> 
                <div class="pic"><img class="avatar" src="../img/default_middle.png" alt="naihaha"/></div> 
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
                    <a class="book-btn charge" href="#curve" data-rel="popup" data-position-to="window" data-transition="fade">+关注</a>
                </div> 
            </div> 
            <div class="toast-mask" v-show="toast_control" @click="toast_control = false"></div>
            <ul class="superior-nav fix"> 
                <li class="active" @click="toJiaoYi" style="width:24.5%;border-right: 1px solid #eee;">交易概况</li> 
                <li @click="toJIngZhi" style="width:24.5%;border-right: 1px solid #eee;">净值分析</li> 
                <li style="width:24.5%;border-right: 1px solid #eee;">实时持仓</li> 
                <li style="width:24.5%">当日成交</li> 
            </ul>
            <div class="superior-content"> 
                <div class="superior-con" v-if="xianshi">
                    <h5 class="numone">账户概述</h5> 
                    <table class="table-m1" cellspacing="0">
                        <tbody>
                            <tr>
                                <td>初始权益</td>
                                <td>0元</td>
                                <td>起始日期</td>
                                <td>--</td>
                            </tr>
                            <tr class="xuxian">
                                <td>最新权益</td>
                                <td>0元</td>
                                <td>最新数据</td>
                                <td>--</td>
                            </tr>
                            <tr>
                                <td>累计净值</td>
                                <td>0元</td>
                                <td>累计手续费</td>
                                <td>0元</td>
                            </tr>
                            <tr class="xuxian">
                                <td>累计净利润</td>
                                <td>0元
                                    <em style="color:#888">元</em>
                                </td>
                                <td>交易周期</td>
                                <td>0天</td>
                            </tr>
                            <tr>
                                <td>交易笔数（开仓、平仓）</td>
                                <td>0笔</td>
                                <td>盈利笔数（平仓）</td>
                                <td>0笔</td>
                            </tr>
                            <tr class="xuxian">
                                <td>亏损笔数（平仓）</td>
                                <td>0笔</td>
                                <td>平均每笔盈利</td>
                                <td>0元</td>
                            </tr>
                            <tr>
                                <td>平均每笔亏损</td>
                                <td>0笔</td>
                                <td>平均每笔费用</td>
                                <td>0元</td>
                            </tr>
                            <tr>
                                <td>费用占比</td>
                                <td>0</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                    <h5 class="numone">盈利能力</h5> 
                    <table class="table-m1" cellspacing="0">
                        <tbody>
                            <tr>
                                <td>年化收益率</td>
                                <td>--</td>
                                <td>累计收益率</td>
                                <td>0%</td>
                            </tr>
                            <tr class="xuxian">
                                <td>当日收益率</td>
                                <td>0</td>
                                <td>7日收益率</td>
                                <td>0%</td>
                            </tr>
                            <tr>
                                <td>30日收益率</td>
                                <td>0%</td>
                                <td>胜率</td>
                                <td>0%</td>
                            </tr>
                            <tr class="xuxian">
                                <td>盈亏比</td>
                                <td>--</td>
                                <td>连续盈利天数</td>
                                <td>0天</td>
                            </tr>
                            <tr>
                                <td>连续亏损天数</td>
                                <td>0天</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                    <h5 class="numone">稳定性</h5> 
                    <table class="table-m1" cellspacing="0">
                        <tbody>
                            <tr>
                                <td>最大回撤率</td>
                                <td>0%</td>
                                <td>日最大赢利额</td>
                                <td>0
                                    <em style="color:#888">元</em>
                                </td>
                            </tr>
                            <tr>
                                <td>日最大亏损额</td>
                                <td>0
                                    <em style="color:#888">元</em>
                                </td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                    <p class="tip">订阅该导师后，即可查看该导师的交易记录</p> 
                    <h5 class="numone">历史交易记录</h5>    
                    <div class="tradingRecord-state"> 
                        <a class="dingyue">订 阅</a>
                        <span class="fl">后可查看全部交易记录</span>
                    </div>
                
                </div> 
                <div class="superior-con" v-if="xshi">
                     <!-- style="display:none"  -->
                    <h5 class="numone">累计净值</h5> 
                    <div class="graph chartField" style="height:20rem;border-bottom: 2px solid #eee;"></div> 
                    <h5 class="numone">盈亏曲线图</h5> 
                    <div class="graph chartField" style="height:20rem;border-bottom: 2px solid #eee;"></div> 
                    <h5 class="numone">周盈亏</h5> 
                    <div class="graph chartField" style="height:20rem;border-bottom: 2px solid #eee;"></div> 
                    <h5 class="numone">月盈亏</h5> 
                    <div class="graph chartField" style="height:20rem;border-bottom: 2px solid #eee;"></div> 
                    <h5 class="numone">品种盈亏</h5> 
                    <div class="graph chartField" style="height:20rem;border-bottom: 2px solid #eee;"></div> 
                    <h5 class="numone">成交结构</h5> 
                    <div class="graph chartField" style="height:20rem;border-bottom: 2px solid #eee;"></div> 
                    <h5 class="numone">隔夜习惯</h5> 
                    <div class="graph chartField" style="height:20rem;border-bottom: 2px solid #eee;"></div> 
                    <h5 class="numone">出入金</h5> 
                    <div class="jy_crj"> 
                        <div>出入金</div> 
                        <div>金额</div> 
                        <div>日期<font color="red">(*半年内)</font></div> 
                    </div> 
                    <div class="jy_count"> 
                        <div>入金</div> 
                        <div><font color="red">+30000</font></div> 
                        <div>2019-10-30</div> 
                    </div> 
                </div> 
            </div>
            <div class="tabbar"> 
                <div class="tab">
                    <div class="caopan">操盘学习</div>
                    <div class="fuzhi">立即复制</div>
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
            bgImg:{
                backgroundImage:"url("+require('../img/s_daoshibg2.jpg')+")",
                backgroundRepeat: "no-repeat",
                backgroundSize:'100% 100%'
            },
            tabsItem: [
                {
                name: "交易概况",
                status: 0
                },
                {
                name: "我的净值",
                status: 1
                }
            ],
            xianshi: true,
            xshi: false,
            active:0, 
            toast_control: false,
        }
    },
    methods:{
        toJiaoYi(){
            this.xianshi=true;
            this.xshi=false;
        },
        toJIngZhi(){
            this.xianshi=false;
            this.xshi=true;
        }
    }
}
</script>

<style lang="less" scoped="scoped">
    .superior-top {
        padding: 10px;
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
            width: 60%;
            h2{
                font-size: 14px;
                line-height: 22px;
                color: #fff;
            }
            .mychart_d{
                color: #CFB696;
                line-height: 18px;
            }
        }
        .quxian{
            width: 22%;
            text-align: right;
            padding-top: 26px;
            .book-btn{
                background-color: #f24848;
                color: #fff;
                padding:3px 5px;
                border-radius: 5px;
                
            } 
        }
    }
    .superior-nav{
        display: flex;
        text-align: center;
        font-size: 14px;
        li{
            padding: 15px 0;
            background-color: #f6f6f6;
            color: #666! important;
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
            //    border-bottom: 2px solid #eee;
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
           .tradingRecord-state{
               text-align: center;
               padding-top: 20px;
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
            }
        }
    }
</style>