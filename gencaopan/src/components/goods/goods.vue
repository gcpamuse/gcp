<template>
	<div class="goods">
        <div data-role="header" data-fullscreen="false" data-tap-toggle="false" style="background:#fff;"> 
			<div style="margin-top:-1px;">
				<img src="../../img/gencaopan2.png" class="img" >
			</div> 
		</div> 
		<van-tabs>
			<van-tab 
				v-for="tab in tabsItem"
			 	:title="tab.name" 
				:key="tab.type">
			</van-tab>
		</van-tabs>
		<div class="conment" v-for="(i,index) in 6" :key="i.id" :index="index"> 
			<div class="left">
				<span class="daoshi_shou">收</span>
				<img src="../../img/icon-5.png" class="img_top">
				<p class="yh_name">徐不疾</p>
			</div>
			<div class="middle">
				<div class="middle_count">累计收益率:<span style="color:red">498.25%</span></div>
				<div class="middle_count">7日收益率：<span style="color:green">5.25%</span></div>
				<div class="middle_count">净利润：<span class="col">1789231.75元</span></div>
				<div class="middle_count"><span class="co">(推荐抄底)连续5年盈利</span></div>
			</div>
			<div class="right">
				<div class="top">
					<span>1000</span>元/月
					<van-button class="but" size="mini">包月</van-button>
				</div>
				<div class="zhong">
					<span>2800</span>元/季
					<van-button class="but" size="mini">包季</van-button>
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
import { Button } from 'vant';
	export default{
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
				]
			}
		},
		created(){
			
		},
		methods:{
			
		},
		computed:{
			
		},
		components:{
			
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
			width: 20%;
			margin-left: 3%;
			position: relative;
			.img_top{
				width: 60px;
				height: 60px;
				border: 1px solid #f24848;
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
			// .yh_name{
			// 	text-align: center;
			// }
		}
		.middle{
			width: 43%;
			.middle_count{
				line-height: 21px;
				color: #38c;
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
			width: 32%;
			text-align: right;
			color: #666;
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