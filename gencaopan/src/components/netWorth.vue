<template>
    <!-- <div class="graph chartField"></div>  -->
    <div class="superior-con">
        <!-- <h5 class="numone">累计净值</h5>        
        <div id="chartmainline" style="width:100%;height:300px;border-bottom: 2px solid #eee;"></div> -->
        <h5 class="numone">盈亏曲线图</h5> 
        <div id="chartmainlinetow" style="width:100%; height:300px;border-bottom: 2px solid #eee;"></div>
        <h5 class="numone">周盈亏</h5> 
        <div id="main" style="width: 100%;height:300px;border-bottom: 2px solid #eee;"></div>
        <!-- <h5 class="numone">月盈亏</h5> 
        <div id="zhou" style="width: 100%;height:300px;border-bottom: 2px solid #eee;"></div> -->
        <!-- <h5 class="numone">品种盈亏</h5> 
        <div class="graph chartField"></div>  -->
        <h5 class="numone">成交结构</h5> 
        <div id="bingtu" style="width:100%;height: 300px;border-bottom: 2px solid #eee;padding-top: 10px;"></div>
        <!-- <h5 class="numone">隔夜习惯</h5> 
        <div id="chartmain" style="width:100%; height:300px;border-bottom: 2px solid #eee;"></div> -->
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
    props:["id"],
    data(){
        return{
            accumulatedProfitLoss:[],
            transactionStructure:[],
            weekProfitLoss:{},
            shu:[],
            zhi:[],
            shu1:[],
            zhi1:[],
            zhi2:[],
            shu2:[],
            shuzhi1:[],
            shuzhi2:[],
            shuzhi3:[],
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
                    x: 'center',
                    textStyle:{
                        fontSize:16,
                        fontFamily: 'monospace',
                    }
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
            let chartmainlinetow = this.$echarts.init(document.getElementById("chartmainlinetow"));
            let myChart = echarts.init(document.getElementById('main'));
            let bingchart = echarts.init(document.getElementById('bingtu')); 
            //绘制图表 
            chartmainlinetow.setOption(this.optionlinetow);
            myChart.setOption(this.option);
            bingchart.setOption(this.bingoption); 
            window.onresize = function () {   
                chartmainlinetow.resize();
                myChart.resize();  
                bingchart.resize();   
            };
            var params = { 
                id: this.id,
            };
            this.$axios.post('/futures/info',params).then(res=>{
                console.log(res.data.data)
                let data = res.data.data;
                this.accumulatedProfitLoss = data.accumulatedProfitLoss;
                this.transactionStructure = data.transactionStructure;
                this.weekProfitLoss = data.weekProfitLoss;
                //成交结构
                let shuzhi = [{name:'',value:''},{name:'',value:''},{name:'',value:''},{name:'',value:''},{name:'',value:''},{name:'',value:''}
                ,{name:'',value:''},{name:'',value:''},{name:'',value:''},{name:'',value:''},{name:'',value:''},{name:'',value:''}]
                this.transactionStructure.forEach((item, index) => {
                    this.shu.push(item.target);
                    this.zhi.push(item.sumVolume);
                    if(shuzhi[index]){
                        shuzhi[index].name = item.target;
                        shuzhi[index].value = item.sumVolume;
                    }
                })
                bingchart.setOption({
                    legend: {
                        data: this.shu
                    },
                    series : [
                        {
                            data:shuzhi
                        }
                    ]
                });
                //周盈亏
                for(let key in this.weekProfitLoss){
                    this.shu1.push(key);
                    this.zhi1.push(this.weekProfitLoss[key]);
                }
                myChart.setOption({
                    title:{
                        text: "周盈亏"
                    },
                    yAxis: {
                        data:this.shu1
                    },
                    dataZoom:[
                        {
                            end: 60 //控制右侧滑块的长度
                        }
                    ],
                    series: [
                        {
                            data:this.zhi1
                        }
                    ]
                });
                //累计盈亏
                for(let key in this.accumulatedProfitLoss){
                    this.shu2.push(key);
                    this.zhi2.push(this.accumulatedProfitLoss[key]);    
                }
                this.zhi2.forEach((item, index) => {
                    this.shuzhi1.push(item.sumProfit);
                    this.shuzhi2.push(item.sumFee);
                    this.shuzhi3.push(item.sumNetProfit);
                })
                chartmainlinetow.setOption({
                    title:{
                        text: "累计盈亏"
                    },
                    xAxis: {
                        data: this.shu2
                    }, 
                    legend:{
                        data:["累计毛利润","累计手续费","累计净利润"]
                    },
                    series: [
                        { 
                        name:"累计毛利润",
                        data:this.shuzhi1
                        },
                        { 
                        name:"累计手续费",
                        data:this.shuzhi2
                        },
                        { 
                        name:"累计净利润",
                        data:this.shuzhi3
                        }
                    ]
                });
                console.log("1111%%%"+this.shuzhi1)
                console.log("______"+this.shuzhi2)
                console.log("++++++"+this.shuzhi3)
            })
            .catch( error=>{
        　　　　console.log(error);
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