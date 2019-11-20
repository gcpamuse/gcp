<template>
  <div>
    <table class="table-m2" cellspacing="0"> 
        <thead> 
            <tr> 
                <th>合约</th> 
                <th>买持仓</th> 
                <th>买入价</th>
                <th>卖持仓</th> 
                <th>卖出价</th> 
                <th>成交时间</th>
            </tr> 
        </thead> 
        <tbody>
            <tr>
                <td>合计</td>
                <td>0</td>
                <td>2300.00</td>
                <td>0</td>
                <td>0.00</td>
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
.table{
    font-size: 14px;
    font-weight: normal;
    padding: 8px 0;
}
.table-m2 thead tr th{ 
    border-bottom:solid 1px #eee; 
    font-weight: 600;
}
.table-m2 tbody tr td{ 
    border-bottom: dashed 1px #eee; 
}
</style>