<template>
	<div class="ratings" ref="ratings">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide"><img src="../../img/gencaopan2.png"/></div>
				<div class="swiper-slide"><img src="../../img/gencaopan2.png"></div>
			</div>
		</div>
		<div class="zimeiti">自媒体</div>
		<div style="height:6px;background:#f2f2f2;"></div>
		<div class="index-tab"> 
			<div class="tabs" v-for="(image, index) in 6" v-bind="index" :key="image">
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
			
		},
		created(){
			
		},
		mounted(){
			new Swiper ('.swiper-container', {
				direction:'horizontal',
				//播放速度
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
</style>