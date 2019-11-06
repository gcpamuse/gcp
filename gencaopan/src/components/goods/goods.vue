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
				<img src="../../img/icon-5.png" class="img_top">
				<p class="yh_name">徐不疾</p>
			</div>
			<div class="middle">
				<div class="middle_count"><span class="col">累计收益率: </span>498.25%</div>
				<div class="middle_count"><span class="col">7日收益率：</span>5.25%</div>
				<div class="middle_count"><span class="col">净利润：</span>1789231.75元</div>
				<div class="middle_count"><span class="co">(推荐抄底)连续5年盈利</span></div>
			</div>
			<div class="right">
				<div class="top">
					<span>1000元/月</span>
					<van-button class="but" size="mini">包月</van-button>
				</div>
				<div class="zhong">
					<span>2800元/季</span>
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
		padding: 15px 10px 10px;
		background-color: #eee;
		width: 100%;
		border-top: 1px solid #ddd;
		.left{
			width: 20%;
			// text-align: right;
			.img_top{
				width: 60px;
				height: 60px;
				border: 1px solid #f24848;
				margin-bottom: 5px;
			}
			// .yh_name{
			// 	text-align: center;
			// }
		}
		.middle{
			width: 43%;
			.middle_count{
				line-height: 21px;
				color: #f24848;
				.col{
					color: #38c;
				}
				.co{
					color: #000;
				}
			}
		}
		.right{
			width: 32%;
			text-align: right;
			.top{
				margin-bottom: 6px;
				color: #f24848;
			}
			.zhong{
				margin-bottom: 4px;
				color: #f24848;
			}
			.xia{
				position: relative;
				.dingyue{
					display: inline-block;
					border: 1px solid #f24848;
					border-radius: 5px;
					padding: 4px;
					color: #f24848;
				}
			}
		}
	}
	.van-button--mini {
		min-width: 40px;
		height: 25px;
		line-height: 25px;
		background-color: #f24848;
		color: #fff;
		border-radius: 5px;
	}
</style>