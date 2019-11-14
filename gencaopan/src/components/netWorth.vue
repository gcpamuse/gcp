<template>
    <div class="superior-con">
            <!-- style="display:none"  -->
        <h5 class="numone">累计净值</h5> 
        <!-- <div class="graph chartField"></div>  -->
        <div id="chartmainline" style="width:100%;height:300px"></div>
        <h5 class="numone">盈亏曲线图</h5> 
        <!-- <div class="graph chartField"></div>  -->
        <div id="chartmainlinetow" style="width:100%; height:300px;"></div>
        <h5 class="numone">周盈亏</h5> 
        <div class="graph chartField"></div> 
        <h5 class="numone">月盈亏</h5> 
        <div class="graph chartField"></div> 
        <h5 class="numone">品种盈亏</h5> 
        <div class="graph chartField"></div> 
        <h5 class="numone">成交结构</h5> 
        <div class="graph chartField"></div> 
        <h5 class="numone">隔夜习惯</h5> 
        <div class="graph chartField"></div> 
    </div> 
</template>

<script>
let echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/line');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/component/legend');
export default {
    name:"netWorth",
    data(){
        return{
            optionline:{
                title:{
                    // text:'累计净值',
                    // x:'center'
                },
                tooltip:{
                    trigger: 'axis'   //显示提示框
                },
                legend:{
                    data:['累计净值']
                },
                xAxis:{
                    type: 'category',
                    boundaryGap:false,
                    data:["2004-10-8","2005-5-10","2005-12-8","2006-5-10","2006-10-10","2006-12-10","2007-6-10","2007-11-8","2008-3-10","2008-11-11",
                    "2009-1-8","2009-5-10","2009-12-8","2010-3-10","2010-7-10","2010-10-10","2011-1-10","2011-11-8","2012-3-10","2012-11-11",
                    "2014-10-8","2015-5-10","2015-12-8","2016-5-10","2017-4-10","2017-10-10","2018-1-10","2018-11-8","2019-3-10","2019-11-11"]
                },
                yAxis:{
                    type: "value",
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                series:[{
                    name:'累计净值',
                    type:'line', //设置图表主题
                    smooth:true,
                    symbol: 'none',
                    sampling: 'average',
                    itemStyle: {
                        color: 'rgb(255, 70, 131)'
                    },
                    areaStyle: {   
                        color: 'rgba(240, 16, 16,0.8)'
                    },
                    data:[20,8,10,10,15,20,12,13,10,15,20,18,25,15,19,30,32,33,30,25,30,25,30,34,20,18,30,35,42,45]
                }]
            },
            optionlinetow:{
                title:{
                    // text:'累计盈亏',
                    // x:'center'
                },
                tooltip:{
                    trigger: 'axis'   //显示提示框
                },
                legend:{
                    data:['累计毛利润','累计净利润','累计手续费']
                },
                xAxis:{
                    type: 'category',
                    boundaryGap:false,
                    data:["2004-10-8","2005-5-10","2005-12-8","2006-5-10","2006-10-10","2006-12-10","2007-6-10","2007-11-8","2008-3-10","2008-11-11",
                    "2009-1-8","2009-5-10","2009-12-8","2010-3-10","2010-7-10","2010-10-10","2011-1-10","2011-11-8","2012-3-10","2012-11-11",
                    "2014-10-8","2015-5-10","2015-12-8","2016-5-10","2017-4-10","2017-10-10","2018-1-10","2018-11-8","2019-3-10","2019-11-11"]
                },
                yAxis:{
                    type: "value",
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                series:[
                    {
                        name:'累计毛利润',
                        type:'line', //设置图表主题
                        smooth:true,
                        symbol: 'none',
                        sampling: 'average',
                        itemStyle: {
                            color: 'rgb(255, 70, 131)'
                        },
                        areaStyle: {   
                            color: 'rgba(240, 16, 16,0.8)'
                        },
                        data:[2000,8000,10000,9000,15000,20000,12000,13000,10000,15000,20000,18000,25000,15000,19000,30000,32000,30003,30000,25000,30000,20005,30000,34000,20000,18000,30000,35000,42000,45000]
                    },
                    {
                        name:'累计净利润',
                        type:'line', //设置图表主题
                        smooth:true,
                        symbol: 'none',
                        sampling: 'average',
                        itemStyle: {
                            color: 'rgb(105, 70, 131)'
                        },
                        areaStyle: {   
                            color: 'rgba(240, 0, 0,0.8)'
                        },
                        data:[1500,7800,9010,8010,10005,11120,10002,10003,9010,10005,10200,10080,20500,10005,10009,29030,30002,29033,23300,20005,23030,19025,25030,30004,16020,10008,23160,30500,40200,40500]
                    },
                    {
                        name:'累计手续费',
                        type:'line', //设置图表主题
                        smooth:true,
                        symbol: 'none',
                        sampling: 'average',
                        itemStyle: {
                            color: 'rgb(200, 0, 131)'
                        },
                        areaStyle: {   
                            color: 'rgba(170, 16, 16,0.8)'
                        },
                        data:[200,800,1000,1000,1500,2000,1020,1300,1000,1500,2000,1800,2500,1500,1900,3000,3200,3300,3000,2500,3000,2500,3000,3400,2000,1800,3000,3500,4200,4500]
                    }
                ]
            }
        }
    },
    mounted() {
       this.drawLine()
    },
    methods:{
        drawLine: function(){
        //基于准本好的DOM，初始化echarts实例
        let chartmainline = this.$echarts.init(document.getElementById("chartmainline"));
        let chartmainlinetow = this.$echarts.init(document.getElementById("chartmainlinetow"));
        //绘制图表
        chartmainline.setOption(this.optionline);
        chartmainlinetow.setOption(this.optionlinetow);
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
        .graph{
            height:20rem;
            border-bottom: 2px solid #eee;
        }
    } 
</style>