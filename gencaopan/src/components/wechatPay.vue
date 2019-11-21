<template>
  <div>
    <div data-role="page" data-dom-cache="true"  style="background-color:#fff;"> 
        <div class="niu_right-msg"> 
            <div class="ok" style="color:#FFFFFF;"> 您需要登陆后才能订阅！</div> 
            <div class="niu_right-msg-bottom">页面将在&nbsp;
                <span style="color:#FF0000" id="remains">{{count}}</span>&nbsp;秒后自动跳转<br />
                手动返回
                <!-- <a href="login" ></a> -->
            </div> 
        </div>  
    </div> 
  </div>
</template>

<script>
export default {
    data(){
        return{
           count:"", 
           id:0
        }
    },
    created(){
        this.goGrdoupRecor()
    },
    methods:{
        goGrdoupRecor(){
            const TIME_COUNT = 3;
            this.id = this.$route.params.id;
            if(!this.timer){
                this.count = TIME_COUNT;
                this.show = false;
                this.timer = setInterval(()=>{
                    if(this.count > 0 && this.count <= TIME_COUNT){
                        this.count--;
                    }else{
                        this.show = true;
                        clearInterval(this.timer);
                        this.timer = null;
                        if(this.id==1){
                            this.$router.push({
                                // path: '/subscribes'
                                 path: '/login'
                            });
                        }
                    }
                },1000)
            }
        }
    }
}
</script>

<style lang="less" scoped="scoped">
    .niu_right-msg{
        .ok{
            width: 80%;
            margin: 3rem auto; 
            box-shadow: 0 0 10px #93D9F3; 
            padding: 20px; 
            color: #fff; 
            background: #93D9F3; 
            border-radius: 10px; 
            font-size: 16px; 
            line-height: 1.5; 
            text-shadow:none;
        }
        .ok:after{ 
            position: absolute; 
            bottom: -26px; 
            left: 20%; 
            content: ''; 
            width: 0; 
            height: 0; 
            border: solid 10px transparent; 
            border-top: solid 16px #93D9F3; 
        }
        .niu_right-msg-bottom{ 
            margin: 0 auto; 
            width: 260px; 
            font-size: 18px; 
            text-shadow: 0 0 3px #bbb; 
            line-height: 1.5;
        }
        span{ 
            font-size: 24px; 
        }
    }
</style>