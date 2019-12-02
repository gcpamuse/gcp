<template>
  <div id="app">
	<div class="app-mian">
		<router-view name="default"></router-view>
	</div>
	<van-tabbar v-show="isTabbar" route>
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
  	
  },
  computed:{
	isTabbar() {
      return this.$route.meta.tabbar ? true : false
    }
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
  
}
</style>
