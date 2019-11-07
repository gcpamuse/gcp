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
                    <div class="info-num">1</div> 
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
      <div class="mine-article">  
        <div class="media-panel"> 
            <div class="panel-left" @click="toDetails"> 
                <div class="left-title">灰太狼交易模式解析</div> 
                <div class="left-title"></div> 
                <div class="left-content">
                    <div class="left-time">2018/12/20 11:06:43</div>
                </div> 
            </div> 
            <img src="../img/1568117337170.jpg" alt="" class="panel-img"> 
        </div>  
      </div> 
      <div class="mine-vp datalist traderList" style="display:none">   
        <div class="mine-vp-panel"> 
            <div class="m-vp-p-box m-vp-p-box-l"> 
                <div class="box-img">
                    <img class="box-avatar" width="60" height="60" src="../img/132.jpg"/>   
                    <img class="box-icon" src="../img/ico_get.png"/>   
                </div> 
                <div class="box-title">灰太郎</div> 
            </div> 
            <div class="m-vp-p-box m-vp-p-box-m"> 
                <div class="box-p">
                    <span class="p-title">累计收益率:</span>
                    <span class="p-red">956.13%</span>
                </div> 
                <div class="box-p">
                    <span class="p-title">最大回撤率:</span>
                    <span>94.00%</span>
                </div> 
                <div class="box-p">
                    <span class="p-title">资金量:</span>
                    <span>1,345,612元</span>
                </div> 
                <div class="box-p">
                    <span>最好是好的敌人（推荐抄底）</span>
                </div> 
            </div>  
            <div class="m-vp-p-box m-vp-p-box-r m-vp-p-box-s"> 
                <div class="box-btn" onClick="showDetail('wechatPay')">
                    <span>1000</span>元/月
                    <div class="u-btn box-btn1">包月</div>
                </div> 
                <div class="box-btn" onClick="showDetail('wechatPay')">
                    <span>2800</span>元/季
                    <div class="u-btn box-btn1">包季</div>
                </div> 
                <div class="box-btn">
                    <div class="box-num">1582人已订阅</div>
                </div> 
            </div>  
        </div> 
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
    methods:{
        toDetails(){
            this.$router.push({name: 'mediainfo'})
        },
    }
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
    .mine-article{
        .media-panel{
            background-color: #fff;
            display: flex;
            padding: 10px 0;
            .panel-left{
                width: 78%;
                padding-left: 10px;
                font-size: 14px;
                .left-title{
                    line-height: 20px;
                }
                .left-content{
                    line-height: 22px;
                    font-size: 10px;
                    color: #ccc;
                }
            }
            .panel-img{
                width: 60px;
                border: 1px solid red;
            }
        }
    }
</style>