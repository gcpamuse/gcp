<template>
  <div>
      <div class="heard" :style="bgImg">
          <img class="inner-avatar" src="../img/default_middle.png"/> 
          <div class="inner-name">{{mynotes.userName}}</div> 
          <div class="top">计划你的交易，交易你的计划</div>
          <div class="middle">
              <div class="guanzhu" @click="followBtn(user.isFollow)" :style="{backgroundColor:bg_color}">
                  +关注
              </div>
          </div>
          <div class="bottom">
              <div class="kuang" @click="wenZhang">
                    <div class="info-num">{{mynotes.articleCount}}</div> 
                    <div class="info-title">文章</div>
              </div>
              <div class="kuang" @click="shiPan">
                    <div class="info-num">0</div> 
                    <div class="info-title">实盘</div> 
              </div>
              <div class="ka">
                    <div class="info-num">{{mynotes.fansCount}}</div> 
                    <div class="info-title">粉丝</div>
              </div>
          </div>
      </div>
      <div class="mine-article" v-show="traderList" v-for="(item,index) in articleList" :key="item.id" :index="index">  
        <div class="media-panel"> 
            <div class="panel-left" @click="toDetails(item.id)"> 
                <div class="left-title" v-html="item.title"></div> 
                <div class="left-title">{{item.name}}</div> 
                <div class="left-content">
                    <div class="left-time">{{item.createAt}}</div>
                </div> 
            </div> 
            <img :src="'/api'+item.cover" alt="" class="panel-img"> 
        </div>  
      </div> 
      <div class="conment" v-show="shipan">
        <!-- <div  @click="toNote" style="width: 80%;">
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
        </div> -->
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
            shipan:false,
            id:this.$route.params.id,
            mynotes:{},
            articleList:[],
            bg_color:"FF0D11"
        }
    }, 
    created(){
        this.initdata()
    },
    methods:{
        toDetails(uid){
            this.$router.push({name: 'mediainfo',params:{id:uid}})
        },
        followBtn(Follow){
            if(!Follow){
                var params = { 
                    isFollow: true,
                    followId: this.id
                };
                console.log(params)
                this.$axios.post('user/follow',params).then( res=>{
                    console.log(res)
                    if(res.data.code!==200) return
                    this.bg_color="#ccc"
                })
                .catch( error=>{
            　　　　console.log("出错喽："+error);
            　　});
            }else{
                this.$toast('你已关注')
            }
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

        },
        initdata(){
            var params = { 
                id:this.id
            };
            this.$axios.post('/article/person',params).then( res=>{
                this.mynotes = res.data.data;
                this.articleList=res.data.data.articleList;
                console.log(res)
            })
            .catch( error=>{
        　　　　console.log("出错喽："+error);
        　　});
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
        border-bottom: 1px solid rgba(204, 178, 178, 0.2);
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
                    .left-time{
                        padding-right: 10px;
                        text-align: right;
                    }
                }
            }
            .panel-img{
                width: 70px;
                height: 56px;
            }
        }
    }
    .conment{
		display: flex;
		font-size: 12px;
		padding:15px 0 10px 0px;
		background-color: #fff;
		width: 100%;
		// border-bottom: 1px solid #ddd;
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