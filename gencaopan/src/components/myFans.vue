<template>
  <div>
    <div class="list" v-for="(item,index) in list" :key="item.id" :index="index">
        <!-- <div class="imgs"><img src="../img/132.jpg" class="img"></div>
        <div class="count">
            <p>灰太狼</p>
            <p class="count_c"><span>0</span>篇笔记&nbsp;被打赏<span>0元</span></p>
        </div> -->
        <div class="imgs"><img :src="item.img" class="img"></div>
        <div class="count">
            <p>{{item.name}}</p>
            <p class="count_c"><span>{{item.piece}}</span>篇笔记&nbsp;被打赏<span>{{item.price}}元</span></p>
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
            list:[]
        }
    },
    mounted() {
       this.initFollow()
    },
    methods:{
        RemoveConcerns(index){
            this.list.splice(index,1);
        },
        initFollow(){
        //     this.$http.get('/api/followList').then(function(res){
		// 		let data = res.data.data.data;
		// 		this.list = data.data;	
        //     })
        //     .catch(function(error){
        // 　　　　console.log("出错喽："+error);
        // 　　});
            this.$axios.get('/api/followList').then(res => {
                let data = res.data.data.data;
		 		this.list = data.data;
            })
            .catch(error => {
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
            width: 85%;
            .count_c{
                font-size: 12px;
                line-height: 18px;
                color: rgb(160, 156, 156);
                span{
                    color: rgb(250, 6, 6,0.7);
                }
            }
        }
    }
</style>