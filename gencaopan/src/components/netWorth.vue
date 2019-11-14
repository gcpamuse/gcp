<template>
    <!-- <div class="graph chartField"></div>  -->
    <div class="superior-con">
        <h5 class="numone">累计净值</h5>        
        <div id="chartmainline" style="width:100%;height:300px;border-bottom: 2px solid #eee;"></div>
        <h5 class="numone">盈亏曲线图</h5> 
        <div id="chartmainlinetow" style="width:100%; height:300px;border-bottom: 2px solid #eee;"></div>
        <h5 class="numone">周盈亏</h5> 
        <div id="main" style="width: 100%;height:300px;border-bottom: 2px solid #eee;"></div>
        <h5 class="numone">月盈亏</h5> 
        <div id="zhou" style="width: 100%;height:300px;border-bottom: 2px solid #eee;"></div>
        <!-- <h5 class="numone">品种盈亏</h5> 
        <div class="graph chartField"></div>  -->
        <h5 class="numone">成交结构</h5> 
        <div id="bingtu" style="width:100%;height: 300px;border-bottom: 2px solid #eee;padding-top: 10px;"></div>
        <h5 class="numone">隔夜习惯</h5> 
        <!-- <div class="graph chartField"></div>  -->
        <div id="chartmain" style="width:100%; height:300px;border-bottom: 2px solid #eee;"></div>
    </div> 
</template>

<script>
let echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/line');
require('echarts/lib/chart/pie');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/component/legend');
export default {
    name:"netWorth",
    data(){
        return{
            optionline:{
                title:{
                    text:'累计净值',
                    x:'center',
                    textStyle:{
                        fontSize:16,
                        fontFamily: 'monospace',
                    }
                },
                tooltip:{
                    trigger: 'axis'   //显示提示框
                },
                legend:{
                    orient: 'vertical',
                    bottom: 'bottom',
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
                    // left: '3%',
                    right: '6%',
                    bottom: '6%',
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
                    data:[20,8,10,10,15,17,12,13,10,15,20,22,25,20,26,30,32,35,31,25,30,25,30,34,27,26,30,35,42,45]
                }]
            },
            optionlinetow:{
                title:{
                    text:'累计盈亏',
                    x:'center',
                    textStyle:{
                        fontSize:16,
                        fontFamily: 'monospace',
                    }
                },
                tooltip:{
                    trigger: 'axis'   //显示提示框
                },
                legend:{
                    orient: 'vertical',
                    bottom: 'bottom',
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
                    left: '5%',
                    right: '6%',
                    bottom: '6%',
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
                        data:[2000,8000,10000,9000,15000,20000,18000,16000,19000,19090,20000,18000,25000,21000,19000,30000,32000,30003,30000,25000,30000,22005,30000,34000,20000,25000,30000,35000,42000,45000]
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
                        data:[1500,7800,9010,8010,10000,12120,13002,14003,15010,14005,16200,17080,20500,16005,15009,20030,26002,29033,23300,20005,23030,19025,25030,30004,16020,14008,23160,30500,40200,40500]
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
                        data: [
                            -1.7, -0.23, -0.03, 0.36, 0.89, -0.89, -0.33, 1.08, 1.68, 2.24, 0.36, 0.89, -0.89, -0.33, 1.08, -1.07, -0.23, -0.03, 0.36, 0.89, -0.89, -0.33, 1.08, 1.68, 2.24,
                        ],
                        itemStyle: {
                            normal: {
                                color: function (params) {// 添加颜色显示规则 大于等于0红色; 小于0为绿色
                                    return params.value >= 0 ? "red" : "green";
                                }
                            }
                        }
                    }
                ]
            },
            zhouoption : {
                title: {
                    text: '月盈亏',
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
                    data: ['2017-10', '2017-11', '2017-12', '2018-1', '2018-2', '2018-3', '2018-4', '2018-5', '201-6', '2018-7',
                        '2018-8', '2018-9', '2018-10', '2018-11', '2018-12','2019-1', '2019-2', '2019-3', '2019-4', '2019-5',
                        '2019-6', '2019-7', '2019-8', '2019-9', '2019-10',
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
                            -1.7, -0.23, -0.03, 0.36, 0.89, -0.89, -0.33, 1.08, 1.68, 2.24, 0.36, 0.89, -0.89, -0.33, 1.08, -1.07, -0.23, -0.03, 0.36, 0.89, -0.89, -0.33, 1.08, 1.68, 2.24,
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
            },
            bingoption:{
                title : {
                    text: '',
                    x:'center',
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left:'left',
                    data: ['沪镍','塑料','沪锌','焦炭','橡胶','棕榈','菜粕','ap','铜','豆粕','白银','其他']
                },
                series : [
                    {
                        name: '成交偏好',
                        type: 'pie',
                        radius : '60%',
                        center: ['55%', '45%'],
                        data:[
                            {value:35, name:'沪镍'},
                            {value:20, name:'塑料'},
                            {value:34, name:'沪锌'},
                            {value:35, name:'焦炭'},
                            {value:38, name:'橡胶'},
                            {value:28, name:'棕榈'},
                            {value:38, name:'菜粕'},
                            {value:28, name:'ap'},
                            {value:28, name:'铜'},
                            {value:48, name:'豆粕'},
                            {value:28, name:'白银'},
                            {value:298, name:'其他'}
                        ]
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
            let chart = echarts.init(document.getElementById('zhou'));
            let bingchart = echarts.init(document.getElementById('bingtu'));
            let chartmain = this.$echarts.init(document.getElementById("chartmain"));
            //绘制图表
            chartmainline.setOption(this.optionline);
            chartmainlinetow.setOption(this.optionlinetow);
            myChart.setOption(this.option);
            chart.setOption(this.zhouoption);
            bingchart.setOption(this.bingoption);
            chartmain.setOption(this.optionlinetow);
            window.onresize = function () {
                chartmainline.resize();
                chartmainlinetow.resize();
                myChart.resize();
                chart.resize();
                bingchart.resize();
                chartmain.resize();
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