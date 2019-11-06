<template>
	<div class="ratings" ref="ratings">
		<div class="swiper-container">
			<div class="swiper-pagination swiper-pag">

			</div> 
			<div class="swiper-wrapper">   
				<div class="swiper-slide"> 
					<a href="javascript:;" class="swiper-pos" onClick=""> 
						<img src="../../img/9007502.jpg"  > 
						<div class="swiper-ps">证券类投顾牛散将陆续入驻</div>
					</a> 
				</div>
				<div class="swiper-slide"> 
					<a href="javascript:;" class="swiper-pos" onClick=""> 
						<img src="../../img/900500.jpg"  > 
						<div class="swiper-ps">【ONE-77】10个月累计收益2009%！交易五年，盈利五</div>
					</a> 
				</div>
				<div class="swiper-slide"> 
					<a href="javascript:;" class="swiper-pos" onClick=""> 
						<img src="../../img/banner00006.jpg"  > 
						<div class="swiper-ps">为什么跟单不能挣钱！</div>
					</a> 
				</div> 
				<div class="swiper-slide"> 
					<a href="javascript:;" class="swiper-pos" onClick=""> 
						<img src="../../img/900500.jpg"  > 
						<div class="swiper-ps">从3万到3600万，逻辑+价值投资的实践者</div>
					</a> 
				</div>  
			</div>
		</div> 
		<div class="zimeiti">自媒体</div>
		<div style="height:6px;background:#f2f2f2;"></div>
		<div class="index-tab"> 
			<div class="tabs" v-for="(image, index) in 6" :index="index" :key="image.id" @click="toDetails">
				<div class="media-content">  
					<div class="media-panel"> 
						<div class="panel-left"> 
							<div class="left-title">傅海棠：怎样的品种可以做多，什么时候可以加仓</div> 
							<div class="left-content">
								独孤龙谷
								<div class="left-time">2019/08/23 12:42:25</div> 
							</div> 
						</div> 
						<img src="../../img/1568117337170.jpg"   alt="傅海棠：怎样的品种可以做多，什么时候可以加仓" class="panel-img"> 
					</div> 
				</div> 
			</div> 
		</div>
		<div class="fabu" @click="toFabu"><span>+</span> 发布</div>
		<!-- <div style="height:50px;"></div> -->
	</div>
</template>

<script>
import Swiper from 'swiper';
import '../../../dist/static/css/swiper.min.css';
	export default{
		name:'ratings',
		data(){
			return{
				
			}
		},
		props:{
			
		},
		components:{
			
		},
		methods:{
			toDetails(){
				this.$router.push({name: 'mediainfo'})
			},
			toFabu(){
				this.$router.push({name: 'release'})
			}
		},
		created(){
			
		},
		mounted(){
			new Swiper ('.swiper-container', {
				direction:'horizontal',
				//播放速度
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				loop: true,
				// 自动播放时间
				autoplay:true,
				// 播放的速度
				speed:2000,				
		　　// 这样，即使我们滑动之后， 定时器也不会被清除
		　　autoplayDisableOnInteraction : false,
			});
		}

	}
</script>

<style lang="less" scoped="scoped">
	.swiper-container{
		width: 100%;
		height: 200px;
	}
	.swiper-slide{
		width: 100%;
		height: 200px;
	}
	.swiper-slide img{
		width: 100%;
		height: 100%;
	}
	.swiper-pos {
		position: relative;
		display: block
	}
	.swiper-ps {
		position: absolute;
		left: 0;
		bottom:10px;
		padding-left: 5px;
		height: 30px;
		line-height: 30px;
		width: 100%;
		color: #fff;
		font-size: 13px;
		overflow: hidden;
		white-space: nowrap;
		background: rgba(0,0,0,.6)
	}
	.swiper-pag {
		text-align: right;
		padding-right: 10px;
		padding-right:.5rem;
		bottom: 5px;
		bottom:.25rem
	}
	.zimeiti{
		padding: 15px;
		text-align: center;
		font-size: 14px;
		border-bottom: 1px solid rgba(204, 178, 178, 0.2);
	}
	.index-tab{
		padding:0 8px;
		margin-bottom: 50px;
		.tabs{
			padding: 10px 0;
			border-bottom: 1px solid rgba(204, 178, 178, 0.2);
			&:last-child{
				border: 0;
			}
			.media-panel{
				display: flex;
				.panel-left{
					font-size: 14px;
					width: 80%;
					padding: 10px 0;
					.left-title{
						margin-bottom: 10px;
					}
					.left-content{
						font-size: 10px;
						color: #ccc;
						position: relative;
	
						.left-time{
							display: inline-block;
							position: absolute;
							right: 10px;
						}
					}
				}
				.panel-img{
					width:80px;
					height: 70px; 
					border: 1px solid red;
				}
			}
		}
	}
	.fabu{			
		position: fixed;
		bottom: 70px;
		left: 50%;
		margin-left: -70px;
		width: 140px;
		border-radius: 35px;
		background: #fff;
		text-align: center;
		box-shadow: 1px 1px 10px #888;
		color: #f42241;
		font-size: 15px;
		padding: 9px 0;
		span{
			font-size: 18px;
			font-weight: bold;
		}
	}
</style>