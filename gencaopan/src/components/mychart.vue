<template>
  <div>
      <div data-role="page" data-dom-cache="true"  style="background-color:#fff;"> 
        <div data-role="main"> 
            <div class="superior-top fix"> 
                <div class="pic"><img class="avatar" src="../img/default_middle.png" alt="naihaha"/></div> 
                <div class="superior-main"> 
                    <h2>naihaha</h2> 
                    <div class=""> 
                        <p class="mychart_p"> 
                            <span class="mychart_span" style="padding-left:0;float:none;"> 计划你的交易，交易你的计划 </span> 
                            <a class="mychart_a" href="#"></a> 
                        </p> 
                    </div> 
                </div>
                <div class="list-btnbox">  
                    <div>
                        <a class="book-btn charge" href="#curve" data-rel="popup" data-position-to="window" data-transition="fade">生成曲线</a>
                    </div> 
                    <div class="ui-content" id="curve" data-role="popup" data-overlay-theme="b"> 
                        <div style="min-width:256px"> 
                            <div> 
                                <lable>账户:</lable> 
                                <input name="d[t][mod_user]" type="text" value="" placeholder="期货保证金监控中心账户"> 
                            </div> 
                            <div> 
                                <lable>密码:</lable> 
                                <input name="d[t][mod_passwd]" type="text" value="" placeholder="期货保证金监控中心密码"> 
                            </div> 
                            <a id="makeChart" href="javascript:;" class="user-defined-btn" data-role="button" data-ajax="false" role="button">提交</a> 
                        </div> 
                    </div>  
                </div> 
            </div> 
            <ul class="superior-nav fix" id="superior-nav"> 
                <li class="active" style="width:49%"><a href="#">交易概况</a></li> 
                <li style="width:49%"><a href="#">我的净值</a></li> 
            </ul> 
            <div class="superior-content" id="superior-content"> 
                <div class="superior-con" id="overviewWrap">
                    <h5 class="numone">账户概述</h5> 
                    <table class="table-m1" cellspacing="0">
                        <tbody>
                            <tr>
                                <td>初始权益</td>
                                <td>0元</td>
                                <td>起始日期</td>
                                <td>--</td>
                            </tr>
                            <tr>
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
                            <tr>
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
                            <tr>
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
                    <h5>盈亏曲线图</h5> 
                    <table class="table-m1" cellspacing="0">
                        <tbody>
                            <tr>
                                <td>年化收益率</td>
                                <td>--</td>
                                <td>累计收益率</td>
                                <td>0%</td>
                            </tr>
                            <tr>
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
                            <tr>
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
                    <h5>周盈亏</h5> 
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
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
}
</script>

<style lang="less" scoped="scoped">

</style>