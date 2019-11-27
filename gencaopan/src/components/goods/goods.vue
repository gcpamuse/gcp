<template>
	<div class="goods">
        <div data-role="header" data-fullscreen="false" data-tap-toggle="false" style="background:#fff;"> 
			<div style="margin-top:-1px;">
				<img src="../../img/sy_qihuo2.jpg" class="img" >
			</div> 
		</div> 
		<van-tabs @click="scroller">
			<van-tab 
				v-for="tab in tabsItem"
			 	:title="tab.name" 
				:key="tab.type"
				>
			</van-tab>
		</van-tabs>
		<div class="conment" v-for="(item,index) in list" :key="item.id" :index="index">
			<div  @click="toDetails" style="width: 80%;">
				<div class="left">
					<span class="daoshi_shou" v-if="item.free == 1">收</span>
					<span class="daoshi_shou" v-else>免</span>
					<!-- <img src="../../img/132.jpg" class="img_top"> -->
					<img :src="'http://tg.simutz.com/avatar/'+ item.uid + '_middle.jpg'" alt="" class="img_t">
					<p class="yh_name">{{item.nickname}}</p>
				</div>
				<div class="middle">
					<div class="middle_count">累计收益率:<span :style="{'color':(item.profit_rate >= 0 ? 'red':'green')}">{{item.profit_rate}}%</span></div>
					<div class="middle_count">7日收益率：<span :style="{'color':(item.week_yield >= 0 ? 'red':'green')}">{{item.week_yield}}%</span></div>
					<div class="middle_count">净利润：<span class="col">{{item.tn_profit}}元</span></div>
					<div class="middle_count"><span class="co">{{item.mark}}</span></div>
				</div>
			</div>
			
			<div class="right">
				<div class="top">
					<span>{{item.month_price}}</span>元/月
					<van-button class="but" size="mini" @click="subsByDate">包月</van-button>
				</div>
				<div class="zhong">
					<span>{{item.quarter_price}}</span>元/季
					<van-button class="but" size="mini" @click="subsByDate">包季</van-button>
				</div>
				<div class="xia">
					<div class="dingyue">{{item.total_subscribe_person}}人已订阅</div>
				</div>
			</div>
			<van-dialog v-model="modePop" title="请阅者承诺" @confirm='determine' confirm-button-color='#0BB20C'>
				<div class="content"> 
					<p>1、仅作为自己学习之用，不违法违规使用和传播本软件的任何信息。</p>
					<p>2、知晓投资风险，并且自行承担所有交易风险。</p>
					<p>3、理解并接受因微信技术障碍/通讯延迟/网络传输不畅等原因导致相送信息延迟发送或不发送的情况。</p>
					<p>4、确认您已经关注本公众号（期学堂），成功关注后才能接收订阅信息</p>
					<p>5、点击确定代表您已经阅读并同意《期学堂软件信息服务协议》。</p>
				</div>
            
        	</van-dialog>
		</div>
		
		
	</div>
	
</template>

<script>

import jsonp from 'jsonp';
import { Button } from 'vant';
	export default{
		beforeCreate () {
        document.querySelector('body').setAttribute('style', 'background-color:#f9f9f9')
		},
		beforeDestroy () {
			document.querySelector('body').removeAttribute('style')
		},
		name:'goods',
		props:{
			
		},
		data(){
			return{
				tabsItem: [
					{
					name: "推荐导师",
					status: 0
					},
					{
					name: "累计收益",
					status: 1
					},
					{
					name: "最大回撤",
					status: 2
					},
					{
					name: "资金量",
					status: 3
					},
					{
					name: "胜率",
					status: 3
					}
				],
				modePop:false,
				list:[],
				page:1,
				pageSize:8,
				id:''
			}
		},
		methods:{
			subsByDate(){
				this.modePop = true;
				var params = { 
					id: this.id,
				};
				this.$axios.post('http://192.168.0.99:8080/order/subscribe',params).then((res) => {
                    console.log(res)
				});
			},
			determine(){
				this.$router.push({name: 'zhifu'})
			},
			toDetails(){
				this.$router.push({name: 'futuresDetails',params:{id:this.id}})
			},
			scroller(){
				var params = { 
					currentPage: this.page,
					pageSize: this.pageSize
            	};
				this.$axios.post('http://192.168.0.99:8080/futures/index',params).then((res) => {
					console.log(res.data.data.rows)
				});
			}
		},
		mounted(){
			
			this.$http.get('/api/teacherList').then((res) => {
			   
				let data = res.data.data.data;
   				this.list = data.data;
			});
		}
	}
</script>

<style lang="less" scoped="scoped">
	.goods{
		img {
			max-width: 100%;
			height: auto;
			text-align: center;
			vertical-align: top;
			border: 0;
		}
	}
	.conment{
		display: flex;
		font-size: 12px;
		padding:15px 0 10px 0px;
		background-color: #f9f9f9;
		width: 100%;
		border-top: 1px solid #ddd;
		.left{
			// width: 20%;
			margin-left: 3%;
			position: relative;
			float: left;
			.img_top{
				width: 60px;
				height: 60px;
				// border: 1px solid #f24848;
				margin-bottom: 5px;
			}
			.daoshi_shou{
				position: absolute;
				top:-6px;
				left:-5px;
				display: block;
				width: 18px;
				height: 18px;
				background: #f55;
				text-align: center;
				line-height: 18px;
				color: #fff;
				border-radius: 50%;
			}
			.img_t{ 
				width: 60px; 
				height: 60px; 
			}
			.yh_name{
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 1;
				overflow: hidden;
			}
		}
		.middle{
			width:70%;
			float: right;
			@media only screen and (max-width:320px){
				width:66%;;
			}
			.middle_count{
				line-height: 20px;
				color: #38c;
				.co{
					font-weight: normal;
					font-size: 12px;
					display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    overflow: hidden;
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
	.content{
		padding:12px 20px;
		font-size: 14px;
		color: #888;
		word-wrap: break-word;
		word-break: break-all;
		text-align: left;
		p{
			line-height: 18px;
		}
	}
	.van-dialog{
		/deep/ .van-dialog__header {
			padding-top: 12px;
		}
	}
</style>