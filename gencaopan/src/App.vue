<template>
  <div id="app">
	<div class="app-mian">
		<router-view name="default"></router-view>
	</div>
	
  	<!-- <div class="nav">
  		<div class="nav-item border-1px">
  			<router-link to='/goods'>期货</router-link>
  		</div>
  		<div class="nav-item">	
  			<router-link to='/ratings'>自媒体</router-link>
  		</div>
  		<div class="nav-item">
  			<router-link to='/seller'>我的</router-link>
  		</div>
  	</div> -->
	<van-tabbar route>
		<van-tabbar-item
			replace
			to="/"
			icon="qihuo"
		>
			期货
		</van-tabbar-item>
		<van-tabbar-item
			replace
			to="/ratings"
			icon="zimeiti"
		>
			自媒体
		</van-tabbar-item>
		<van-tabbar-item
			replace
			to="/seller"
			icon="wode"
		>
			我的
		</van-tabbar-item>
	</van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
  name: 'App',
  components:{
  	
  },
  data(){
  	return{
  		
  	}
  },
  created(){
  	
  }
}
</script>

<style lang="less" scoped="scoped">
@import 'common/less/mixin.less';
@import 'common/less/base.less';
#app {
	height: 100%;
	.app-mian{
		padding-bottom: 50px;
	}
  .nav{
		display: flex;
		width: 100%;
		height: 40px;
		line-height: 40px;
		/*border-bottom: 1px solid rgba(7,17,27,0.1);*/
		.border-1px(rgba(7,17,27,0.1));
  }
  .nav-item{
  	flex: 1;
	  text-align: center;
  	a{
  		font-size: 14px;
  		color: rgba(77,85,93);
  	}
  	a.router-link-active{
  		color: rgba(240,20,20);
  	}
  }
}
</style>
