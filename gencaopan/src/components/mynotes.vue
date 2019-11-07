<template>
  <div>
      <div class="heard" :style="bgImg">
          <img class="inner-avatar" src="../img/default_middle.png"/> 
          <div class="inner-name">哈哈哈</div> 
          <div class="top">计划你的交易，交易你的计划</div>
          <div class="middle">
              <div class="guanzhu">
                  +关注
              </div>
          </div>
          <div class="bottom">
              <div class="kuang">
                    <div class="info-num">0</div> 
                    <div class="info-title">文章</div>
              </div>
              <div class="kuang">
                    <div class="info-num">0</div> 
                    <div class="info-title">实盘</div> 
              </div>
              <div class="ka">
                    <div class="info-num">0</div> 
                    <div class="info-title">粉丝</div>
              </div>
          </div>
      </div>
      
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
        padding-top: 10px;
        .inner-avatar{
            border-radius: 5px;
        }
        .inner-name{
            margin-top: 10px;
            font-size: 14px;
        }
        .top{
            margin-top: 12px;
            font-size: 12px;
        }
        .middle{
            margin-top: 15px;
            font-size: 12px;
            .guanzhu{
                border: 1px solid rgb(240, 16, 16);
                width: 60px;
                padding: 6px 12px;
                margin: 0 auto;
                border-radius: 15px;
                background-color: rgb(240, 16, 16);
            }
        }
        .bottom{
            margin-top: 10px;
            display: flex;
            width: 100%;
            color: #fff;
            padding: 15px 0;
            background-color: rgba(3, 3, 3,0.5);
            font-size: 14px;
            .kuang{
                width: 33.33%;
                border-right: 1px solid #fff;
                .info-num{
                    margin-bottom: 4px;
                }
            }
            .ka{
                width: 33.33%;
                .info-num{
                    margin-bottom: 4px;
                }
            }
        }
    }
</style>