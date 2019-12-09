<template>
 <div class="push-set"> 
    <h2>使用说明</h2>
        <ul> 
            <li class="fix"> 
            <p>1、订阅策略 可以查看策略最新持仓，实时接收每次交易开平仓信号。</p> 
            <p>&nbsp;</p> 
            <p>2、申请展示 点击我的曲线输入监控中心账户密码可以统计自己的收益曲线，之后点击注册导师 输入交易账户密码，可在首页分享策略。</p>
            <!--    ，之后点击注册导师 输入交易账户密码，可在首页分享策略。（监控中心账户密码，首次登陆需要改密）  --> 
            <p>&nbsp;</p> 
            <p>3、自媒体 您可以发布 交易笔记 自己喜欢的文章，自己收集的资源 您将拥有自己的自媒体，期学堂会记录您的成长和卓越。 </p> 
            <p>&nbsp;</p> 
            <p>4、申请代理 同行机构可以点击底部申请入驻代理期学堂。分享期学堂，推荐合作伙伴，邀请新的导师加入都可以持续获得奖励。客服电话 
                <a href="tel:0571-85384000" style="color: #38c;font-weight: 700">0571-85384000</a> 
            </p> 
        </li> 
    </ul> 
</div> 
	
</template>

<script>

export default {
    name:'applyShows',
}
</script>

<style lang="less" scoped="scoped">
.push-set{ 
    margin:15px 8px 0; 
    padding:10px; 
    background-color: #F6F6F6;  
    color: #666; 
}
.push-set h2{ 
    padding-left:10px; 
    font-size:16px; 
    line-height:40px; 
    border-bottom: dashed 1px #ddd;
}
.push-set ul{ 
    margin: 0; 
    padding:10px; 
}
.push-set ul li span{ 
    display: block; 
    width: 60%; 
    line-height: 48px; 
    font-size:14px; 
}
.push-set ul li p{
    line-height: 1.3;
}
</style>
