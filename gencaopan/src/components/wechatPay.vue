<template>
  <div>
    <div data-role="page" data-dom-cache="true"  style="background-color:#fff;"> 
        <div data-role="main" class="ui-content">  
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
  </div>
</template>

<script>
export default {
    data(){
        return{
           count:"", 
        }
    },
    created(){
        this.goGrdoupRecor()
    },
    methods:{
        goGrdoupRecor(){
            const TIME_COUNT = 3;
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
                        this.$router.push({
                            path: '/subscribes'
                        });
                    }
                },1000)
            }
        }
    }
}
</script>

<style>

</style>