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
                    <a style="display:none;" class="book-btn charge" @click="control = true" data-rel="popup" data-position-to="window" data-transition="fade">注册导师</a>
                </div> 
            </div> 
            <!-- 20 -->
            <van-popup v-model="toast_control"> 
                <div class="toast-container"> 
                    <div> 
                        <div class="gao">账户:</div> 
                        <van-field
                            v-model="username"
                            placeholder="期货保证金监控中心账户"
                            class="bor"
                        />
                    </div> 
                    <div> 
                        <div class="gao">密码:</div> 
                        <van-field
                            v-model="password"
                            type="password"
                            placeholder="期货保证金监控中心密码"
                            class="bor"
                        />
                    </div> 
                    <div class="toast-cancel" @click="submit">提交</div>
                </div>
            </van-popup>  
            <!-- 48 -->
            <ul class="superior-nav fix"> 
                <li class="active" @click="toJiaoYi" :style="{color:zi_color}">交易概况</li> 
                <li @click="toJIngZhi" :style="{color:ziy_color}">我的净值</li> 
            </ul>
            <!-- 53 -->
            <div class="superior-content">
                
                <ary v-if="xianshi"></ary> 
                <netWorth v-if="xshi"></netWorth>
                
            </div> 
            <van-popup v-model="control"> 
                <div class="toast-container"> 
                    <div> 
                        <div class="gao">期货公司:</div> 
                        <div class="option">
                        <select class="select"  v-model="selected">
                            <option value="">请选择开户公司</option> 
                            <option :value="item.statusId" v-for="(item,index) in statusArr" :key="item.id" :index="index">{{item.statusVal}}</option>
                        </select>
                        </div>
                    </div> 
                    <div> 
                        <div class="gao">交易账户:</div> 
                        <van-field
                            v-model="username"
                            placeholder="请输入交易账户"
                            class="bor"
                        />
                    </div> 
                    <div> 
                        <div class="gao">交易密码:</div> 
                        <van-field
                            v-model="password"
                            type="password"
                            placeholder="请输入交易密码"
                            class="bor"
                        />
                    </div> 
                    <div class="toast-cancel" @click="submit">提交</div>
                </div>
            </van-popup>  
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
            ziy_color:"#666",
            control: false,
            statusArr:[
                {
                    statusId:'0',
                    statusVal:'请选择'
                },
                {
                    statusId:'1',
                    statusVal:'未处理'
                },
                {
                    statusId:'2',
                    statusVal:'处理中'
                },
                {
                    statusId:'3',
                    statusVal:'处理完成'
                },
            ],
            selected:''
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
            //此处放接口

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
    //193
    .van-popup{
        padding: 12px 17px;
        border-radius: 5px;
        box-shadow: 0 0 12px rgba(0,0,0,.6);
    }
    .van-overlay {
        background-color: #252525;
    }
    .toast-container {
        // position: relative;
        //204
        .gao{
            line-height: 35px;
        }
        .bor{
            border: 1px solid #ccc;
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
        .option{
            width: 255px;
            height: 38px;
            position: relative;
        }
        .option select{
            // border-radius: 5px;
            border: 1px solid #ccc;
            background-color: #f2f2f2;
            text-align: center;
            /*清除select聚焦时候的边框颜色*/
            outline: none;
            /*将select的宽高等于div的宽高*/
            width: 100%;
            height: 38px;
            line-height: 38px;
            /*隐藏select的下拉图标*/
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            /*通过padding-left的值让文字居中*/
            padding-left: 20px;
        }
        /*使用伪类给select添加自己想用的图标*/
        .option:after{
            content: "";
            width: 16px;
            height: 16px;
            background: url(../img/check_r.png) no-repeat center;
            /*通过定位将图标放在合适的位置*/
            position: absolute;
            right: 20px;
            top: 30%;
            /*给自定义的图标实现点击下来功能*/
            pointer-events: none;
        }
        .option select option{
            text-align: center;
        }
    }
    //233
    .van-cell {
        width: 100%;
        border-radius: 5px;
        padding: 6px 16px;
        // box-shadow: 0 0 3px #b3b1b1 inset;
    }
</style>