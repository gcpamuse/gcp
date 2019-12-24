<template>
<div class="ary">
    <div class="superior-con">
        <h5 class="numone">账户概述</h5> 
        <div class="table">
            <div class="table_c" v-for="(item,index) in gaishu" :key="item.id" :index="index">
                <div>{{item.name}}</div>
                <div>
                    {{item.value}}<span>{{item.ext}}</span>
                </div>
            </div>
        </div>

        <h5 class="numone">盈利能力</h5> 
        <div class="table">
            <div class="table_c" v-for="(item,index) in tingli" :key="item.id" :index="index">
                <div>{{item.name}}</div>
                <div>{{item.value}}<span>{{item.ext}}</span></div>
            </div>
        </div>
        
        <h5 class="numone">稳定性</h5> 
        <div class="table1">
            <div class="table_c" v-for="(item,index) in wendx" :key="item.id" :index="index">
                <div>{{item.name}}</div>
                <div>{{item.value}}<span>{{item.ext}}</span></div>
            </div>
        </div>
        
    </div>
</div> 
</template>

<script>
export default {
    name:"ary",
    data(){
        return{
            gaishu:[],
            tingli:[],
            wendx:[]
        }
    },
    mounted(){
        this.logdata();
        this.initData();
    },
    methods:{
        logdata(){
            // this.$http.get("/api/majorlist1").then(function(response){
            this.$http.get("/static/gaikuang.json").then(function(response){
                let data = response.data.data.stat;
                this.gaishu = data.a;
                this.tingli = data.b;
                this.wendx = data.c;
        　　})
        　　.catch(function(error){
        　　　　console.log("出错喽："+error);
        　　});
        },
        initData(){
            var params = { 
                id: this.id,
            };
            this.$axios.post('/futures/info',params).then(res=>{
                console.log(res)
            })
            .catch( error=>{
        　　　　console.log(error);
        　　});
        },
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
        .table,.table1{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            padding: 8px 0;
            border-bottom: 2px solid #eee;
            .table_c{
                width: 50%;
                display: flex;
                font-size: 12px;
                line-height: 22px;
                div{
                    width: 50%;
                    text-align: center;
                    color: #666;
                }
            }
        }
        .table1{
           border-bottom: 0; 
        }
        .table-m1{
            width: 100%;
            text-align: center;
            font-size: 12px;
            border-bottom: 2px solid #eee;
            color: #666;
            tr{
                line-height: 25px;
            }
            .xuxian{
                border-bottom: 1px dashed #eee;
            }
        }
        .tm{
            border: 0;
        }
    } 
</style>