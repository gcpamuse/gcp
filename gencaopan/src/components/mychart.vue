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
                    <a v-if="generate" class="book-btn charge" @click="control = true" data-rel="popup" data-position-to="window" data-transition="fade">注册导师</a>
                    <a v-else class="book-btn charge" @click="toQuxia" data-rel="popup" data-position-to="window" data-transition="fade">生成曲线</a>
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
                
                <ary v-if="xianshi" :id="id"></ary> 
                <netWorth v-if="xshi"></netWorth>
                
            </div> 
            <van-popup v-model="control" class="popu"> 
                <div class="toast-container"> 
                    <div> 
                        <div class="gao">期货公司:</div> 
                        <!-- 60 -->
                        <div class="option1" @click="showPopup">   
                            <input type="hidden" v-model="selectName">
                            <span>{{selectName}}</span>
                            <van-icon name="success1" style="line-height: inherit;" size="18px"/>
                        </div>
                    </div> 
                    <div> 
                        <div class="gao">交易账户:</div> 
                        <van-field
                            v-model="account"
                            placeholder="请输入交易账户"
                            class="bor"
                        />
                    </div> 
                    <div> 
                        <div class="gao">交易密码:</div> 
                        <van-field
                            v-model="tpassword"
                            type="password"
                            placeholder="请输入交易密码"
                            class="bor"
                        />
                    </div> 
                    <div class="toast-cancel" @click="submission">提交</div>
                </div>
            </van-popup>
            <van-popup v-model="show" class="pop">
                <!-- 88 -->
                <div class="option_list" v-for="(item,index) in statusArr" :key="item.id" :index="index">
                    <!-- <div :value="item.statusId" @click="opselect(item)">{{item.statusVal}}</div> -->
                    <div :value="item.statusId" @click="opselect(item)">
                        <van-radio-group v-model="radio">
                            <van-radio :name="item.statusId">{{item.statusVal}}</van-radio>
                        </van-radio-group>
                    </div>
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
            statusArr:[],
            selected:'',
            show: false,
            radio: '1',
            selectName:"请选择开户公司",
            generate:false,
            account:"",
            tpassword:"",
            radio:0,
            id:this.$route.query.id,
            data:{}
        }
    },
    components:{
        ary,
        netWorth
    },
    created(){
        this.initStatusArr();
        // this.initData();
    },
    methods:{
        // initData(){
        //     var params = { 
        //         id: this.id,
        //     };
        //     console.log(params);
        //     this.$axios.post('/futures/info',params).then(res=>{
        //         console.log(res.data.data);
        //         this.data = res.data.data;
        //         console.log("%%%%------"+res.data)
        //     })
        //     .catch( error=>{
        // 　　　　console.log(error);
        // 　　});
        // console.log("%%%%"+this.data)
        // },
        initStatusArr(){
            this.$http.get('/static/gosi.json').then((res) => {
                // console.log(res.data);
                this.statusArr = res.data.statusArr;
			});
        },
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
        toQuxia(){
            this.$axios.post('/user/generateCurve').then((res) => {
                console.log(res.data.data);
                if(res.data.data=="wait"){
                    this.$toast('正在生成曲线');
                    setTimeout(() => {
                        this.generate = true;
                    }, 3000);
                }else{
                    this.toast_control = true;
                }
            });
            // toast_control = true
        },
        submit(){   //提交生成曲线
            if(this.username == ''){
                this.$toast('账户不能为空！');
                return false;
            }
            if(this.password == ''){
                this.$toast('密码不能为空！');
                return false;
            }
            var params = {
                account_no:this.username,
                password:this.password
            }
            this.$axios.post('/user/bindCfmmcAccount',params).then((res) => {
                console.log(res)
            });
            this.toast_control = false;
            this.generate = true;
        },
        showPopup() {
            this.show = true;
        },
        opselect(im){
            this.selectName = im.statusVal;
            this.show = false;
        },
        submission(){  //提交注册导师
            if(this.selectName == "请选择开户公司"){
                this.$toast('您还未选择开户公司！');
                return false;
            }
            if(this.account == ''){
                this.$toast('账户不能为空！');
                return false;
            }
            if(this.tpassword == ''){
                this.$toast('密码不能为空！');
                return false;
            }
            var params = {
                broker_id:this.selectName,
                username:this.account,
                password:this.tpassword
            }
            this.$axios.post('/user/bindTqAccount',params).then((res) => {
                console.log(res)
            });
            this.control = false;
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
        .option1{
            position: relative;
            width: 255px;
            height: 35px;
            line-height: 35px;
            border-radius: 5px;
            text-align: center;
            border: 1px solid #ccc;
            background-color: #ddd;
            .van-icon {
                position: absolute;
                right: 15px;
            }
        }
        //287
    }
    //233
    .van-cell {
        width: 100%;
        border-radius: 5px;
        padding: 6px 16px;
        // box-shadow: 0 0 3px #b3b1b1 inset;
    }
    .pop{
        height: 300px;
        width: 240px;
        padding: 25px;
        border-radius: 0;
        .option_list{
            line-height: 30px;
        }
    }
    .van-radio {
        padding: 8px 0;
    }
</style>