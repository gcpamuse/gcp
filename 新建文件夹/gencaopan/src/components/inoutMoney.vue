<template>
    <div>
        <div class="jy_count" v-for="item in inoutList" :key="item.id"> 
            <div>{{item.ocname}}</div> 
            <div v-html="item.money"></div> 
            <div>{{item.dateline}}</div> 
        </div> 
    </div>
</template>

<script>
export default {
    data(){
        return{
            inoutList:[]
        }
    },
    mounted(){
        // this.$http.get('/api/inout').then((res) => {
		// 	let data = res.data.data;
        //     this.inoutList = data.data;
		// });
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