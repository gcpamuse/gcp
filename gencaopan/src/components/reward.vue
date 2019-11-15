<template>
  <div>
     <div class="m_top"> 
        <div class="bg">
            <img src="../img/bg1.png">
        </div> 
        <div class="back" @click="prev">返回</div> 
        <div class="title">打赏灰太狼</div> 
        <div class="avatar"><img src="../img/132.jpg"></div> 
    </div> 
    <div class="m_name"> 
        <p class="n_title">灰太狼</p> 
        <p class="n_describe">（推荐抄底）连续5年盈利</p>
    </div> 
    <div class="m_je container"> 
        <div class="row"> 
            <div class="m_je_c" @click="doPraise">
                <a href="javascript:;"><span>10</span><i>元</i></a>
            </div> 
            <div class="m_je_c m_je_c_m" @click="doPraise">
                <a href="javascript:;"><span>20</span>元</a>
            </div> 
            <div class="m_je_c" @click="doPraise">
                <a href="javascript:;"><span>50</span>元</a>
            </div> 
        </div> 
        <div class="row" style="margin-top:20px;"> 
            <div class="m_je_c" @click="doPraise">
                <a href="javascript:;"><span>80</span><i>元</i></a>
            </div> 
            <div class="m_je_c m_je_c_m" @click="doPraise">
                <a href="javascript:;"><span>100</span>元</a>
            </div> 
            <div class="m_je_c" @click="doPraise">
                <a href="javascript:;"><span>200</span>元</a>
            </div> 
        </div> 
        <div class="clear"></div> 
    </div> 
    <div class="m_sm"> 
        <p pnum="4" class="hadPraisePerson">本策略已有&nbsp;4&nbsp;人打赏</p> 
    </div>  
  </div>
</template>

<script>
export default {
    beforeCreate () {
        document.querySelector('body').setAttribute('style', 'background-color:#eaeaee')
    },
    beforeDestroy () {
        document.querySelector('body').removeAttribute('style')
    },
    data(){
        return{

        }
    },
    methods:{
        prev(){
            this.$router.go(-1)
        },
        doPraise(){

        }
    }
}
</script>

<style lang="less" scoped="scoped">
* {
    box-sizing: border-box;
}
.m_top{
    position: relative;
}
.bg img {
    width: 100%;
    z-index: 2;
    display: inline-block;
    overflow: hidden;
    vertical-align: top;
}
.m_top .title {
    position: absolute;
    top: 14px;
    left: 0;
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 17px;
    z-index: 7;
}
.m_top .back {
    position: absolute;
    top: 14px;
    left: 12px;
    color: #fff;
    z-index: 9;
    font-size: 17px;
}
.m_top .avatar {
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -48px;
}
.m_top .avatar img {
    width: 96px;
}
.m_name {
    text-align: center;
    margin-top: 5px;
}
.n_title {
    font-size: 18px;
    color: #404040;
    line-height: 30px;
}
.n_describe {
    font-size: 14px;
    color: #7a7a7a;
    line-height: 20px;
}
.m_je {
    width: 100%;
    margin: 0 auto;
    margin-top: 15px;
    padding-right: 15px;
    padding-left: 15px;
}
.m_je .row {
    margin-right: 0px;
    margin-left: 0px;
    overflow: hidden;
}
.m_je_c {
    display: block;
    text-align: center;
    list-style: none;
    position: relative;
    min-height: 1px;
    float: left;
    width: 30%;
}
.m_je .row a {
    color: #c65f3c;
    border: 3px solid #c65f3c;
    padding: 16px 0px;
    display: inline-block;
    border-radius: 10px;
    width: 100%;
}
.m_je_c_m {
    margin: 0px 5%;
}
a {
    text-decoration: none;
}
.m_je .row span {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 32px;
    line-height: 34px;
    color: #c65f3c;
    font-style: oblique;
    margin-right: 8px;
}
.m_sm p {
    text-align: center;
    color: #9d9d9d;
    font-size: 16px;
    font-family: "微软雅黑";
    margin-top: 40px;
}
.m_je .row i {
    font-style: normal;
}
</style>