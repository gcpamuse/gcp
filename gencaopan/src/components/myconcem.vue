<template>
  <div>
       <div v-if='noData'>
          暂无数据
        </div>
        <div class="list" v-for="(item,index) in list" :key="item.id" :index="index">
            <div class="imgs" @click="toNotes"><img :src="item.portrait" class="img"></div>
            <div class="count" @click="toNotes">
                
                <p>{{item.userName}}</p>
                <p class="count_c"><span>{{item.articleCount}}</span>篇笔记&nbsp;被打赏<span>{{item.articleCount}}元</span></p>
            </div>
            <div class="guanzhu">
                <div class="m-concern" @click="RemoveConcerns(index,item.id)">取消关注</div> 
            </div>
        </div>
        
  </div>
</template>

<script>
export default {
    beforeCreate () {
        document.querySelector('body').setAttribute('style', 'background-color:#efeff4')
    },
    beforeDestroy () {
        document.querySelector('body').removeAttribute('style')
    },
    data(){
        return{
            list:[
                //41
            ],
            finished: false,
            loading: false,
            page:1,
            finishedText: "",
            pageSize: 10,
            noData: false
        }
    },
    created() {
       this.intndata()
    },
    methods:{
        RemoveConcerns(index,id){
            var params = { 
                isFollow: false,
                followId: id
            };
            console.log(params)
            this.$axios.post('user/follow',params).then( res=>{
                console.log(res)
            })
            .catch( error=>{
        　　　　console.log("出错喽："+error);
        　　});
            this.list.splice(index,1);
        },
        toNotes(){
            this.$router.push({name: 'looknotes'})
        },
        
        intndata(){
          
            this.$axios.post('/user/follows').then( res=>{
                console.log(res.data)
                this.list = res.data.data;
            })
            .catch( error=>{
        　　　　console.log("出错喽："+error);
        　　});
        }
    }
}
</script>

<style lang="less" scoped="scoped">
    .list{
        display: flex;
        padding: 12px 0;
        border-bottom: 1px solid rgb(231, 227, 227);
        background-color: #fff;
        .imgs{
            width: 15%;
            text-align: center;
            .img{
                width: 35px;
                height: 35px;
            }
        }
        .count{
            width: 64%;
            .count_c{
                font-size: 12px;
                line-height: 18px;
                color: rgb(160, 156, 156);
                span{
                    color: rgb(250, 6, 6,0.7);
                }
            }
        }
        .guanzhu{
            width: 21%;
            padding-right: 8px;
            margin-top: 6px;
            .m-concern{
                font-size: 12px;
                color: #ccc;
                border: 1px solid #ccc;
                text-align: center;
                padding: 5px;
                border-radius: 15px;
            }
        }
    }
</style>