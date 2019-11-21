<template>
  <div>
      <van-dialog v-model="show" title="请阅者承诺" @confirm='determine' confirm-button-color='#0BB20C'>
            <div class="content"> 
                <p>1、仅作为自己学习之用，不违法违规使用和传播本软件的任何信息。</p>
           		<p>2、知晓投资风险，并且自行承担所有交易风险。</p>
          		<p>3、理解并接受因微信技术障碍/通讯延迟/网络传输不畅等原因导致相送信息延迟发送或不发送的情况。</p>
            	<p>4、确认您已经关注本公众号（跟操盘），成功关注后才能接收订阅信息</p>
           		<p>5、点击确定代表您已经阅读并同意《跟操盘软件信息服务协议》。</p>
            </div>
            
        </van-dialog>
  </div>
</template>

<script>
export default {
    data(){
        return{
            show:true
        }
    },
    methods:{
        determine(){
            this.$router.push({name: 'zhifu'})
        },
    }
}
</script>

<style lang="less" scoped="scoped">
.content{
    padding:12px 20px;
    font-size: 14px;
    color: #888;
    word-wrap: break-word;
    word-break: break-all;
    text-align: left;
    p{
        line-height: 18px;
    }
}
.van-dialog{
    /deep/ .van-dialog__header {
        padding-top: 12px;
    }
}
</style>