<template>
    <div>
        
        <table class="table-m2" cellspacing="0"> 
            <thead> 
                <tr> 
                    <th>合约</th> 
                    <th>时间</th> 
                    <th>方向</th>
                    <th>手数</th> 
                    <th>价格</th> 
                    <th>资金占比</th>  
                </tr> 
            </thead> 
            <tbody>
                <tr>
                    <td>铜 2005</td>
                    <td>11/06 14:50</td>
                    <td>买平</td>
                    <td>1</td>
                    <td>5826</td>
                    <td>--</td>
                </tr>
            </tbody> 
        </table>
  </div>
</template>

<script>
export default {
    data(){
       return{

       } 
    },
    // mounted(){
    //     this.drchengjiao();
    // },
    // methods:{
    //     drchengjiao(){
    //         var params = { 
    //             id: id,
    //         };
    //         this.$axios.post('/futures/trade',params).then(res=>{
    //             console.log(res)
    //         })
    //         .catch( error=>{
    //     　　　　console.log(error);
    //     　　});
    //     },
    // }
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
    font-size: 13px;
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