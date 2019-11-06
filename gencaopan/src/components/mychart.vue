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
                            <span class="mychart_span" style="padding-left:0;float:none;"> 计划你的交易，交易你的计划 </span> 
                            <a class="mychart_a" href="#"></a> 
                        </p> 
                    </div> 
                </div>
                <div class="quxian">
                    <a class="book-btn charge" href="#curve" data-rel="popup" data-position-to="window" data-transition="fade">生成曲线</a>
                </div> 
            </div> 
            <div class="list-btnbox">  
                    <div class="ui-content" id="curve" data-role="popup" data-overlay-theme="b" style="display:none;"> 
                        <div style="min-width:256px"> 
                            <div> 
                                <lable>账户:</lable> 
                                <input type="text" value="" placeholder="期货保证金监控中心账户"> 
                            </div> 
                            <div> 
                                <lable>密码:</lable> 
                                <input type="text" value="" placeholder="期货保证金监控中心密码"> 
                            </div> 
                            <a id="makeChart" href="javascript:;" class="user-defined-btn" data-role="button" data-ajax="false" role="button">提交</a> 
                        </div> 
                    </div>  
                </div> 
            <!-- <ul class="superior-nav fix"> 
                <li class="active" style="width:49%"><a href="#">交易概况</a></li> 
                <li style="width:49%"><a href="#">我的净值</a></li> 
            </ul> -->
            <van-tabs class="tab">
                <van-tab 
                    v-for="tab in tabsItem"
                    :title="tab.name" 
                    :key="tab.type"
                    class="tab">
                </van-tab>
            </van-tabs>
            <div class="superior-content"> 
                <div class="superior-con">
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
                            <tr class="xuxian">
                                <td>费用占比</td>
                                <td>0</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                    <h5 class="numone">盈亏曲线图</h5> 
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
                    <h5 class="numone">周盈亏</h5> 
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
                
                </div> 
                <div class="superior-con" style="display:none"> 
                    <h5>累计净值</h5> 
                    <div class="graph chartField" id="total_nav"></div> 
                    <h5>盈亏曲线图</h5> 
                    <div class="graph chartField" id="total_profit"></div> 
                    <h5>周盈亏</h5> 
                    <div class="graph chartField" id="week_profit"></div> 
                    <h5>月盈亏</h5> 
                    <div class="graph chartField" id="month_profit"></div> 
                    <h5>品种盈亏</h5> 
                    <div class="graph chartField" id="futures"></div> 
                    <h5>成交结构</h5> 
                    <div class="graph chartField" id="struct" style="height:22rem"></div> 
                    <h5>隔夜习惯</h5> 
                    <div class="graph chartField" id="risk" style="height:24rem"></div> 
                </div> 
            </div> 
        </div> 
    </div>
    <div style="height:50px;"></div>
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
            ]
        }
    },
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
            padding-top: 16px;
            .book-btn{
                background-color: #f24848;
                color: #fff;
                padding:3px 5px;
                border-radius: 5px;
                
            } 
        }
    }
    // .superior-nav{
    //     display: flex;
    //     text-align: center;
    //     font-size: 14px;
    //     li{
    //         padding: 15px 0;
    //         background-color: #f6f6f6;
    //         color: #666! important;
    //     }
    // }
    .superior-content{
       .superior-con{
           .numone{
               padding: 10px;
               color: #3333;
               border-bottom: 2px solid #eee;
           }
           .table-m1{
               width: 100%;
               text-align: center;
               font-size: 12px;
               border-bottom: 2px solid #eee;
               color: #666;
               tr{
                   line-height: 25px;
               }
               .xuxian{
                   border-bottom: 1px dashed #eee;
               }
           }
       } 
    }
</style>