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
            <textarea v-model="content" class='content' placeholder="填写交易策略，行情分析，最少100字，建议写上买入区间，止损参考。禁止广告，恶意刷屏，如有发现，一律封号。如设备阅读收费，未付费状态下将只能查看全篇内容的10%" name="content"></textarea>        
            <div class="edit">
                <div class="avatar">
                <div class="img">
                    <img :src="avatar" @click="setAvatar" class="photo-submit">
                </div>
                <input type="file" name="avatar" accept="image/gif,image/jpeg,image/jpg,image/png" style="display:none" @change="changeImage($event)" ref="avatarInput">
                </div>
                <div class="up_but">
                    <div class="but" @click="edit">确认添加</div>
                </div>
            </div>
        </div>
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
        <div @click="release" class="viewpoint-submit releaseBtn" val="0">发布</div> 
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
            money:0,
            checked: false,
            check: true,
            fileList: [],
            content:"",
            maxsize: 4096 * 1024,
            avatar:require('../img/photo.png')
        }
    },
    methods: {
        release(){
            if(this.message==""){
                this.$toast('请输入观点标题');
                return false;
            }
            if(this.content==""){
                this.$toast('填写内容不能为空！');
                return false;
            }
            if(this.avatar==""){
                this.$toast('请选择封面');
                return false;
            }
            if(this.checked){
                if(this.money==""){
                    this.$toast('请输入阅读费金额');
                    return false; 
                }
            }
            var params = { 
                title:this.message,
                content:this.content,
                cover:this.avatar,
                amount:this.money,
                isContentCover:this.check
            };
            this.$axios.post('/article/release',params).then( res=>{
                console.log(res)
            })
            .catch( error=>{
        　　　　console.log("出错喽："+error);
        　　});
        },
        edit() {// 修改头像
            if (this.$refs.avatarInput.files.length !== 0) {
                var image = new FormData()
                image.append('file', this.$refs.avatarInput.files[0])
                this.$axios.post('/article/upload', image, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }).then(res=>{
                    console.log(res.data)
                    this.avatar = res.data.data.fileName;
                })
            }
        },
        setAvatar() {
            this.$refs.avatarInput.click()
        },
        changeImage(e) {
            var file = e.target.files[0]
            var reader = new FileReader()
            var that = this
            reader.readAsDataURL(file)
            reader.onload = function(e) {
                that.avatar = this.result
            }
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
            height: 180px;
            border: 0;
            padding:15px 7px;
            font-size: 13px;
            z-index: -1;
        }
        .photo-submit{
            width: 60px; 
            margin: 0 10px 0 0;       
        }
        .up_but{
            width: 92%;
            margin: 0 auto;
            padding-bottom: 10px;
            .but{
                display: inline-block;
                width: 50px;
                font-size: 12px;
                color: cornflowerblue;
                text-align: center;
            }
        }
    }
</style>