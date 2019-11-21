<template>
	<div class="ratings" ref="ratings">
		<div class="swiper-container">
			<div class="swiper-pagination swiper-pag">

			</div> 
			<div class="swiper-wrapper">   
				<!-- <div class="swiper-slide"> 
					<a href="javascript:;" class="swiper-pos" onClick=""> 
						<img src="../../img/zimeiti_lunbo1.jpg"  > 
						<div class="swiper-ps">证券类投顾牛散将陆续入驻</div>
					</a> 
				</div>
				<div class="swiper-slide"> 
					<a href="javascript:;" class="swiper-pos" onClick=""> 
						<img src="../../img/zimeiti_lunbo2.jpg"  > 
						<div class="swiper-ps">【ONE-77】10个月累计收益2009%！交易五年，盈利五</div>
					</a> 
				</div> -->
				<div class="swiper-slide" v-for="(image, index) in images" :index="index" :key="image.id"> 
					<a href="javascript:;" class="swiper-pos" onClick=""> 
						<img :src="image.img" /> 
						<div class="swiper-ps">{{image.text}}</div>
					</a> 
				</div> 
				<!-- <div class="swiper-slide"> 
					<a href="javascript:;" class="swiper-pos" onClick=""> 
						<img src="../../img/zimeiti_lunbo3.jpg"  > 
						<div class="swiper-ps">从3万到3600万，逻辑+价值投资的实践者</div>
					</a> 
				</div>   -->
			</div>
		</div> 
		<div class="zimeiti">自媒体</div>
		<div style="height:6px;background:#f2f2f2;"></div>
		<div class="index-tab" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="0"> 
			<div class="tabs" v-for="(image, index) in list" :index="index" :key="image.id" @click="toDetails">
				<div class="media-content">  
					<div class="media-panel"> 
						<div class="panel-left"> 
							<!-- <div class="left-title">傅海棠：怎样的品种可以做多，什么时候可以加仓</div>  -->
							<div class="left-title">{{image.title}}</div> 
							<!-- <div class="left-content">
								独孤龙谷
								<div class="left-time">2019/08/23 12:42:25</div> 
							</div>  -->
							<div class="left-content">
								{{image.user}}
								<div class="left-time">{{image.format_addtime}}</div> 
							</div> 
						</div> 
						<!-- <img src="../../img/1568117337170.jpg"   alt="傅海棠：怎样的品种可以做多，什么时候可以加仓" class="panel-img">  -->
						<img :src="image.thumb" class="panel-img">
					</div> 
				</div> 
			</div> 
		</div>
		<div class="fabu" @click="toFabu"><span>+</span> 发布</div>
		<!--  -->
	</div>
</template>

<script>
import Swiper from 'swiper';
import '../../../dist/static/css/swiper.min.css';
	export default{
		name:'ratings',
		data(){
			return{
				images:[
					{
						img: require('../../img/zimeiti_lunbo1.jpg'),
						text:'证券类投顾牛散将陆续入驻'
					},
					{
						img: require('../../img/zimeiti_lunbo2.jpg'),
						text:'【ONE-77】10个月累计收益2009%！交易五年，盈利五'
					},
					{
						img: require('../../img/zimeiti_lunbo3.jpg'),
						text:'从3万到3600万，逻辑+价值投资的实践者'
					}
				],
				list:[],
				busy:false,
				page:0,
				pageSize:10
				// list:[
				// 	{
				// 		img:'http://daoshi.simutz.com/attachments/mediaImages/1572014343221.png',
				// 		name:'独孤龙谷',
				// 		time:'2019/08/23 12:42:25',
				// 		title:'傅海棠：怎样的品种可以做多，什么时候可以加仓'
				// 	},
				// 	{
				// 		img:'http://daoshi.simutz.com/attachments/mediaImages/1574039282439.jpg',
				// 		name:'积善之家,必有余庆 ',
				// 		time:'昨天 09:08:02',
				// 		title:'德者才之王，才者德之奴'
				// 	},
				// 	{
				// 		img:'http://daoshi.simutz.com/attachments/mediaImages/1573451622454.jpeg',
				// 		name:'宁静致远',
				// 		time:'2019/11/11 13:53:42',
				// 		title:'趋势，压力，逻辑思维下单'
				// 	},
				// 	{
				// 		img:'http://daoshi.simutz.com/attachments/mediaImages/1572843068713.jpeg',
				// 		name:'文晓',
				// 		time:'2019/11/04 12:51:08',
				// 		title:'系统的力量2'
				// 	},
				// 	{
				// 		img:'http://daoshi.simutz.com/attachments/mediaImages/1569755464707.jpeg',
				// 		name:'欧阳摇摇',
				// 		time:'2019/09/29 19:11:04',
				// 		title:'未來10年股市走勢'
				// 	}
				// ]
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
			},
			loadMore(){
				this.busy = true;
				setTimeout(() => {
				this.page++
				this.getGoodLists(true)
				}, 500)
			},
			getGoodLists(flag){
				var param = { 
					page: this.page,
					pageSize:this.pageSize
					};
				this.$http.get('/api/mediaList', {params: param}).then(function(res){
					let data = res.data.data.data;
					let dataLength = data.data.length;
					console.log(dataLength)
					if (dataLength > 0) {

						this.list = this.list.concat(data.data)
					}
					
              	},function(res){
					alert("请求失败");
				})
				this.busy = false;
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
		height: 200px;
	}
	.swiper-pos {
		position: relative;
		display: block
	}
	.swiper-ps {
		position: absolute;
		left: 0;
		// bottom:10px;
		bottom:0px;
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
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
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
					height: 62px; 
					// border: 1px solid red;
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