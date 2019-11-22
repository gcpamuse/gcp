<template>
  <div>
       <div v-if='noData'>
          暂无数据
        </div>
        <van-list 
        v-else
        v-model="loading"
        :finished="finished"
        :finished-text="finishedText"
        @load="loadMore"
        class="index-tab"> 
            <div class="list" v-for="(item,index) in list" :key="item.id" :index="index">
                <!-- <div class="imgs"><img src="../img/132.jpg" class="img"></div> -->
                <div class="imgs"><img :src="item.img" class="img"></div>
                <div class="count">
                    <!-- <p>灰太狼</p> -->
                    <p>{{item.name}}</p>
                    <!-- <p class="count_c"><span>0</span>篇笔记&nbsp;被打赏<span>0元</span></p> -->
                    <p class="count_c"><span>{{item.piece}}</span>篇笔记&nbsp;被打赏<span>{{item.price}}元</span></p>
                </div>
                <div class="guanzhu">
                    <div class="m-concern" @click="RemoveConcerns(index)">取消关注</div> 
                </div>
            </div>
        </van-list>
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
                // {
                //     name:'灰太狼',
                //     piece:0,
                //     price:0
                // },
                // {
                //     name:'徐不及',
                //     piece:0,
                //     price:0
                // },
                // {
                //     name:'naihaha',
                //     piece:0,
                //     price:0
                // },
            ],
            finished: false,
            loading: false,
            page:1,
            finishedText: "",
            pageSize: 10,
            noData: false
        }
    },
    mounted() {
    //    this.initFollow()
    },
    methods:{
        RemoveConcerns(index){
            this.list.splice(index,1);
        },
        loadMore(){
            setTimeout(() => {
                this.loading = true;
                this.initFollow();
            },1000)
            
        },
        initFollow(){
            var that = this;
            var params = { 
                page: this.page,
                pageSize: this.pageSize
            };
            this.$http.get('/api/followList', {params: params}).then(function(res){
                that.loading = false;
				let data = res.data.data.data;
                // this.list = data.data;
                if(data.data.length){
                    this.loading = false;
                    this.list = this.list.concat(data.data);
                    this.page++;
                    if (this.list.length === 0 && this.page === 1) {
                        this.noData = true
                    }
                }else{
                    that.finished = true;
                    this.finishedText = "- 没有更多了-";
                }
            })
            .catch(function(error){
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