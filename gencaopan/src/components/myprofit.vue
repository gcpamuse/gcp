<template>
  <div>
      <div class="heard" :style="bgImg">
          <div class="top">¥{{money}}</div>
          <div class="middle">总收益</div>
          <div class="bottom">
              <div class="kuang">来源</div>
              <div class="kuang">金额</div>
              <div class="ka">时间</div>
          </div>
      </div>
      
      <div class="count" v-for="(i,index) in list" :index="index" :key="i.id">
            <div class="shang">{{i.relationshipType}}</div>
            <div class="shang">¥{{i.accountAmount}}</div>
            <div class="shang">{{i.createAt}}</div>
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
            bgImg:{
                backgroundImage:"url("+require('../img/bg_mine.png')+")",
                backgroundRepeat: "no-repeat",
                backgroundSize:'100% 100%'
            },
            money: 0,
            list:{}
        }
    },
    mounted() {
       this.initProfit()
    },
    methods:{
        initProfit(){
        
            this.$axios.post('/tutor/profit').then(res => {
                console.log(res)
                this.list = res.data.data.list;
                this.money = res.data.data.total;
            })
            .catch(error => {
         　　　　console.log("出错喽："+error);
         　　});
        }
    } 
}
</script>

<style lang="less" scoped="scoped">
    .heard{
        text-align: center;
        color: #fff;
        .top{
            padding-top: 20px;
        }
        .middle{
            margin-top: 10px;
        }
        .bottom{
            margin-top: 30px;
            display: flex;
            width: 100%;
            color: #fff;
            padding: 10px 0;
            background-color: rgba(0, 0, 0,0.8);
            font-size: 14px;
            .kuang{
                width: 33.33%;
                border-right: 1px solid #fff;
            }
            .ka{
                width: 33.33%;
            }
        }
    }
    .count{
        display: flex;
        width: 100%;
        padding: 10px 0;
        text-align: center;
        font-size: 14px;
        border-bottom: 1px solid rgba(167, 165, 165, 0.2);
        background-color: #fff;
        &:last-child{
            border-bottom: 0;
        }
        .shang{
            width: 33.33%;
        }
    }
</style>