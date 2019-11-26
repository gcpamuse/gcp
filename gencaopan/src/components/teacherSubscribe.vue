<template>
<div class="mybook"> 
    <table class="table-m2 mt10" cellspacing="0"> 
        <thead> 
            <tr> 
                <th>导师</th> 
                <th>导师收益</th> 
                <th>订阅时间</th> 
                <th>状态</th> 
                <th>操作</th> 
            </tr> 
        </thead> 
        <tbody id="teacherList"> 
            <tr v-for="(item,index) in teacherList" :key="item.id" :index='index'>
                <td style="text-align:left;padding-left:.5rem">
                    <a data-ajax="false" class="" href="">
                        <span class="daoshi_shou" style="font-size:.700rem;" v-if="item.free == 1">收</span>
                        <span class="daoshi_shou" style="font-size:.700rem;" v-else>免</span>
                        {{item.nickname}}
                    </a>
                </td>
                <td v-if="item.profit == 0">0</td>
                <td v-else>
                    <span style="color:red;" v-if="item.profit > 0">+</span>
                    <span style="color:green;"  v-else-if="item.profit < 0">-</span>
                    {{Math.abs(item.profit)}}
                </td>
                <td style="font-size:12px">
                   {{item.start_time}}<br/>
                   {{item.end_time}}
                </td>
                <td><a class="callof" data-ajax="false" href="">续订</a></td>
                <td><a href="javascript:;" data-ajax="false" @click="teacherSth(index)">移除</a></td>
            </tr>
        </tbody> 
    </table> 
     <p v-show="anyOne" style="text-align: center;margin: 10px 0;font-size: 12px;">您还没有订阅任何导师的信号哦！</p>
</div> 
	
</template>

<script>

export default {
    data(){
        return{
            teacherList:[],
            anyOne:false
        }
    },
    methods:{
        teacherSth(index){
           this.teacherList.splice(index,1);
        }
    },
    mounted(){
        let that =this;
        that.$http.get('/api/teacherSubscribe').then((res) => {
            let data = res.data.data.data
            this.teacherList = data;
            if (this.teacherList.length == 0) this.anyOne = true
        });
        // that.$axios.post('http://192.168.0.99:8080/user/subscribes').then(function(res){
        //    console.log(res.data)
        // },function(res){
        //     alert("请求失败");
        // })
    }
}
</script>

<style lang="less" scoped="scoped">
.table-m2{  
    width: 100%; 
}
.table-m2 thead tr th,
.table-m2 tbody tr td{ 
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
// .table-m2 tbody tr:last-child td{ 
//     border-bottom: none; 
// }

.daoshi_shou,.daoshi_mian{
    display:inline-block;
    width:16px;
    height:16px;
    text-align:center;
    line-height:16px;
    color:#fff;
    font-weight: normal;
    border-radius:50%;
}
.daoshi_shou{
    background:#f55;
}
.daoshi_mian{
    background:green;
}
.mybook .table-m2 a{ 
    color: #666; 
    font-weight: normal; 
}
.mybook .table-m2 a.callof{ 
    padding: .125rem .313rem;
    background-color: #eee; 
}
.mybook .table-m2 span{ 
    margin-right: .188rem; 
    font-size: .875rem; 
    font-weight: bold; 
}
</style>
