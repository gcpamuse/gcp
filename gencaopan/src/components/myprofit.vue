<template>
  <div>
      <div class="heard" :style="bgImg">
          <div class="top">¥66.66</div>
          <div class="middle">总收益</div>
          <div class="bottom">
              <div class="kuang">来源</div>
              <div class="kuang">金额</div>
              <div class="ka">时间</div>
          </div>
      </div>
      <div class="count" v-for="(i,index) in 6" v-bind="index" :key="i">
            <div class="shang">打赏</div>
            <div class="shang">¥30.66</div>
            <div class="shang">2019-11-1</div>
      </div>
      <div style="height:50px;"></div>
  </div>
</template>

<script>
export default {
    beforeCreate () {
        document.querySelector('body').setAttribute('style', 'background-color:#f2f2f2')
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
            }
        }
    }, 
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
        border-bottom: 1px solid rgba(105, 105, 105,0.2);
        background-color: #fff;
        &:last-child{
            border-bottom: 0;
        }
        .shang{
            width: 33.33%;
        }
    }
</style>