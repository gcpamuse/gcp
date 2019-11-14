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
        <!-- <div class="graph chartField"></div>  -->
        <div id="main" style="width: 100%;height:300px;"></div>
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
            },
            option : {
                title: {
                    text: '周盈亏',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    top: 80,
                    bottom: 30
                },
                xAxis: {
                    type: 'value',
                    position: 'top',
                    splitLine: {lineStyle: {type: 'dashed'}},
                },
                yAxis: {
                    type: 'category',
                    axisLine: {show: false},
                    axisLabel: {show: false},
                    axisTick: {show: false},
                    splitLine: {show: false},
                    // 要与series数据顺序匹配正确
                    data: ['2019/30', '2019/31', '2019/32', '2019/34', '2019/35', '2019/36', '2019/37', '2019/38', '2019/39', '2019/40',
                        '2019/41', '2019/42', '2019/43', '2019/44', '2019/45','2019/46', '2019/47', '2019/48', '2019/49', '2019/50',
                        '2019/51', '2019/52', '2019/53', '2019/54', '2019/55',
                    ]
                },
                dataZoom:[
                    {
                        type: 'slider',
                        show: true,
                        yAxisIndex: [0],
                        left: '93%',
                        start: 0, //数据窗口范围的起始百分比
                        end: 36
                    }
                ],
                series: [
                    {
                        name: '盈亏(亿元)',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                formatter: '{b}'
                            }
                        },
                        // 表中从下到上，从最大亏损到最大盈利
                        data: [
                            {value: -1.07},{value: -0.23},{value: -0.03},{value: 0.36},{value: 0.89},
                            {value: -0.89},{value: -0.33},{value: 1.08},{value: 1.68},{value: 2.24},
                            {value: 0.36},{value: 0.89},{value: -0.89},{value: -0.33},{value: 1.08},
                            {value: -1.07},{value: -0.23},{value: -0.03},{value: 0.36},{value: 0.89},
                            {value: -0.89},{value: -0.33},{value: 1.08},{value: 1.68},{value: 2.24},
                        ],
                        // 添加颜色显示规则
                        // 大于等于0红色; 小于0为绿色
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    return params.value >= 0 ? "red" : "green";
                                }
                            }
                        }
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
        let myChart = echarts.init(document.getElementById('main'));
        //绘制图表
        chartmainline.setOption(this.optionline);
        chartmainlinetow.setOption(this.optionlinetow);
        myChart.setOption(this.option);
        window.onresize = function () {
            chartmainline.resize();
            chartmainlinetow.resize();
            myChart.resize();
        }
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