<template>
  <div>
     <div class="m_top"> 
	<div class="bg">
		<img src="../img/bg1.png">
	</div> 
	<div class="back" @click="this.$router.go(-1)">返回</div> 
	<div class="title">打赏徐不疾</div> 
	<div class="avatar"><img src="../img/132.jpg"></div> 
</div> 
<div class="m_name"> 
	<p id="n_title">徐不疾</p> 
	<p id="n_describe">（推荐抄底）连续5年盈利</p>
</div> 
<div class="m_je container"> 
	<div class="row"> 
		<div class="m_je_c" onClick="doPraise();">
			<a href="javascript:;"><span>10</span><i>元</i></a>
		</div> 
		<div class="m_je_c m_je_c_m" onClick="doPraise();">
			<a href="javascript:;"><span>20</span>元</a>
		</div> 
		<div class="m_je_c" onClick="doPraise();">
			<a href="javascript:;"><span>50</span>元</a>
		</div> 
	</div> 
	<div class="row" style="margin-top:20px;"> 
		<div class="m_je_c" onClick="doPraise();">
			<a href="javascript:;"><span>80</span><i>元</i></a>
		</div> 
		<div class="m_je_c m_je_c_m" onClick="doPraise();">
			<a href="javascript:;"><span>100</span>元</a>
		</div> 
		<div class="m_je_c" onClick="doPraise();">
			<a href="javascript:;"><span>200</span>元</a>
		</div> 
	</div> 
	<div class="clear"></div> 
</div> 
<div class="m_sm"> 
	<p pnum="4" class="hadPraisePerson">本策略已有&nbsp;4&nbsp;人打赏</p> 
</div>  
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>