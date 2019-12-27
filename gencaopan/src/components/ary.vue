<template>
<div class="ary">
    <div class="superior-con">
        <h5 class="numone">账户概述</h5> 
        <div class="table">
            <!-- <div class="table_c" v-for="(item,index) in gaishu" :key="item.id" :index="index"> -->
            <div class="table_c"><div>初始权益</div><div>{{initialEquity}}<span>元</span></div></div>
            <div class="table_c"><div>初始日期</div><div>{{initialDate}}</div></div>
            <div class="table_c"><div>最新权益</div><div>{{newEquity}}<span>元</span></div></div>
            <div class="table_c"><div>最新日期</div><div>{{newDate}}</div></div>
            <div class="table_c"><div>累计收益</div><div>{{accumulatedIncome}}<span>元</span></div></div>
            <div class="table_c"><div>累计手续费</div><div>{{accumulatedFee}}<span>元</span></div></div>
            <div class="table_c"><div>累计净利润</div><div :style="{'color':(accumulatedNetProfit >= 0 ? 'red':'green')}">{{accumulatedNetProfit}}<span>元</span></div></div>
            <div class="table_c"><div>交易周期</div><div>{{tradingCycle}}<span>天</span></div></div>
            <div class="table_c"><div>交易笔数（开仓平仓）</div><div>{{tradeNumber}}</div></div>
            <div class="table_c"><div>盈利笔数（平仓）</div><div>{{profitNumber}}</div></div>
            <div class="table_c"><div>亏损笔数（平仓）</div><div>{{lossNumber}}</div></div>
            <div class="table_c"><div>平均每笔盈利</div><div :style="{'color':(averageProfit >= 0 ? 'red':'green')}">{{averageProfit}}</div></div>
            <div class="table_c"><div>平均每笔手续费</div><div>{{averageFee}}</div></div>
        </div>

        <h5 class="numone">盈利能力</h5> 
        <div class="table">
            <div class="table_c"><div>累计收益率</div><div :style="{'color':(accumulatedIncomeRate >= 0 ? 'red':'green')}">{{accumulatedIncomeRate}}<span>%</span></div></div>
            <div class="table_c"><div>七天收益率</div><div :style="{'color':(sevenDayIncomeRate >= 0 ? 'red':'green')}">{{sevenDayIncomeRate}}<span>%</span></div></div>
            <div class="table_c"><div>今日收益率</div><div :style="{'color':(dayIncomeRate >= 0 ? 'red':'green')}">{{dayIncomeRate}}<span>%</span></div></div>
            <div class="table_c"><div>胜率</div><div>{{winningRate}}<span>%</span></div></div>
            <div class="table_c"><div>盈亏比</div><div>{{profitLossRate}}</div></div>
            <div class="table_c"><div>连续盈利天数</div><div>{{consecutiveProfitDay}}<span>天</span></div></div>
            <div class="table_c"><div>连续亏损天数</div><div>{{consecutiveLossDay}}<span>天</span></div></div>
        </div>
        
        <h5 class="numone">稳定性</h5> 
        <div class="table1">
            <div class="table_c"><div>日最大盈利金额</div><div :style="{'color':(dayMaxProfit >= 0 ? 'red':'green')}">{{dayMaxProfit}}<span>元</span></div></div>
            <div class="table_c"><div>日最大亏损</div><div :style="{'color':(dayMaxLoss >= 0 ? 'red':'green')}">{{dayMaxLoss}}<span>元</span></div></div>
        </div>
        
    </div>
</div> 
</template>

<script>
export default {
    name:"ary",
    data(){
        return{
            // id:this.$props.id,
            initialEquity:"",
            initialDate:"",
            newEquity:"",
            newDate:"",
            accumulatedIncome:"",
            accumulatedFee:"",
            accumulatedNetProfit:"",
            tradingCycle:"",
            tradeNumber:"",
            profitNumber:"",
            lossNumber:"",
            averageProfit:"",
            averageFee:"",
            accumulatedIncomeRate:"",
            sevenDayIncomeRate:"",
            dayIncomeRate:"",
            winningRate:"",
            profitLossRate:"",
            consecutiveProfitDay:"",
            consecutiveLossDay:"",
            dayMaxProfit:"",
            dayMaxLoss:""
        }
    },
    props:["id"],
    mounted(){
        this.initData();
    },
    methods:{
        initData(){
            var params = { 
                id: this.id,
            };
            this.$axios.post('/futures/info',params).then(res=>{
                console.log(res.data.data)
                this.data = res.data.data;
                this.initialEquity = this.data.initialEquity;
                this.initialDate = this.data.initialDate;
                this.newEquity = this.data.newEquity;
                this.newDate = this.data.newDate;
                this.accumulatedIncome = this.data.accumulatedIncome;
                this.accumulatedFee = this.data.accumulatedFee;
                this.accumulatedNetProfit = this.data.accumulatedNetProfit;
                this.tradingCycle = this.data.tradingCycle;
                this.tradeNumber = this.data.tradeNumber;
                this.profitNumber = this.data.profitNumber;
                this.lossNumber = this.data.lossNumber;
                this.averageProfit = this.data.averageProfit;
                this.averageFee = this.data.averageFee;
                this.accumulatedIncomeRate = this.data.accumulatedIncomeRate;
                this.sevenDayIncomeRate = this.data.sevenDayIncomeRate;
                this.dayIncomeRate = this.data.dayIncomeRate;
                this.winningRate = this.data.winningRate;
                this.profitLossRate = this.data.profitLossRate;
                this.consecutiveProfitDay = this.data.consecutiveProfitDay;
                this.consecutiveLossDay = this.data.consecutiveLossDay;
                this.dayMaxProfit = this.data.dayMaxProfit;
                this.dayMaxLoss = this.data.dayMaxLoss;
                console.log(this.data.newDate+".......")
            })
            .catch( error=>{
        　　　　console.log(error);
        　　});
        console.log("++++++||||||||"+this.id)
        },
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
        .table,.table1{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            padding: 8px 0;
            border-bottom: 2px solid #eee;
            .table_c{
                width: 50%;
                display: flex;
                font-size: 12px;
                line-height: 22px;
                div{
                    width: 50%;
                    text-align: center;
                    color: #666;
                }
            }
        }
        .table1{
           border-bottom: 0; 
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