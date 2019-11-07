<template>
<div class="myjoin"> 
    <div style="text-align:center;color:#ccc;"> 
        <img src="../img/heidi_logo.png" > 
        <p style="padding:10px 0 0 0 ;">汇聚操盘牛人&nbsp;带你账户翻红</p> 
    </div> 
    <van-cell-group>
        <van-field
            v-model="username"
            placeholder="手机号码或用户名"
        />
    </van-cell-group>
    <!-- <input type="hidden" id="log_source" name="d[t][log_source]" value="index" /> 
    <input type="hidden" id="recUrl" name="d[t][recUrl]" value="http://daoshi.simutz.com/sign/teacherList/1" /> 
    <input type="text" name="d[t][login]" placeholder="手机号码或用户名" id="login" /> 
    <input type="password" name="d[t][passwd]" placeholder="密码" id="password" /> 
    <button class="submit" id="loginsubmit">登 陆</button> 
    <a data-ajax="false" class="go-register" href="register"  target="_self">还没有账号，立即注册</a> 
    <a data-ajax="false" class="right-bom" href="findPasswd"  target="_self">忘记密码</a>  -->
</div> 
	
</template>

<script>

export default {
    data(){
        return{
            username:''
        }
    }
}
</script>

<style lang="less" scoped="scoped">
.myjoin{ 
    padding: 0 0.625rem; 
    font-size: 1rem; 
}
.myjoin img{ 
    margin-top: 1.25rem; 
    height: 3.750rem;
}
</style>
