<template>
 <div class="push-set"> 
    <div class="m-invest-form"> 
        <div class="m-invest-panel"> 
            <div class="u-invest-title">当前机构</div> 
            <div class="u-invest-input"> 
                <input type="text" v-model="company" placeholder="请输入当前机构名称"> 
            </div> 
        </div> 
        <div class="m-invest-panel">
            <div class="u-invest-title">选择身份</div> 
            <div class="u-invest-input"> 
                <div class="m-invest-checkbox j-checkbox"> 
                    <i class="j-check"></i><span>客户经理</span> 
                </div> 
            </div> 
        </div> 
        <div class="m-invest-panel"> 
            <div class="u-invest-title">真实姓名</div> 
                <div class="u-invest-input"> 
                    <input type="text"  v-model="realname" placeholder="请输入真实姓名"> 
                </div>
        </div>


        <div class="m-invest-panel"> 
            <div class="u-invest-title">联系电话</div> 
            <div class="u-invest-input"> 
                <input type="text" v-model="mobile" id="manager_mobile" placeholder="请输入联系电话"> 
            </div> 
        </div> 
        <div class="m-invest-panel">
            <div class="u-invest-title">开户二维码</div> 
            <div class="u-invest-input u-invest-upload" id="photoBtn"> 
                <span style="color:#B4B4B4;">可向客服申请专属二维码</span> 
                <img class="upload-qrcode needsclick futhumb" src="../img/img_upload.png">
            </div>   
            <input type="hidden" id="thumb" class="thumbInput" value="" /> 
            <input type="hidden" id="filetype" class="filetypeInput" value="" />
            <input type="hidden" id="filename" class="filenameInput" value="" /> 
        </div> 
   
     
        <van-button size="large" class="release-btn" @click="releaseBtn">申请并支付</van-button>
        <div class="m-invest-tipBox"> 
            <p class="u-invest-tipBox-p">如果您有疑问，请联系客服</p> 
            <p class="u-invest-tipBox-p u-invest-p-red">
                <a href="javascript:;">0571-85384000</a>
            </p> 
        </div> 
    </div> 
</div> 
	
</template>

<script>


export default {
    
    data: function () {
        return {
            company:'',
            realname:'',
            mobile:''
        }
    },
    methods:{
        releaseBtn(){
            let phoneReg = /^1[34578]\d{9}$/;
            if(this.company == ""){
                // alert('请填写机构名称')
                this.$toast('请填写机构名称');
            }else if (this.realname == "") {
                
                this.$toast('请填写真实姓名');
            }else if(!phoneReg.test(this.mobile)){
               
                this.$toast('请填写正确格式的手机号');
            }else{

            }
        }
        
    }

}
</script>

<style lang="less" scoped="scoped">
  .m-invest-panel {
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	font-size: 15px;
	background: #ffffff;
	padding: 17px 13px;
	border-bottom: 1px solid #d2d2d2;
}
  .m-invest-panel .u-invest-title {
	width: 120px;
}
  .m-invest-panel .u-invest-input {
	-webkit-box-flex: 1;
	-webkit-flex: 1;
	flex: 1;
}
  .m-invest-panel .u-invest-input input {
	width: 100%;
	border: none;
	overflow: hidden;
}
  .m-invest-panel .u-invest-input select {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	width: 100%;
	color: #d0d0d0;
	border: none;
	overflow: hidden;
}
 
  .m-invest-panel .u-invest-upload {
	position: relative;
}
  .m-invest-panel .u-invest-upload input {
	width: 180px;
}
  .m-invest-panel .u-invest-upload .upload-qrcode {
	position: absolute;
	width: 27px;
	height: 27px;
	right: 10px;;
	top: -5px;
}
  .m-invest-panel:last-child {
	border: none;
}
  .m-invest-checkbox {
	display: inline-block;
	padding-right: 10px;
}
  .m-invest-checkbox i {
	width: 16px;
	height: 16px;
	display: inline-block;
	vertical-align: middle;
	background: url('../img/check_r.png') no-repeat center;
	background-size: 15px;
}

  .m-invest-checkbox span {
	height: 16px;
	display: inline-block;
	vertical-align: middle;
	padding-left: 10px;
	line-height: 16px;
	font-size: 15px;
}
  .release-btn{
    font-size: 15px;
    display: block;
	margin: 20px auto 10px auto;
    width:232px;
    height: 45px;
    line-height: 45px;
    background-color:#e84d48;
    border-radius: 5px;
    color: #fff;
}
  .m-invest-tipBox {
	font-size: 11px;
	text-align: center;
	padding-bottom: 20px;
}
  .m-invest-tipBox .u-invest-tipBox-p {
    color: #a3a3a3;
    margin: 15px 0;
}
  .m-invest-tipBox .u-invest-p-red a{
	color: #0894ec;;
}
.m-invest-tipBox .u-invest-p-red{
	color: #0894ec;;
}
</style>
