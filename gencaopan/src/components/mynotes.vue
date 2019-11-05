<template>
  <div>
      <div class="heard" :style="bgImg">
          <img class="inner-avatar" src="../img/default_middle.png"/> 
          <div class="inner-name">哈哈哈</div> 
          <div class="top">¥66.66</div>
          <div class="middle">总收益</div>
          <div class="bottom">
              <div class="kuang">
                    <div class="info-num">0</div> 
                    <div class="info-title">文章</div>
              </div>
              <div class="kuang">
                    <div class="info-num traderListNum">0</div> 
                    <div class="info-title">实盘</div> 
              </div>
              <div class="ka">
                    <div class="info-num follow_number">0</div> 
                    <div class="info-title">粉丝</div>
              </div>
          </div>
      </div>
      <div style="height:50px;"></div>
  </div>
</template>

<script>
export default {
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
</style>