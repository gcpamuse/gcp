<template>
	<div class="seller">
		<van-icon name="user_grzl" class="user_set" @click="toSetUp" />
		<div class="heard">
			<img :src="list.portrait ? list.portrait : img" class="img" @click="toSetUp">
			<div class="name">{{list.username}}</div>
		</div>
		<div class="user_module">
			<van-cell-group>	
				<van-cell icon="user_quxian" title="我的曲线" @click="tochar" >
					<van-icon slot="right-icon" name="user_youjian" style="line-height: inherit;" size="12px"/>
				</van-cell>
				<!-- <div v-if="list.isTutor"> -->
					<van-cell v-if="list.isTutor" icon="user_fensi" title="我的粉丝" :to="{ name: 'myFans'}">
						<van-icon slot="right-icon" name="user_youjian" style="line-height: inherit;" size="12px"/>
					</van-cell>	
					<van-cell v-if="list.isTutor" icon="user_shouyi" title="我的收益" :to="{ name: 'myprofit'}">
						<van-icon slot="right-icon" name="user_youjian" style="line-height: inherit;" size="12px"/>
					</van-cell>	
				<!-- </div> -->
				<van-cell icon="user_biji" title="我的笔记" @click="goLink">
					<van-icon slot="right-icon" name="user_youjian" style="line-height: inherit;" size="12px"/>
				</van-cell>
				<van-cell icon="user_shuoming" title="使用说明" :to="{ name: 'applyShow'}">
					<van-icon slot="right-icon" name="user_youjian" style="line-height: inherit;" size="12px"/>
				</van-cell>	
				<van-cell icon="user_guanzhu" title="我的关注" :to="{ name: 'myconcem'}">
					<van-icon slot="right-icon" name="user_youjian" style="line-height: inherit;" size="12px"/>
				</van-cell>	
				<van-cell icon="user_yaoqing" title="邀请有奖" :to="{ name: 'prizes'}">
					<van-icon slot="right-icon" name="user_youjian" style="line-height: inherit;" size="12px"/>
				</van-cell>
				<van-cell icon="user_dingyue" title="我的订阅" :to="{ name: 'teacherSubscribe'}">
					<van-icon slot="right-icon" name="user_youjian" style="line-height: inherit;" size="12px"/>
				</van-cell>	
				<van-cell icon="user_shezhi" title="推送设置" :to="{ name: 'pushSetting'}">
					<van-icon slot="right-icon" name="user_youjian" style="line-height: inherit;" size="12px"/>
				</van-cell>	
				<van-cell icon="user_swhezuo" title="商务合作" :to="{ name: 'cooperation'}">
					<van-icon slot="right-icon" name="user_youjian" style="line-height: inherit;" size="12px"/>
				</van-cell>
			</van-cell-group>
		</div>
		<div class="btuton">
			<van-button size="large" class="btu" @click="scanCode">加盟代理</van-button>
		</div>	
		
	</div>
</template>

<script>
export default {
	data() {
		return {
			img:"http://tg.simutz.com/avatar/83564_middle.jpg",
			list:{},
			id:'',
			username:'',
			portrait:''
		}
	},
	methods:{
		scanCode:function(){
			this.$router.push('/applyManager')
			
		},
		toSetUp(){
			this.$router.push({
				path:'/setUp',
				query:{
					username:this.username,
					portrait:this.portrait
				}
			})
			
		},
		goLink () {
			this.$router.push({
				path: '/mynotes',
				query: {
					id:this.id
				}
			})
		},
		tochar(){
			this.$router.push({
				path: '/mychart',
				query: {
					id:this.id
				}
			})
		}
	},
	mounted(){
		this.$axios.post('user').then(res=>{
		   	console.log(res)
		   	if(res.data.code!==200) return
			this.list = res.data.data;
			this.id = res.data.data.id;
			this.username = res.data.data.username;
			this.portrait = res.data.data.portrait;
		})
		.catch( error=>{
	　　　　console.log(error);
	　　});
	}
}
</script>

<style lang="less" scoped="scoped">
.seller{
	position: relative;
	.user_set{
		position: absolute;
		top: 15px;
		right: 15px;
		font-size: 20px;
	}
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