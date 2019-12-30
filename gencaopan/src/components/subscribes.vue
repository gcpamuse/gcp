<template>
  <div>
        <van-dialog
        v-model="show"
        @confirm="toShouYe"
        >
            <p class="guanzhu">请先关注</p>
            <p class="p_concent">请您关注本微信号，进而查看本软件信息和各项功能。长按二维码关注本微信号(期学堂)</p>
            <div style="text-align:center;">
                <!-- <img src="../img/qxt_gzh.jpg" alt="跟操盘" style="width:60%;" /> -->
                <div class="qr" id="qrcode" ref="qrcode"></div>
            </div>
        </van-dialog>
  </div>
</template>

<script>
import QRCode from "qrcodejs2";
export default {
    data(){
        return{
            show: true
        }
    },
    components: {
        QRCode
    },
    mounted(){
        this.$nextTick(() => {
            this.qrcode()
        })
    },
    methods:{
        toShouYe(){
            this.$router.push({
                path: '/'
            });
        },
        qrcode () {
            let qrcode = new QRCode('qrcode',{
                width: 160, // 设置宽度，单位像素
                height: 160, // 设置高度，单位像素
                text: 'http://qxt.yuhaige.xyz/' // 设置二维码内容或跳转地址
            })
        }
    }
}
</script>

<style lang="less" scoped="scoped">
.guanzhu{
    text-align: center;
    margin-top: 15px;
    font-size: 15px;
    color: #333;
}
.p_concent{
    padding: 0 22px;
    margin-top: 15px;
    font-size: 14px;
    color: #888;
}
.van-dialog {
    position: fixed;
    top: 62%;
    left: 50%;
    border-radius: 10px;
}
.van-dialog__header {
    padding-top: 10px;
}
.qr{
    width: 160px;
    height: 160px;
    margin: 15px auto;
    text-align: center;
}
</style>