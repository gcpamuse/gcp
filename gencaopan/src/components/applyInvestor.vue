<template>
  <div>
        <van-cell-group>
            <van-field
                v-model="username"
                label="真实姓名"
                placeholder="请输入真实姓名"
                class="bor"
            />
            <van-field
                v-model="phone"
                label="联系电话"
                placeholder="请输入联系电话"
            />
        </van-cell-group>
        <van-radio-group v-model="radio">
            <van-radio name="1" icon-size="14px" checked-color="#e84d48">
                <span>我已知晓相关风险，确认申请。</span> 
                <van-icon slot="icon" size="10px" name="danxuan" />
            </van-radio>
        </van-radio-group> 
        <div class="but">
            <van-button type="primary" size="large" class="btu">立即申请</van-button>
        </div> 
        <div class="yiwen">
            <p>如果您有疑问，请联系客服</p>
            <p class="kefuhao">0571-85384000</p>
        </div>      
  </div>
</template>

<script>
export default {
    beforeCreate () {
        document.querySelector('body').setAttribute('style', 'background-color:#eee')
    },
    beforeDestroy () {
        document.querySelector('body').removeAttribute('style')
    },
    data(){
        return{
            username:"",
            phone:"",
            radio: '1'
        }
    }
}
</script>

<style lang="less" scoped="scoped">
.van-cell {
    font-size: 15px;
    line-height: 34px;
}
.bor{
    border-bottom: 1px solid #ccc;
}
.van-radio{
    font-size: 12px;
    padding: 2px 15px;
    span{
        color: #a3a3a3;
    }
}
.but{
    padding: 15px 75px;
    .btu{
        height: 45px;
        border-radius: 5px;
        line-height: 45px;
    }
}
.van-button--primary {
    color: #fff;
    background-color: #e84d48;
    border: 1px solid #e84d48;
    font-size: 15px;
}
.yiwen{
    text-align: center;
    font-size: 12px;
    color: #a3a3a3;
    .kefuhao{
        color:#0894ec; 
        line-height: 35px;
    }
}
.van-radio__icon--checked .van-icon {
    color: #fff;
    background-color: #d81e06;
    border-color: #d81e06;
}
</style>