<template>
  <div class="page-group">
        <div class="page"> 
            <div class="content"> 
                <div class="list">
                    <div class="imgs"><img src="../img/132.jpg" class="img"></div>
                    <div class="count">
                        <p>灰太狼</p>
                        <p class="count_c"><span>0</span>篇笔记&nbsp;被打赏<span>0元</span></p>
                    </div>
                    <div class="guanzhu">
                        <div class="m-concern" @click="followBtn" :style="{backgroundColor:bg_color, color: ft_color,}">{{content}}</div> 
                    </div>
                </div>
                <div style="height:6px;background-color:#f2f2f2;"></div>
                <div class="note-content"> 
                    <div class="media-info-box"> 
                        <div class="media-info-title">约翰一墨菲的资金管理要领和交易策略举要</div> 
                        <div class="media-info-mt"><span class="f-r">2017/08/01 16:59:19</span></div> 
                    </div>
                    <div class="media-info-content contentArea" style="font-size: 16px;">      
                        一资本市场的高额利润应来的辉煌中。这也是多数人易现辉煌，难有成就的根本原因。<br />
    　　                    重仓和频繁交易导致成绩巨幅震荡是业余低手的表现，且两者相互作用，互为因果。坚忍，耐心，信心并顽强执着地积累成功才是职业的交易态度。<br />
                    　　能大的成绩，而成绩如何其中相当习惯----融会贯通----忘记----大成。<br />
                    　　小钱靠技术（聪明），大钱靠意志（智慧）。长线（智慧）判方向，短线）。<br />
                        方法和不断完善的性格修炼。<br />
                        大自然本身是由规律性和大部分随机性组成，任何想完全，彻底，精确地之一，“谋事在人，成事在天。”，于人我们讲是缘分而非最好，于事我们讲究适应，能改变的是自己而非寄予外界提供。<br />
                        <br />
                    　　利利润的获得都是承担一定风险才能获取的回报，只要交易思想正确，对于应该承担的风险我们要从容不迫。<br />
                    　　正确分析预测只是成功投资的第一步，成功投资的基础更需要严格的风险管理。<br />
                    　　心理控制第一，风险管理第二，分析技能重要性最次。<br />
                    　　必须在交易中交易在无欲的状态下才能更多收获，做好该做的而不是最想做的。市场不是你寻求刺激的场所，也不是你的取款机器。<br />
                    　　任何的事物，对他的定义执行，这样才能保证成功率。<br />
                        <br />
                    　　盯住止损（止赢），止损（止赢）是自己控制的（谋事在人）；不考虑利润，因为利润是由市场控制的（成事在天）！<br />
                    　　减少无谓的交易，你离成功就更加接近了（转帖）减少无谓的交易，你离成功就更加接近了<br />
                    　　当市场处目前该买或卖，我总是说："目前没有交易价值"，我一般的回利是市场上普遍的行为，我把这些交易总结为：无谓的交易。<br />
                        <br />
                    　　尽量减少无谓的交易，你离成功就更加接近了。<br />
                    　　无谓的交易是导致亏损和心态不好的主要原因，也是养成控，专业交易是尽量减少或避免交易的随意性的。<br />
                    　　什么是无谓的交易呢？简单来讲就是没有价值的交易润和相应承担任何时<br>
                        <div class="imgs">
                            <img src="../img/1501577959302.jpg" class="img">
                        </div>
                    </div>
                    <div class="media-share j-share_click">
                        <img src="../img/share2.png" alt="分享跟操盘">
                    </div>
                    <div class="pay-content"> 
                        <div class="pay-panel"> 
                            <div class="pay-box j-red_click praiseBtn" normalImg="../img/icon-1.png" money="6.66"> 
                                <img src="../img/icon-1.png" alt="" class="pay-img"> 
                                <div class="pay-num"> 
                                    <van-icon name="m_dashang" />
                                    <span class="pay-text">6.66</span> 
                                </div> 
                                <div class="pay-title">六六大顺！</div> 
                            </div> 
                            <div class="pay-box j-red_click praiseBtn" normalImg="../img/icon-2.png" money="13.14"> 
                                <img src="../img/icon-2.png" alt="" class="pay-img"> 
                                <div class="pay-num"> 
                                    <van-icon name="m_dashang" />
                                    <span class="pay-text">13.14</span> 
                                </div> 
                                <div class="pay-title">追随一生</div> 
                            </div> 
                            <div class="pay-box j-red_click praiseBtn" normalImg="../img/icon-3.png" money="52.00"> 
                                <img src="../img/icon-3.png" alt="" class="pay-img"> 
                                <div class="pay-num"> 
                                    <van-icon name="m_dashang" />
                                    <span class="pay-text">52.00</span> 
                                </div> 
                                <div class="pay-title">我爱老师</div> 
                            </div> 
                            <div class="pay-box j-red_click praiseBtn" normalImg="../img/icon-4.png" money="100.10"> 
                                <img src="../img/icon-4.png" alt="" class="pay-img"> 
                                <div class="pay-num"> 
                                    <van-icon name="m_dashang" />
                                    <span class="pay-text">100.10</span> 
                                </div> 
                                <div class="pay-title">百里挑一</div>
                            </div> 
                            <div class="pay-box j-red_click praiseBtn" normalImg="../img/icon-5.png" money="188.88"> 
                                <img src="../img/icon-5.png" alt="" class="pay-img"> 
                                <div class="pay-num"> 
                                    <!-- <span class="pay-icon"></span> -->
                                    <van-icon name="m_dashang" />
                                    <span class="pay-text">188.88</span> 
                                </div> 
                                <div class="pay-title">叶大户打赏</div> 
                            </div> 
                        </div> 
                        <div class="pay-button" @click="toast_control = true" money="6.66">立即打赏</div> 
                        <div class="pay_button" @click="toast_show = true">留言评论</div>
                    </div>   
                </div>
                <div style="height:6px;background-color:#f2f2f2;"></div>
                <div class="read-content"> 
                    <div class="read-content-title"> 
                        <!-- <span class="read-title-icon"></span>  -->
                        <span class="read-title-text">750人已阅</span> 
                    </div>
                </div>
                <div class="box"> 
                    <div class="imgs"><img src="../img/900500.jpg" alt="" class="img"></div> 
                    <div class="xushu">
                        <p>hahaha</p>
                        <p class="kouyu">口语</p>
                    </div>
                    <div class="num-time">
                        <div class="num"> 
                            <van-icon name="m_dashang" />
                            <span class="text">52.00</span> 
                        </div> 
                        <div class="time">2019-09-24 17:53:50</div>
                    </div> 
                </div>    
                <div class="note-qrcode"> 
                    <div class="qrcode-text">所有笔记仅供学习</div> 
                    <img src="../img/gencaopan.jpg" alt="跟操盘" class="qrcode-img">
                </div> 
                <div class="toast"  v-show="toast_control"> 
                    <div class="toast-container"> 
                        <div :style="bgImg">
                        <div class="close_box"> 
                            <img class='close_img' src="../img/xx.png" @click="toast_control = false"> 
                        </div> 
                        <div class="red-layer-banner"> 
                            <img src="../img/132.jpg" class="red-avatar"> 
                            <div class="red-name">灰太郎</div> 
                        </div>
                        </div>
                        <div class="red-layer-content"> 
                            <img src="../img/icon-1.png" class="red-c-img">
                            <div class="red-c-money normalMoney">8.88</div> 
                            <input type="text" class="red-c-input" placeholder="你想说什么?立即留言"> 
                            <div class="red-c-button" @click="daShang">打赏</div> 
                        </div> 
                    </div> 
                </div> 
                <div class="toast-mask" v-show="toast_control"></div>
                <van-popup v-model="toast_show" position="bottom">
                    <div class="m-rep-layer"> 
                        <div class="m-rep"> 
                            <div class="rep-layer-title"> 
                                <div class="r-t-l" @click="quxiao">取消</div>
                                <div class="r-t-r" @click="submit">提交</div> 
                            </div> 
                            <div class="rep-layer-content"> 
                                <textarea class="addCom_content" id="rep-text"></textarea> 
                            </div> 
                        </div>
                    </div> 
                </van-popup>
            </div>
        </div>
         
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
            toast_control: false,
            toast_show:false,
            liked:false,
            content:'+关注',
            bg_color:"#f42241",
            ft_color:"#fff",
            bgImg:{
                backgroundImage:"url("+require('../img/redbag.png')+")",
                backgroundRepeat: "no-repeat",
                backgroundSize:'100% 100%'
            },
        }
    },
    methods:{
        quxiao(){
            this.toast_show=false;
        },
        followBtn(e){
            this.liked=!this.liked;
            if(this.liked){
                this.content="已关注";
                this.bg_color="#fff";
                this.ft_color="#ccc";
            }
            else{
                this.content="+关注";
                this.bg_color="#f42241";
                this.ft_color="#fff";
            }
        },
        submit(){

        },
        daShang(){

        }
    }
}
</script>

<style lang="less" scoped="scoped">
    .list{
        display: flex;
        padding: 12px 0;
        background-color: #fff;
        .imgs{
            width: 15%;
            text-align: center;
            .img{
                width: 35px;
                height: 35px;
            }
        }
        .count{
            width: 60%;
            .count_c{
                font-size: 12px;
                line-height: 18px;
                color: rgb(160, 156, 156);
            }
        }
        .guanzhu{
            width: 20%;
            // padding-right: 8px;
            margin-top: 6px;
            .m-concern{
                font-size: 12px;
                // color: #ccc;
                border: 1px solid #ccc;
                text-align: center;
                padding: 5px;
                border-radius: 15px;
            }
        }
    }
    .note-content{
        background-color: #fff;
        padding: 5px 0;
        .media-info-box{
            padding: 15px 0;
            .media-info-title{
                font-size: 18px;
                font-weight: bold;
                border-left: 4px solid #f42241;
                line-height: 24px;
                padding-left: 5px;
            }
            .media-info-mt{
                padding-left: 8px;
                .f-r{
                    font-size: 12px;
                    color: #ccc;
                }
            }
        }
        .media-info-content{
            padding: 10px;
            text-align: justify;
            border-top: 1px solid rgba(235, 223, 223, 0.3);
            .imgs{
                padding: 5px 0;
                .img{
                    width: 100%;
                }
            }
        }
        .media-share{
            padding: 0 10px;
            img{
                height: 18px;
            }
        }
        .pay-content{
            margin-top: 15px;
            .pay-panel{
                display: flex;
                width: 100%;
                text-align: center;
                .pay-box{
                    width: 20%;
                    .pay-img{
                        width: 40px;
                    }
                    .pay-num{
                        font-size: 10px;
                        color: red;
                    }
                    .pay-title{
                        font-size: 12px;
                        line-height: 22px;
                        color: #ccc;
                    }
                }
            }
            .pay-button,.pay_button{
                width: 70px;
                font-size: 14px;
                margin: 0 auto;
                margin-top: 10px;
                border: 1px solid #f42241;
                text-align: center;
                padding: 6px 15px;
                border-radius: 15px;
                color: #fff;
                background-color: #f42241;
            }
            .pay_button{
                margin-bottom: 10px;
            }
        }
    }
    .read-content{
        padding: 10px;
        border-bottom: 1px solid rgb(223, 220, 220,0.2);
        background-color: #fff;
        .read-title-text{
            font-size: 12px;
            padding-left: 5px;
            border-left: 3px solid red;
        }
    }
    .box{
        display: flex;
        padding: 10px 0;
        border-bottom: 1px solid rgb(223, 220, 220,0.2);
        background-color: #fff;
        &:last-child{
            border-bottom: none;
        }
        .imgs{
            width: 15%;
            text-align: center;
            .img{
                width: 35px;
                height: 35px;
            }
        }
        .xushu{
            width: 49%;
            font-size: 12px;
            .kouyu{
                margin-top: 10px;
                color: #ccc;
            }
        }
        .num-time{
            width: 35%;
            padding: 0 10px;
            font-size: 10px;
            text-align: right;
            .num{
                color: rgb(160, 4, 4);
            }
            .time{
                color: #ccc;
                line-height: 22px;
            }
        }
    }
    .note-qrcode{
        margin-top: 6px;
        background-color: #fff;
        text-align: center;
        .qrcode-text{
            padding: 10px 0;
            color: #ccc;
        }
        .qrcode-img{
            width: 130px;
        }
    }
    .toast-mask {
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.8);
        z-index: 10000;
        width: 100%;
        height: 100%;
    }
    .toast {
        position: fixed;
        top: 45%;
        left: 50%;
        z-index: 20000;
        transform: translate(-50%, -50%);
        width: 18.4375rem;
        background: #f42241;
        border-radius: 0.3125rem;
        // padding: 0.3125rem;
        padding-bottom: 20px;
        .toast-container {
            position: relative;
            width: 100%;
            height: 100%;
            // padding: 8px;
            .close_box{
                text-align: right;
                padding: 2px 7px;
                .close_img{
                    width: 12px;
                    height: 10px;
                }
            }
            .red-layer-banner{
                text-align: center;
                // margin-top: 2px;
                padding:2px 0 18px;
                .red-avatar{
                    width: 46px;
                }
                .red-name{
                    font-size: 12px;
                    color: #fff5b4;
                    line-height: 24px;
                }
            }
            .red-layer-content{
                text-align: center;
                margin-top: 30px;
                .red-c-img {
                    display: block;
                    margin: 0 auto;
                    width: 80px;
                    height: 80px;
                }
                .red-c-money {
                    font-size: 19px;
                    color: #fff5b4;
                }
                .red-c-input {
                    border: 0;
                    border-radius: 5px;
                    width: 245px;
                    height: 35px;
                    line-height: 35px;
                    padding: 0 5px;
                    font-size: 13px;
                    margin: 25px 0;
                }
                .red-c-button {
                    margin: 0 auto;
                    width: 245px;
                    height: 35px;
                    line-height: 35px;
                    background: #fde434;
                    border-radius: 35px;
                    font-weight: 700;
                    color: #f42241;
                    font-size: 15px;
                }
            }
        }
    }
    .m-rep-layer{
        padding: 10px;
        background-color: #efefef;
        .m-rep{
            .rep-layer-title{
                display: flex;
                margin-bottom: 12px;
                font-size: 12px;
                .r-t-l{
                    width: 50%;
                }
                .r-t-r{
                    text-align: right;
                    width: 50%;
                }
            }
        }
        .rep-layer-content{
            .addCom_content{
                width: 99%;
                height: 150px;
            }
        }
    }
</style>