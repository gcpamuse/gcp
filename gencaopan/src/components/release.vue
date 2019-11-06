<template>
  <div>
        <van-cell-group>
            <van-field
                value="请输入观点标题"
                label="标题"
            />
        </van-cell-group>

        <van-cell-group class="group">
            <van-switch-cell v-model="checked" title="是否收费" active-color="#f42241" />
        </van-cell-group>
        <van-cell-group class="group">
            <van-switch-cell v-model="check" title="封面照片是否显示在正文中" active-color="#f42241" />
        </van-cell-group>
        <div class="viewpoint-submit releaseBtn" val="0">发布</div> 
  </div>
</template>

<script>
export default {
    beforeCreate () {
        document.querySelector('body').setAttribute('style', 'background-color:#f2f2f2')
    },
    beforeDestroy () {
        document.querySelector('body').removeAttribute('style')
    },
    data(){
        return{
            checked: false,
            check: true
        }
    }
}
</script>

<style lang="less" scoped="scoped">
    .van-field__control {
        color: #ccc;
    }
    .group{
        margin-top: 10px;
    }
    .viewpoint-submit {
        margin: 10px auto;
        width: 300px;
        height: 40px;
        line-height: 40px;
        border-radius: 40px;
        background-color: #f42241;
        color: #fff;
        text-align: center;
        font-size: 15px;
    }
</style>