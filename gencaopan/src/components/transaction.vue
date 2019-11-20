<template>
    <div>
        
        <table class="table-m2" cellspacing="0"> 
            <thead> 
                <tr> 
                    <th>合约</th> 
                    <th>买/卖</th> 
                    <th>成交价</th>
                    <th>成交额</th> 
                    <th>开/平</th> 
                    <th>平仓盈亏</th>  
                    <th>成交时间</th>
                </tr> 
            </thead> 
            <tbody>
                <tr>
                    <td>合计</td>
                    <td>买</td>
                    <td>2300.00</td>
                    <td>30000.00</td>
                    <td>开</td>
                    <td>1200.00</td>
                    <td>2019-11-1</td>
                </tr>
            </tbody> 
        </table>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped="scoped">
.table-m2{  
    width: 100%; 
}
.table-m2 thead tr th,.table-m2 tbody tr td{ 
    padding: .5rem 0; 
    text-align: center; 
    color: #666; 
    line-height: 1.42857143; 
    vertical-align:middle; 
    font-size:.750rem; 
    font-weight:100;
}
.table-m2 thead tr th{ 
    border-bottom:solid 1px #eee; 
    font-weight: 600;
}
.table-m2 tbody tr td{ 
    border-bottom: dashed 1px #eee; 
}

</style>