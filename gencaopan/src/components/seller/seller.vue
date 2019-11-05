<template>
	<div class="seller">
		<div class="heard">
			<img src="../../img/default_middle.png" class="img">
			<div class="name">哈哈哈</div>
		</div>
		<div class="user_module">
			<van-cell-group>	
				<van-cell icon="user-ye" title="我的曲线" isLink />	
				<van-cell icon="user-ye" title="我的粉丝" :to="{ name: 'myFans'}" isLink />	
				<van-cell icon="user-ye" title="我的收益" :to="{ name: 'myprofit'}" isLink />	
				<van-cell icon="user-jifen" title="我的笔记" isLink />
				<van-cell icon="user-dingdan" title="使用说明" isLink />	
				<van-cell icon="user-ye" title="我的关注" :to="{ name: 'myconcem'}" isLink />	
				<van-cell icon="user-jifen" title="邀请有奖" isLink />
				<van-cell icon="user-dingdan" title="我的订阅" isLink />	
				<van-cell icon="user-ye" title="推送设置" isLink />	
				<van-cell icon="user-jifen" title="商务合作" isLink />
			</van-cell-group>
		</div>
		<div class="btuton">
			<van-button size="large" class="btu">加盟代理</van-button>
		</div>	
		<div style="height:50px;"></div>
	</div>
</template>

<script>
	
	export default{
		name:'seller',
		data(){
			return{
				
			}
		},
		props:{
			
		},
		created(){
			
		},
		components:{
			
		},
		mounted(){
			
		},
		methods:{
			
		},
	}
</script>

<style lang="less" scoped="scoped">
.seller{
	.heard{
		text-align: center;
		padding: 15px;
		.img{
			width: 75px;
			height: 75px;
			border-radius: 50%;
			box-shadow: 0px 0px 12px #97eaf9;
			margin-bottom: 8px;
		}
		.name{
			color: rgb(144, 144, 243);
			font-size: 16px;
		}
	}
	.btuton{
		margin: 15px auto;
		width: 80%;
		.btu{
			width: 100%;
			height: 45px;
			line-height: 45px;
			background-color: rgba(245, 8, 8,0.8);
			border-radius: 8px;
			color: #fff;
		}
	}
}
.van-cell {
    line-height: 34px;
}
.van-cell__left-icon, .van-cell__right-icon {
    height: 34px;
    line-height: 34px;
}
</style>