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
            tedata1:[],
            tedata2:[],
            optionlinetow:{
                title:{
                    // text:'累计盈亏',
                    text:'',
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
                    data:[]
                    // data:['累计毛利润','累计净利润','累计手续费']
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
                        // name:'累计毛利润',
                        name:'',
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
                        // name:'累计净利润',
                        name:'',
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
                        // name:'累计手续费',
                        name:'',
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
                    // text: '周盈亏',
                    text: '',
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
                    data:[]
                    // data: ['2019/30', '2019/31', '2019/32', '2019/34', '2019/35', '2019/36', '2019/37', '2019/38', '2019/39', '2019/40',
                    //     '2019/41', '2019/42', '2019/43', '2019/44', '2019/45','2019/46', '2019/47', '2019/48', '2019/49', '2019/50',
                    //     '2019/51', '2019/52', '2019/53', '2019/54', '2019/55',
                    // ]
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
                                formatter: '{b}',
                            }
                        },
                        data:[],
                        // data: [
                        //     -1.7, -0.23, -0.03, 0.36, 0.89, -0.89, -0.33, 1.08, 1.68, 2.24, 0.36, 0.89, -0.89, -0.33, 1.08, -1.07, -0.23, -0.03, 0.36, 0.89, -0.89, -0.33, 1.08, 1.68, 2.24,
                        // ],
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
            this.$http.get("/api/majorlist").then(function(response){
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
                // this.tedata1 = response.data.data.e;
                // this.tedata2 = response.data.data.f;
                myChart.setOption({
                    title:{
                        text: "周盈亏"
                    },
                    yAxis: {
                        data:response.data.data.f
                    },
                    series: [
                        {
                            data:response.data.data.e
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