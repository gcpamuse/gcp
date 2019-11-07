<template>
<div class="myjoin password"> 
    <div style="padding-top: 20px;"> 
        <van-cell-group>
            <van-field
                v-model="phone"
                placeholder="手机号码"
            >
                <van-button slot="button" size="small" type="primary" style="background-color: #f24848;border: 1px solid #f24848;">获取短信验证码</van-button>
            </van-field>
            <van-field
                v-model="number"
                placeholder="请输入您收到的短信验证码"
            >
            </van-field>
        </van-cell-group>
        
    </div> 
    <van-button size="large" class="btn login" @click="scanCode">确定</van-button>

   
</div> 
	
</template>

<script>

export default {
    data(){
        return{
            username:'',
            password:''
        }
    },
    methods:{
        
    }
}
</script>

<style lang="less" scoped="scoped">
.myjoin{ 
    padding: 0 0.625rem; 
    font-size: 1rem;
    margin-bottom: -50px;
    min-height: 667px;
}
.myjoin .van-cell{
    padding: 8px 16px;
    border: solid 1px #757575;
    color: #666;
    border-radius: 5px;
    margin-bottom: 20px;
}
.myjoin .btn{
    width: 100%;
    height: 45px;
    line-height: 41px;
    background-color:#f24848;
    border-radius:5px;
    color: #fff;
    margin-top: 20px;
    font-weight: 700;
}
</style>
