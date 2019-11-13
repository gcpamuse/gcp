<template>
    <div class="superior-con">
            <!-- style="display:none"  -->
        <h5 class="numone">累计净值</h5> 
        <!-- <div class="graph chartField"></div>  -->
        <div id="chartmainline" style="width:100%;height:300px"></div>
        <h5 class="numone">盈亏曲线图</h5> 
        <div class="graph chartField"></div> 
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
                    text:'累计净值',
                    x:'center'
                },
                tooltip:{
                    trigger: 'axis'   //显示提示框
                },
                legend:{
                    data:['净值']
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
        //绘制图表
        chartmainline.setOption(this.optionline);
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