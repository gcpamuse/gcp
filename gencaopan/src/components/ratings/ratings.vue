<template>
	<div class="ratings" ref="ratings">
		<div class="swiper-container">
			<div class="swiper-pagination swiper-pag">

			</div> 
			<div class="swiper-wrapper">   
				<!-- 8 -->
				<div class="swiper-slide" v-for="(image, index) in images" :index="index" :key="image.id"> 
					<a href="javascript:;" class="swiper-pos" onClick=""> 
						<img :src="image.img" /> 
						<div class="swiper-ps">{{image.text}}</div>
					</a> 
				</div> 
				<!-- 15 -->
			</div>
		</div> 
		<div class="zimeiti">自媒体</div>
		<div style="height:6px;background:#f2f2f2;"></div>
		<div v-if='noData'>
          暂无数据
        </div>
		<van-list 
			v-model="loading"
			:finished="finished"
			finished-text="暂无更多数据"
			@load="loadMore"
			class="index-tab"> 
			<div class="tabs" v-for="(image, index) in list" :index="index" :key="image.id" @click="toDetails(image.id)">
				<div class="media-content">  
					<div class="media-panel"> 
						<div class="panel-left"> 
							<div class="left-title" v-html="image.title"></div>
							<div class="left-content">
								<div v-html="image.userName"></div> 
								<div class="left-time">{{image.createAt}}</div> 
							</div> 	
						</div> 
						<img :src="image.cover" class="panel-img">
					</div> 
				</div> 
			</div> 
		</van-list>
		<div class="fabu" @click="toFabu"><span>+</span> 发布</div>
		<!--  -->
	</div>
</template>

<script>
import Swiper from 'swiper';
import '../../../src/common/css/swiper.min.css';
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
				finished: false,
				loading: false,
				page:1,
				pageSize: 10,
				noData:false
				
			}
		},
		props:{
			
		},
		components:{
			
		},
		methods:{
			toDetails(uid){
				this.$router.push({name: 'mediainfo',params:{id:uid}})
			},
			toFabu(){
				this.$router.push({name: 'release'})
			},
			loadMore(){
				setTimeout(() => {
					this.loading = true;
					this.getGoodLists();
				},1000)
				
			},
			getGoodLists(){
				if (this.noData) return
      			this.loading = true;
				var params = {
					currentPage:this.page,
					pageSize:this.pageSize
				}
				this.$axios.post('/article/index',params).then(res => {
					let data = res.data.data.rows;
					let total = res.data.data.total;
					if(res.data.code==200){
						if(data.Length < 0&&this.page==1){
							this.noData = true
						}else{
							this.loading = false;
							this.list= this.list.concat(data);
							if(this.page===total){
								this.finished = true;
							}
							this.page++;
						}	
					}
					console.log(res)
					
				})
				.catch(error => {
			　　　　console.log("出错喽："+error);
			　　});
			}
		},
		created(){
			this.getGoodLists();
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
						display: flex;
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