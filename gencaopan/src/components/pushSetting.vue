<template>
 <div class="push-set"> 
    <h2>推送设置</h2> 
    <ul>    
        <li>
            <span class="title">接收【宁静致远】的下单的提醒</span> 
            <div class="onoff"><van-switch v-model="checked" size="24px" /></div>
        </li>
    </ul> 
</div> 
	
</template>

<script>

export default {
    data() {
        return {
            checked: true
        };
    }
}
</script>

<style lang="less" scoped="scoped">
.push-set{ 
    margin: 15px 10px 0; 
    padding:10px; 
    background-color: #F6F6F6;  
    color: #666; 
}
.push-set h2{ 
    padding-left:10px; 
    font-size: 16px; 
    line-height: 2.5; 
    border-bottom: dashed 1px #ddd;
}
.push-set ul{ 
    margin: 0; 
    padding:10px; 
}

.push-set ul li{
    border-bottom: dashed 1px #ddd;
    display: flex;
    vertical-align: top;
}

.push-set ul li span{ 
    // display: inline-block; 
    width: 80%; 
    line-height: 48px; 
    font-size:14px; 
}
.onoff{
    padding-top: 10px;
}
</style>
