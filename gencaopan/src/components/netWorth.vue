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
            data1:[],
            data2:[],
            data3:[],
            name:[],
            data4:[],
            name1:[],
            text:[],
            text1:[],
            text2:[],
            optionlinetow:{
                title:{
                    text:'',// text:'累计盈亏',
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
                    data:[]// data:['累计毛利润','累计净利润','累计手续费']
                },
                xAxis:{
                    type: 'category',
                    splitLine :{    
                        lineStyle:{
                            type:'dashed'    
                        },
                        show:true 
                    },
                    boundaryGap:false,
                    data:[]
                },
                yAxis:{
                    type: "value",
                    splitLine :{    
                        lineStyle:{
                            type:'dashed'    
                        },
                        show:true 
                    },
                },
                grid: {
                    left: '5%',
                    right: '6%',
                    bottom: '6%',
                    containLabel: true
                },
                series:[
                    {                        
                        name:'',// name:'累计毛利润',
                        type:'line', //设置图表主题
                        smooth:true,
                        // symbol: 'none',
                        sampling: 'average',
                        itemStyle: {
                            color: 'rgb(236, 5, 5)'
                        },
                        areaStyle: {   
                            color: 'rgba(236, 5, 5,0.9)'
                        },
                        data:[]
                    },
                    {                       
                        name:'',// name:'累计净利润',
                        type:'line', //设置图表主题
                        smooth:true,
                        // symbol: 'none',
                        sampling: 'average',
                        itemStyle: {
                            color: 'rgb(33, 57, 80)'
                        },
                        areaStyle: {   
                            color: 'rgba(33, 57, 80,0.8)'
                        },
                        data:[]
                    },
                    {                       
                        name:'',// name:'累计手续费',
                        type:'line', //设置图表主题
                        smooth:true,
                        // symbol: 'none',
                        sampling: 'average',
                        itemStyle: {
                            color: 'rgb(63, 65, 63)'
                        },
                        areaStyle: {   
                            color: 'rgba(63, 65, 63,0.8)'
                        },
                        data:[]
                    }
                ]
            },
            option : {
                title: {                   
                    text: '',// text: '周盈亏',
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
                    inverse: true,
                    axisLine: {show: false},
                    axisLabel: {show: false},
                    axisTick: {show: false},
                    splitLine: {show: false},
                    data:[]
                },
                dataZoom:[
                    {
                        type: 'slider',
                        show: true,
                        yAxisIndex: [0],
                        left: '93%',
                        start: 0, //数据窗口范围的起始百分比
                        end: 26,
                        zoomLock:true
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
                                formatter: '{b}',
                            }
                        },
                        data:[],
                        itemStyle: {
                            normal: {
                                color: function (params) {// 添加颜色显示规则 大于等于0红色; 小于0为绿色
                                    return params.value >= 0 ? "red" : "green";
                                }
                            },
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
                    data:[]
                },
                series : [
                    {
                        name: '成交偏好',
                        type: 'pie',
                        radius : '60%',
                        center: ['55%', '45%'],
                        data:[]
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
            // chartmainline.setOption(this.optionline);
            chartmainline.setOption(this.optionlinetow);
            chartmainlinetow.setOption(this.optionlinetow);
            myChart.setOption(this.option);
            // chart.setOption(this.zhouoption);
            chart.setOption(this.option);
            bingchart.setOption(this.bingoption);
            chartmain.setOption(this.optionlinetow);
            window.onresize = function () {
                chartmainline.resize();
                chartmainlinetow.resize();
                myChart.resize();
                chart.resize();
                bingchart.resize();
                chartmain.resize();
            };
            // this.$http.get("/api/majorlist").then(function(response){
            this.$http.get("/static/data.json").then(function(response){
                // let ydata = response.data.data.y;
                console.log(response.data.data)
                let ydata = response.data.data.y;
        　　　　for(let i = 0; i < ydata.length; i++){　　　
        　　　　　　 this.data1 = ydata[i].data;
        　　　　}
                this.data2=response.data.data.x;
                chartmainline.setOption({
                    title:{
                        text: "累计净值"
                    },
                    xAxis: {
                        data: this.data2
                    }, 
                    series: [{ 
                        data: this.data1
                    }]
                });
                let datatow = response.data.data.c;
        　　　　 for(let i = 0; i < datatow.length; i++){　　　
        　　　　     this.data3[i] = datatow[i].data;
                    this.name[i]=datatow[i].name;
        　　　　 }
                chartmainlinetow.setOption({
                    title:{
                        text: "累计盈亏"
                    },
                    xAxis: {
                        data: this.data2
                    }, 
                    legend:{
                        data:this.name
                    },
                    series: [
                        { 
                        name:this.name[0],
                        data:this.data3[0]
                        },
                        { 
                        name:this.name[1],
                        data:this.data3[1]
                        },
                        { 
                        name:this.name[2],
                        data:this.data3[2]
                        }
                    ]
                });
                let datad = response.data.data.d;
        　　　　 for(let i = 0; i < datad.length; i++){　　　
        　　　　     this.data4[i] = datad[i].data;
                    this.name1[i] = datad[i].name;
        　　　　 }
                chartmain.setOption({
                    title:{
                        text: "每日仓位"
                    },
                    xAxis: {
                        data: this.data2
                    }, 
                    legend:{
                        data:this.name1
                    },
                    series: [
                        { 
                        name:this.name1[0],
                        data:this.data4[0]
                        },
                        { 
                        name:this.name1[1],
                        data:this.data4[1]
                        }
                    ]
                });
                myChart.setOption({
                    title:{
                        text: "周盈亏"
                    },
                    yAxis: {
                        data:response.data.data.f
                    },
                    dataZoom:[
                        {
                            end: 6
                        }
                    ],
                    series: [
                        {
                            data:response.data.data.e
                        }
                    ]
                });
                chart.setOption({
                    title:{
                        text: "月盈亏"
                    },
                    yAxis: {
                        data:response.data.data.h
                    },
                    series: [
                        {
                            data:response.data.data.g
                        }
                    ]
                });
                bingchart.setOption({
                    legend: {
                        data: response.data.data.n
                    },
                    series : [
                        {
                            data:response.data.data.k
                        }
                    ]
                });
        　　})
        　　.catch(function(error){
        　　　　console.log("出错喽："+error);
        　　});
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
            color: rgb(63, 65, 63);
        }
    } 
</style>