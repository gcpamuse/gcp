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
                    <!-- <th>资金占比</th>   -->
                </tr> 
            </thead> 
            <tbody>
                <tr v-for="item in list" :key="item.id">
                    <!-- <td>铜 2005</td>
                    <td>11/06 14:50</td>
                    <td>买平</td>
                    <td>1</td>
                    <td>5826</td>
                    <td>--</td> -->
                    <td>{{item.instrumentId}}</td>
                    <td>{{item.tradeDateTime}}</td>
                    <td>{{item.directionOffset}}</td>
                    <td>{{item.volume}}</td>
                    <td>{{item.price}}</td>
                </tr>
            </tbody> 
        </table>
  </div>
</template>

<script>
export default {
    data(){
       return{
           list:[]
       } 
    },
    props:["id"],
    mounted(){
        this.drchengjiao();
    },
    methods:{
        drchengjiao(){
            var params = { 
                id: this.id,
            };
            this.$axios.post('/futures/trade',params).then(res=>{
                console.log(res)
                this.list = res.data.data;   
            })
            .catch( error=>{
        　　　　console.log(error);
        　　});
        console.log("asdfgg"+this.id)
        },
    }
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