<template>
	<div class="seller">
		<div class="heard">
			<!-- <img src="../../img/default_middle.png" class="img">
			<div class="name">哈哈哈</div> -->
			<img :src="img" class="img">
			<div class="name">{{name}}</div>
		</div>
		<div class="user_module">
			<van-cell-group>	
				<van-cell icon="user_quxian" title="我的曲线" :to="{ name: 'mychart'}" >
					<van-icon slot="right-icon" name="user_youjian" style="line-height: inherit;" size="12px"/>
				</van-cell>	
				<van-cell icon="user_fensi" title="我的粉丝" :to="{ name: 'myFans'}">
					<van-icon slot="right-icon" name="user_youjian" style="line-height: inherit;" size="12px"/>
				</van-cell>	
				<van-cell icon="user_shouyi" title="我的收益" :to="{ name: 'myprofit'}">
					<van-icon slot="right-icon" name="user_youjian" style="line-height: inherit;" size="12px"/>
				</van-cell>	
				<van-cell icon="user_biji" title="我的笔记" :to="{ name: 'mynotes'}">
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
  data: function () {
    return {
	  img:"http://tg.simutz.com/avatar/83564_middle.jpg",
      name:"哈哈哈"
    }
  },
  methods:{
    scanCode:function(){
     	this.$router.push('/applyManager')
        
    },
    
    
  }
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