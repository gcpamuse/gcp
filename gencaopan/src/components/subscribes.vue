<template>
  <div>
        <van-dialog
        v-model="show"
        @confirm="toShouYe"
        >
            <p class="guanzhu">请先关注</p>
            <p class="p_concent">请您关注本微信号，进而查看本软件信息和各项功能。长按二维码关注本微信号(跟操盘)</p>
            <p style="text-align:center;">
                <img src="../img/qxt_gzh.jpg" alt="跟操盘" style="width:60%;" />
            </p>
        </van-dialog>
  </div>
</template>

<script>
export default {
    data(){
        return{
            show: true
        }
    },
    methods:{
        toShouYe(){
            this.$router.push({
                path: '/'
            });
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
</style>