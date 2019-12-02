<template>
    <div class="user-info">
        <van-nav-bar @click-left="goBack" title="个人信息" :border="false">
            <van-icon name="left" slot="left" style="font-size:16px;"/>
        </van-nav-bar>
        <van-cell-group>
            <van-cell title="头像" class="cell_middle">
                        <van-uploader :afterRead="avatarAfterRead">
                            <div class="user_avatar_upload">
                                <img :src="avatar" alt="你的头像" v-if="avatar">
                                <van-icon name="upload-image" v-else></van-icon>
                            </div>
                        </van-uploader>
                    </van-cell>
            <van-cell title="昵称" @click="nameShow = true" :value="name" isLink />
            <van-cell title="退出登录" @click="Logout" isLink />
        </van-cell-group>
        <van-dialog
        v-model="nameShow"
        show-cancel-button
        :before-close="nameBeforeClose"
        >
            <van-field
                v-model="name"
                label="昵称"
                placeholder="请输入昵称"
                right-icon="clear"
                @click-right-icon="name = ''"
            />
        </van-dialog>
    </div>
</template>

<script>
export default {
    beforeCreate () {
        document.querySelector('body').setAttribute('style', 'background-color:#f9f9f9')
	},
	beforeDestroy () {
		document.querySelector('body').removeAttribute('style')
	},
    data(){
        return{
            nameShow: false,
            avatar:'http://tg.simutz.com/avatar/83564_middle.jpg',
            name:'哈哈哈',
            user: {}
        }
    },
    methods: {
        goBack(){
            this.$router.go(-1)
        },
        avatarAfterRead(file) {
            console.log(file)
            this.avatar = file.content;
            // var params = { 
            //     avatar:file,
            //     //  avatar:file.content,
            //     //  file: file.file.name
            // };
            let params = new FormData();
            params.append("avatar", file.content);
            this.$axios.post('/article/upload',params).then((res) => {
                console.log(res)
            })
            .catch(error => {
          　　　　console.log("出错喽："+error);
          　});
        },
        nameBeforeClose(action, done) {
            if (action === 'confirm') {
                setTimeout(done, 1000);
            } else {
                done();
            }
        },
        Logout(){
            setTimeout(() => {
				localStorage.removeItem('Authorization');
                this.$router.push('/login');
			},1000)
           
            
        }
    },
    mounted(){
        var params = {
                username:this.name
            };
        this.$axios.post('user/data',params).then(res => {
                console.log(res)
        })
        .catch(error => {
          　　　　console.log("出错喽："+error);
        });
    }
}
</script>

<style lang="less" scoped="scoped">
.user-info {
  .user_avatar_upload {
    position: relative;
    width: 50px;
    height: 50px;
    border: 1px solid #ccc;
    img {
      width: 100%;
      height: 100%;
    }
    i {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 20px;
      color: #ccc;
    }
  }
}
</style>