<template>
  <div>
        <van-cell-group>
            <van-field
                value="请输入观点标题"
                label="标题"
            />
        </van-cell-group>
        <div class="item-content"> 
            <textarea class='content' placeholder="填写交易策略，行情分析，最少100字，建议写上买入区间，止损参考。禁止广告，恶意刷屏，如有发现，一律封号。如设备阅读收费，未付费状态下将只能查看全篇内容的10%" name="content"></textarea>        
            <img src="../img/photo.png" alt="" class="photo-submit"> 
        </div>
        <!-- <van-uploader :after-read="afterRead" />  -->
        <van-cell-group class="group">
            <van-switch-cell v-model="checked" title="是否收费" active-color="#f42241" />
        </van-cell-group>
        <van-cell-group style="display:none;">
            <van-field
                value="请输入阅读费"
                label="阅读费"
            />
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
    },
    methods: {
        afterRead(file) {
            // 此时可以自行将文件上传至服务器
            console.log(file);
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
    .item-content{
        margin-top: 6px;
        position: relative;
        text-align: right;
        background-color: #fff;
        .content{
            width: 96%;
            margin: 0 auto;
            height: 200px;
            border: 0;
            padding:15px 7px;
            font-size: 13px;
            z-index: -1;
        }
        .photo-submit{
            width: 80px; 
            margin: 0 10px 10px 0;       
        }
    }
</style>