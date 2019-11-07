<template>
    <div class="superior-con">
            <!-- style="display:none"  -->
        <h5 class="numone">累计净值</h5> 
        <div class="graph chartField"></div> 
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
export default {
    name:"netWorth",
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
        .graph{
            height:20rem;
            border-bottom: 2px solid #eee;
        }
    } 
</style>