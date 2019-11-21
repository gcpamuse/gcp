<template>
  <div>
      <div data-role="page" data-dom-cache="true"  style="background-color:#fff;"> 
        <div data-role="main"> 
            <div class="superior-top fix" :style="bgImg"> 
                <div class="pic"><img class="avatar" src="../img/default_middle.png" alt="naihaha"/></div> 
                <div class="superior-main"> 
                    <h2>naihaha</h2> 
                    <div class="mychart_d"> 
                        <p class="mychart_p"> 
                            <span class="mychart_span" style="padding-left:0;float:none;"> 计划你的交易，交易你的计划 </span> 
                            <a class="mychart_a" href="#"></a> 
                        </p> 
                    </div> 
                </div>
                <div class="quxian">
                    <a class="book-btn charge" @click="toast_control = true" data-rel="popup" data-position-to="window" data-transition="fade">生成曲线</a>
                </div> 
            </div> 
            <div class="toast" v-show="toast_control">  
                <div class="toast-container"> 
                    <!-- <div style="min-width:256px">  -->
                        <div> 
                            <div class="gao">账户:</div> 
                            <!-- <input name="zhanghu" type="text" value="" placeholder="期货保证金监控中心账户">  -->
                            <van-field
                                v-model="username"
                                placeholder="期货保证金监控中心账户"
                                class="bor"
                            />
                        </div> 
                        <div> 
                            <div class="gao">密码:</div> 
                            <!-- <input name="password" type="password" value="" placeholder="期货保证金监控中心密码">  -->
                            <van-field
                                v-model="password"
                                type="password"
                                placeholder="期货保证金监控中心密码"
                                class="bor"
                            />
                        </div> 
                        <!-- <a id="makeChart" href="javascript:;" class="user-defined-btn" data-role="button" data-ajax="false" role="button">提交</a>  -->
                            <div class="toast-cancel" @click="submit">提交</div>
                    <!-- </div>  -->
                </div>  
            </div> 
            <div class="toast-mask" v-show="toast_control" @click="toast_control = false"></div>
            <ul class="superior-nav fix"> 
                <li class="active" @click="toJiaoYi" :style="{color:zi_color}">交易概况</li> 
                <li @click="toJIngZhi" :style="{color:ziy_color}">我的净值</li> 
            </ul>
            <!-- <van-tabs v-model="active">
                <van-tab 
                    v-for="tab in tabsItem"
                    :title="tab.name" 
                    :key="tab.type"
                    @click="totab(tab.status)"
                    class="tab">
                </van-tab>
            </van-tabs> -->
            <div class="superior-content">
                
                <ary v-if="xianshi"></ary> 
                <netWorth v-if="xshi"></netWorth>
                
            </div> 
        </div> 
    </div>
    
  </div>
</template>

<script>
import ary from './ary';
import netWorth from './netWorth'
export default {
    data(){
        return{
            bgImg:{
                backgroundImage:"url("+require('../img/s_daoshibg2.jpg')+")",
                backgroundRepeat: "no-repeat",
                backgroundSize:'100% 100%'
            },
            tabsItem: [
                {
                name: "交易概况",
                status: 0
                },
                {
                name: "我的净值",
                status: 1
                }
            ],
            xianshi: true,
            xshi: false,
            active:0, 
            toast_control: false,
            username:'',
            password:'',
            zi_color:"#f24848",
            ziy_color:"#666"
        }
    },
    components:{
        ary,
        netWorth
    },
    methods:{
        toJiaoYi(){
            this.xianshi=true;
            this.xshi=false;
            this.zi_color="#f24848";
            this.ziy_color="#666";
        },
        toJIngZhi(){
            this.xianshi=false;
            this.xshi=true;
            this.zi_color="#666";
            this.ziy_color="#f24848";
        },
        submit(){
            if(this.username == ''){
                this.$toast('账户不能为空！');
                return false;
            }
            if(this.password == ''){
                this.$toast('密码不能为空！');
                return false;
            }
        }
    }
}
</script>

<style lang="less" scoped="scoped">
    .superior-top {
        padding: 10px 0;
        background-color: #fff;
        font-size: 0.750rem;
        border-bottom: solid 1px #f3f3f3;
        display: flex;
        .pic{
            width: 18%;
            text-align: center;
            .avatar{
                border-radius: 10px;
                width: 55px;
                height: 55px;
            }
        }
        .superior-main{
            width: 62%;
            h2{
                font-size: 14px;
                line-height: 22px;
                color: #fff;
            }
            .mychart_d{
                color: #CFB696;
                line-height: 18px;
            }
        }
        .quxian{
            width: 20%;
            text-align: center;
            padding-top: 16px;
            .book-btn{
                background-color: #f24848;
                color: #fff;
                padding:3px 5px;
                border-radius: 5px;
                
            } 
        }
    }
    .superior-nav{
        display: flex;
        text-align: center;
        font-size: 14px;
        li{
            width: 50%;
            padding: 15px 0;
            background-color: #f6f6f6;
            // color: #666;
        }
        .active{
            border-right: 1px solid #eee;
        }
    }
    
    .toast-mask {
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(46, 44, 44, 0.4);
        z-index: 1000;
        width: 100%;
        height: 100%;
    }
    .toast {
        position: fixed;
        top: 50%;
        left: 50%;
        z-index: 2000;
        transform: translate(-50%, -50%);
        width: 17.4375rem;
        background: #fff;
        border-radius: 0.3125rem;
        padding: 0.3125rem;
        box-shadow: 0 0 15px rgb(68, 67, 67);
        .toast-container {
            position: relative;
            width: 100%;
            height: 100%;
            padding: 8px 12px 12px;
            .gao{
                line-height: 35px;
            }
            .bor{
                border: 1px solid #ccc;
            }
            input{
                border: 1px solid #ccc;
                width: 245px;
                padding:8px 5px;
                border-radius: 8px;
                box-shadow: 0 0 3px #b3b1b1 inset;
            }
            input:focus{
                box-shadow: 0 0 0 #b3b1b1 inset;
                box-shadow: 0 0 8px #38c;
            }
            .toast-cancel {
                background: #f24848;
                padding: 12px 5px;
                margin-top: 15px;
                margin-bottom: 5px;
                border-radius: 6px;
                color: #fff;
                width: 245px;
                text-align: center;
            }
        }
    }
    .van-cell {
        width: 92%;
        border-radius: 5px;
        padding: 6px 16px;
        box-shadow: 0 0 3px #b3b1b1 inset;
    }
</style>