<template>
  <div style="padding-top: 3px;">
        <van-cell-group>
            <van-field
                v-model="message"
                placeholder="请输入观点标题"
                label="标题"
            />
        </van-cell-group>
        <div class="item-content"> 
            <textarea class='content' placeholder="填写交易策略，行情分析，最少100字，建议写上买入区间，止损参考。禁止广告，恶意刷屏，如有发现，一律封号。如设备阅读收费，未付费状态下将只能查看全篇内容的10%" name="content"></textarea>        
            <van-uploader :after-read="afterRead" :max-size="maxsize" :before-read="beforeRead" :max-count="1" v-model="fileList">
                <img src="../img/photo.png" alt="" class="photo-submit">
            </van-uploader> 
        </div>
        <!-- <van-uploader :after-read="afterRead" />  -->
        <van-cell-group class="group">
            <van-switch-cell v-model="checked" title="是否收费" active-color="#f42241" />
        </van-cell-group>
        <van-cell-group class="group" v-show="checked">
            <van-field
                v-model="money"
                placeholder="请输入阅读费"
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
        document.querySelector('body').setAttribute('style', 'background-color:#efeff4')
    },
    beforeDestroy () {
        document.querySelector('body').removeAttribute('style')
    },
    data(){
        return{
            message:"",
            money:"",
            checked: false,
            check: true,
            fileList: [],
            maxsize: 4096 * 1024
        }
    },
    methods: {
        afterRead(file) {
            // 此时可以自行将文件上传至服务器
            console.log(file);
        },
        beforeRead(file) {
            if (file.type !== 'image/jpeg') {
                if(file.type !== 'image/png'){
                    if(file.type !== 'image/gif'){
                        this.$toast.fail('请上传正确的图片格式');
                        return false;
                    }
                }
            }
            return true;
        },
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
            height: 180px;
            border: 0;
            padding:15px 7px;
            font-size: 13px;
            z-index: -1;
        }
        .photo-submit{
            width: 60px; 
            margin: 0 10px 10px 0;       
        }
    }
</style>