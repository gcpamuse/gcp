<template>
  <div>
      <div class="heard" :style="bgImg">
          <img class="inner-avatar" src="../img/default_middle.png"/> 
          <div class="inner-name">哈哈哈</div> 
          <div class="top">计划你的交易，交易你的计划</div>
          <div class="middle">
              <div class="guanzhu" @click="guanZhu">
                  +关注
              </div>
          </div>
          <div class="bottom">
              <div class="kuang" @click="wenZhang">
                    <div class="info-num">1</div> 
                    <div class="info-title">文章</div>
              </div>
              <div class="kuang" @click="shiPan">
                    <div class="info-num">0</div> 
                    <div class="info-title">实盘</div> 
              </div>
              <div class="ka">
                    <div class="info-num">0</div> 
                    <div class="info-title">粉丝</div>
              </div>
          </div>
      </div>
      <div class="mine-article" v-show="traderList">  
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
      <div class="conment" v-show="shipan">
        <div  @click="toNote" style="width: 80%;">
            <div class="left">
                <span class="daoshi_shou">收</span>
                <img src="../img/132.jpg" class="img_top">
                <p class="yh_name">灰太狼</p>
            </div>
            <div class="middle">
                <div class="middle_count">累计收益率:<span style="color:red">498.25%</span></div>
                <div class="middle_count">最大回撤率：<span>5.25%</span></div>
                <div class="middle_count">资金量：<span class="col">1789231.75元</span></div>
                <div class="middle_count"><span class="co">最好是好的敌人(推荐抄底)</span></div>
            </div>
        </div>       
        <div class="right">
            <div class="top">
                <span>1000</span>元/月
                <van-button class="but" size="mini" @click="subsByDate">包月</van-button>
            </div>
            <div class="zhong">
                <span>2800</span>元/季
                <van-button class="but" size="mini" @click="subsByDate">包季</van-button>
            </div>
            <div class="xia">
                <div class="dingyue">1242人已订阅</div>
            </div>
        </div>
	  </div>  
      <div style="height:50px;"></div>
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
            traderList:true,
            shipan:false
        }
    }, 
    methods:{
        toDetails(){
            this.$router.push({name: 'mediainfo'})
        },
        guanZhu(){
            this.$toast.fail('自己无法关注自己')
        },
        wenZhang(){
            this.traderList=true;
            this.shipan=false;
        },
        shiPan(){
            this.shipan=true;
            this.traderList=false;
        },
        toNote(){
            this.$router.push({name: 'wechatPay',params: { id: 1}})
        },
        subsByDate(){

        }
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
            padding: 13px 0;
            background-color: rgba(0,0,0,0.4);
            font-size: 10px;
            .kuang,.ka{
                width: 33.33%;
                .info-num{
                    margin-bottom: 6px;
                    font-size: 12px;
                }
            }
            .kuang{
                border-right: 1px solid #fff;
            }
        }
    }
    .mine-article{
        .media-panel{
            background-color: #fff;
            display: flex;
            padding: 10px 0;
            .panel-left{
                width: 76%;
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
                width: 70px;
            }
        }
    }
    .conment{
		display: flex;
		font-size: 12px;
		padding:15px 0 10px 0px;
		background-color: #fff;
		width: 100%;
		border-bottom: 1px solid #ddd;
		.left{
			margin-left: 4%;
			position: relative;
			float: left;
			.img_top{
				width: 60px;
				height: 60px;
				margin-bottom: 2px;
			}
			.daoshi_shou{
				position: absolute;
				top:-6px;
				left:-5px;
				display: block;
				width: 20px;
				height: 20px;
				background: #f55;
				text-align: center;
				line-height: 18px;
				color: #fff;
				border-radius: 50%;
			}
			.yh_name{
                text-align: center;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 1;
				overflow: hidden;
			}
		}
		.middle{
			width:68%;
			float: right;
			@media only screen and (max-width:320px){
				width:66%;;
			}
			.middle_count{
				line-height: 19px;
				.co{
					font-weight: normal;
					font-size: 12px;
				}
				span{
					color: #333;
					font-size: 13px;
					font-weight: bold;
				}
			}
		}
		.right{
			width:35%;
			text-align: right;
			color: #666;
            margin-right: 3%;
			.top{
				margin-bottom: 5px;
			}
			.top>span{
				margin-bottom: 6px;
				color:red;
			}
			.zhong{
				margin-bottom: 3px;
			}
			.zhong>span{
				margin-bottom: 4px;
				color:red;
			}
			.xia{
				position: relative;
				.dingyue{
					display: inline-block;
					border: 1px solid red;;
					border-radius: 5px;
					padding: 4px;
					color:red;
				}
			}
			
		}
    }
    .van-button--mini {
		min-width: 38px;
		height: 24px;
		line-height: 20px;
		background-color: #f24848;
		color: #fff;
		border-radius: 5px;
	}
</style>