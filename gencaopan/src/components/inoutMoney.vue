<template>
    <div>
        <div class="jy_count" v-for="item in goldDetails" :key="item.id"> 
            <div>{{item.goldType}}</div> 
            <div :style="{'color':(item.goldType == '入金' ? 'red':'green')}" v-html="item.amount"></div> 
            <div>{{item.tday}}</div> 
        </div> 
    </div>
</template>

<script>
export default {
    data(){
        return{
            inoutList:[],
            goldDetails:[]
        }
    },
    props:["id"],
    mounted(){
        // this.$http.get('/api/inout').then((res) => {
		// 	let data = res.data.data;
        //     this.inoutList = data.data;
        // });
        // this.$http.get('/static/data.json').then((res) => {
        //     console.log(res.data)
        //     this.inoutList = res.data.inout.data;
        // });
        this.initData();
    },
    methods:{
        initData(){
            var params = { 
                id: this.id,
            };
            this.$axios.post('/futures/info',params).then(res=>{
                console.log(res.data.data)
                let data = res.data.data;
                this.goldDetails = data.goldDetails;
                // console.log(this.data.newDate+"...+...."+data.goldDetails)
            })
            .catch( error=>{
        　　　　console.log(error);
        　　});
        console.log("++++++||||||||"+this.id)
        }
    }
}
</script>

<style lang="less" scoped="scoped">
.jy_count{
    display: flex;
    font-size: 13px;
    text-align: center;
    border-bottom: 1px dashed #eee;
    div{
        width: 33.33%;
        padding: 10px 0;
    }
}
</style>