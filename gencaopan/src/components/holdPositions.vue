<template>
  <div>
    <table class="table-m2" cellspacing="0"> 
        <thead> 
            <tr> 
                <th>合约</th> 
                <th>多空</th> 
                <th>数量</th>
                <th>均价</th> 
                <th>盈亏</th> 
                <!-- <th>日期</th> -->
            </tr> 
        </thead> 
        <tbody>
            <tr v-for="item in list" :key="item.id">
                <!-- <td>铜2005</td>
                <td>空单</td>
                <td>1</td>
                <td>5840</td>
                <td>60</td>
                <td>2019-12-06</td> -->
                <td>{{item.instrumentId}}</td>
                <td>{{item.longShort}}</td>
                <td>{{item.pos}}</td>
                <td>{{item.positionPrice}}</td>
                <td>{{item.positionProfit}}</td>
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
        this.chicang();
    },
    methods:{
        chicang(){
            var params = { 
                id: this.id,
            };
            console.log("!!!!!!!"+this.id);
            this.$axios.post('/futures/position',params).then(res=>{
                console.log(res)
                this.list = res.data.data;
            })
            .catch( error=>{
        　　　　console.log(error);
        　　});
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