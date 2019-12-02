<template>
  <div class="page-group">
        <div class="page"> 
            <div class="content"> 
                <div class="list">
                    <div class="imgs" @click="toLookNotes"><img src="../img/132.jpg" class="img"></div>
                    <div class="count" @click="toLookNotes">
                        <p v-html="userName"></p>
                        <p class="count_c"><span>0</span>篇笔记&nbsp;被打赏<span>0元</span></p>
                    </div>
                    <div class="guanzhu">
                        <div class="m-concern" @click="followBtn" :style="{borderColor:bg_color, color: ft_color,}">{{contet}}</div> 
                    </div>
                </div>
                <div style="height:6px;background-color:#f2f2f2;"></div>
                <div class="note-content"> 
                    <div class="media-info-box"> 
                        <div class="media-info-title" v-html="title"></div> 
                        <div class="media-info-mt"><span class="f-r">{{createAt}}</span></div> 
                    </div>
                    <div class="media-info-content contentArea" style="font-size: 16px;line-height: 1.5;">      
                       <p v-html="content"></p>
                        <div class="imgs">
                            <img :src="'/api'+cover" class="img">
                        </div>
                    </div>
                    <div v-show="amount>0&&isPay" class="media-share j-share_click">
                        <img src="../img/share2.png" alt="分享跟操盘" @click="share_show = true">
                    </div>
                    <div class="pay-content"> 
                        <div v-show="amount>0&&isPay" class="pay-panel"> 
                            <div class="pay-box j-red_click praiseBtn" v-for="(item,index) in list" :key="item.id" :index="index" @click="toDaShang(item,index)">
                                <img :src="item.img" alt="" class="pay-img"> 
                                <div class="pay-num"> 
                                    <van-icon :name="item.icon" />
                                    <span class="pay-text">{{item.money}}</span> 
                                </div> 
                                <div class="pay-title">{{item.title}}</div> 

                            </div>
                        </div> 
                        <div v-if="amount>0&&isPay">
                            <div class="pay-button" @click="rewardDaShang" money="6.66">立即打赏</div> 
                            <div class="pay_button" @click="toast_show = true">留言评论</div>
                        </div>
                        <div v-else class="pay_button">支付{{amount}}</div>
                    </div>   
                </div>
                <div style="height:6px;background-color:#f2f2f2;"></div>
                <div class="read-content"> 
                    <div class="read-content-title"> 
                
                        <span class="read-title-text">750人已阅</span> 
                    </div>
                </div>
                <div v-show="amount>0&&isPay" class="box"> 
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
                            <img :src="img" class="red-c-img">
                            <div class="red-c-money normalMoney">{{money}}</div>
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
                <van-popup
                    v-model="share_show"
                    position="top"
                    @click="share_show = false"
                    class="bg"
                >
                    <div class="bg_img">
                        <img src="../img/share.png" class="share_img">
                    </div>
                </van-popup>
            </div>
        </div>       
  </div>
</template>

<script>
export default {
    data(){
        return{
            toast_control: false,
            toast_show:false,
            liked:false,
            contet:'+关注',
            bg_color:"#f42241",
            ft_color:"#f42241",
            hello:'6.66',
            bgImg:{
                backgroundImage:"url("+require('../img/redbag.png')+")",
                backgroundRepeat: "no-repeat",
                backgroundSize:'100% 100%'
            },
            list:[
                {
                    img:'./static/img/icon-1.png',
                    icon:'m_dashang',
                    money:'6.66',
                    title:'六六大顺！'
                },
                {
                    img:'./static/img/icon-2.png',
                    icon:'m_dashang',
                    money:'13.14',
                    title:'追随一生'
                },
                {
                    img:'./static/img/icon-3.png',
                    icon:'m_dashang',
                    money:'52.00',
                    title:'我爱老师'
                },
                {
                    img:'static/img/icon-4.png',
                    icon:'m_dashang',
                    money:'100.10',
                    title:'百里挑一'
                },
                {
                    img:'static/img/icon-5.png',
                    icon:'m_dashang',
                    money:'188.88',
                    title:'叶大户打赏'
                }
            ],
            share_show:false,
            img:'',
            money:6.66,
            tupian:'/static/img/icon-1.png',
            title:"",
            cover:"",
            content:"",
            amount:'',
            userName:"",
            articleSize:'',
            createAt:"",
            isPay:false,
            usid:0,
            id:this.$route.params.id
        }
    },
    beforeCreate () {
        document.querySelector('body').setAttribute('style', 'background-color:#efeff4')
    },
    beforeDestroy () {
        document.querySelector('body').removeAttribute('style')
    },
    created(){
        this.initdata()
    },
    methods:{
        quxiao(){
            this.toast_show=false;
        },
        followBtn(){
            // this.liked=!this.liked;
            // if(this.liked){
            //     this.contet="已关注";
            //     this.bg_color="#ccc";
            //     this.ft_color="#ccc";
            // }
            // else{
            //     this.contet="+关注";
            //     this.bg_color="#f42241";
            //     this.ft_color="#f42241";
            // }
            if(!this.liked){
                var params = { 
                    isFollow: true,
                    followId: this.usid
                };
                console.log(params)
                this.$axios.post('user/follow',params).then( res=>{
                    console.log(res)
                    if(res.data.code!==200) return
                    this.contet="已关注";
                    this.bg_color="#ccc";
                    this.ft_color="#ccc";
                })
                .catch( error=>{
            　　　　console.log("出错喽："+error);
            　　});
            }
        },
        rewardDaShang(){
            this.img = this.tupian;
            this.money = 6.66;
            this.toast_control = true; 
        },
        submit(){
            this.initdata();
        },
        daShang(){

        },
        toDaShang(item){
            this.img = item.img;
            this.money = item.money;
            this.toast_control = true;
        },
        toLookNotes(){
            this.$router.push({name: 'looknotes',params: { id: this.usid}})
        },
        initdata(){
            // var param = {
            //     id:this.id
            // }
            console.log(this.id+"--------")
            this.$axios.post('/article/info', {id: this.id}).then(res=>{
                console.log(res.data.data)
                this.title = res.data.data.title;
                this.cover = res.data.data.cover;
                this.content = res.data.data.content;
                this.amount = res.data.data.amount;
                this.userName = res.data.data.user.userName;
                this.articleSize = res.data.data.user.articleSize;
                this.liked = res.data.data.user.isFollow;
                this.createAt = res.data.data.createAt;
                this.isPay = res.data.data.isPay;
                this.usid = res.data.data.id;
            })
            .catch( error=>{
        　　　　console.log("出错喽："+error);
        　　});
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
            width: 62%;
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
                // color: #f42241;
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
        top: 48%;
        left: 50%;
        z-index: 20000;
        transform: translate(-50%, -50%);
        width: 18.9375rem;
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
                    height: 12px;
                }
            }
            .red-layer-banner{
                text-align: center;
                // margin-top: 2px;
                padding:2px 0 20px;
                .red-avatar{
                    width: 45px;
                }
                .red-name{
                    font-size: 12px;
                    color: #fff5b4;
                    line-height: 24px;
                }
            }
            .red-layer-content{
                text-align: center;
                // margin-top: 5px;
                .red-c-img {
                    display: block;
                    margin: 0 auto 2px;
                    width: 70px;
                    height: 70px;
                }
                .red-c-money {
                    font-size: 19px;
                    color: #fff5b4;
                }
                .red-c-input {
                    border: 0;
                    border-radius: 5px;
                    width: 235px;
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
    .bg{
        .bg_img{
            text-align: center;
            padding-top: 10px;
            .share_img{
                width: 80%;
            }
        }
    } 
    .bg.van-popup.van-popup--top {
        background-color: rgba(0,0,0,0);
    }
    .van-overlay {
        background-color: rgba(0, 0, 0, 0.8);
    }
</style>