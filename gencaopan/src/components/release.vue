<template>
  <div>
      <div class="content"> 
            <div class="list-block viewpoint-content"> 
                <div class="item-content viewpoint-column special-col"> 
                    <div class="item-inner col-inner"> 
                        <div class="item-title label col-title">标题</div> 
                        <input class="item-input col-input titleInput" type="text" name="" id='title' placeholder="请输入观点标题"> 
                    </div> 
                </div> 
                <div class="item-content viewpoint-column col-margin"> 
                    <textarea id='content' placeholder="填写交易策略，行情分析，最少100字，建议写上买入区间，止损参考。禁止广告，恶意刷屏，如有发现，一律封号。如设备阅读收费，未付费状态下将只能查看全篇内容的10%" name="content" class="col-textarea contentInput"></textarea>  
                    <input type="file" id="file" name="file" data-role="none" onChange="readAsDataURLs()" class="j-upload" style="display:none;" accept="image/jpg,image/jpeg,image/png,image/gif" />   
                    <input type="hidden" id="thumb" class="thumbInput" value="" /> 
                    <input type="hidden" id="filetype" class="filetypeInput" value="" /> 
                    <input type="hidden" id="filename" class="filenameInput" value="" /> 
                    <img src="../img/photo.png" alt="" class="photo-submit needsclick j-submit" id="photoBtn"> 
                </div> 
                <div class="item-content viewpoint-column col-margin"> 
                    <div class="item-inner col-inner"> 
                        <div class="item-title col-title" style="width: 75%">是否收费</div> 
                        <div class="item-input switch-width"> 
                            <label class="label-switch"> 
                                <input type="checkbox" name="free_charge" id="free_charge" val="0" value="0" class="free_charge"> 
                                <div class="checkbox"></div>
                            </label> 
                        </div> 
                    </div> 
                </div> 
                <div class="item-content viewpoint-column col-margin free_charge_money" style="display:none;"> 
                    <div class="item-inner col-inner"> 
                        <div class="item-title label col-title">阅读费</div> 
                        <input class="item-input col-input free_money" type="text" name="money" placeholder="请输入阅读费"> 
                    </div> 
                </div> 
                <div class="item-content viewpoint-column col-margin"> 
                    <div class="item-inner col-inner"> 
                        <div class="item-title col-title" style="width: 75%">封面照片是否显示在正文中</div> 
                        <div class="item-input switch-width"> 
                            <label class="label-switch"> 
                                <input type="checkbox" name="showtocontent" checked id="showtocontent" value="1" class="showtocontentInput"> 
                                <div class="checkbox"></div> 
                            </label> 
                        </div> 
                    </div> 
                </div> 
                <div class="viewpoint-submit releaseBtn" val="0">发布</div> 
            </div> 
        </div> 
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style lang="less" scoped="scoped">

</style>