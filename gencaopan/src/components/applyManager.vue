<template>
 <div class="m-invest-form"> 
    <!-- <div class="m-invest-panel"> 
        <div class="u-invest-title">当前机构</div> 
        <div class="u-invest-input"> 
            <input type="text" id="manager_company" placeholder="请输入当前机构名称"> 
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
                <input type="text" id="manager_realname" placeholder="请输入真实姓名"> 
            </div> 
        <div class="m-invest-panel"> 
            <div class="u-invest-title">联系电话</div> 
            <div class="u-invest-input"> 
                <input type="text" id="manager_mobile" placeholder="请输入联系电话"> 
            </div> 
        </div> 
        <div class="m-invest-panel">
            <div class="u-invest-title">开户二维码</div> 
            <div class="u-invest-input u-invest-upload" id="photoBtn"> 
                <span style="color:#B4B4B4;">可向客服申请专属二维码</span> 
                <img class="upload-qrcode needsclick futhumb" src="/static/img/img_upload.png">
            </div>   
            <input type="hidden" id="thumb" class="thumbInput" value="" /> 
            <input type="hidden" id="filetype" class="filetypeInput" value="" />
            <input type="hidden" id="filename" class="filenameInput" value="" /> 
        </div> 
    </div> 
    <div class="u-invest-apply releaseBtn">申请并支付
    </div> 
    <div class="m-invest-tipBox"> 
        <p class="u-invest-tipBox-p">如果您有疑问，请联系客服</p> 
        <p class="u-invest-tipBox-p u-invest-p-red">
            <a href="javascript:;" onClick="showDetail('tel:0571-85384000')">0571-85384000</a>
        </p> 
    </div>  -->
    <van-cell-group>
        <van-field
        
            center
            clearable
            label="当前机构"
            placeholder="请输入当前机构名称"
          
            use-button-slot
        >
        </van-field>
        <van-field
        
            center
            clearable
            label="当前机构"
            placeholder="请输入当前机构名称"
        
            use-button-slot
        >
        </van-field>
        <van-field
          
            center
            clearable
            label="当前机构"
            placeholder="请输入当前机构名称"
           
            use-button-slot
        >
        </van-field>
    </van-cell-group>

</div>
	
</template>

<script>
import { Field, CellGroup, Cell, Button, Toast } from 'vant';
export default {
    components: {
      [Field.name]: Field,
      [Button.name]: Button,
      [Cell.name]: Cell,
    },
}
</script>

<style lang="less" scoped="scoped">

</style>
