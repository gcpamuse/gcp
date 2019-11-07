<template>
<div class="ary">
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
        <table class="table-m1 tm" cellspacing="0">
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
</div> 
</template>

<script>
export default {
    name:"ary",
    data(){
        return{

        }
    }
}
</script>

<style lang="less" scoped="scoped">
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
            border-bottom: 2px solid #eee;
            color: #666;
            tr{
                line-height: 25px;
            }
            .xuxian{
                border-bottom: 1px dashed #eee;
            }
        }
        .tm{
            border: 0;
        }
    } 
</style>