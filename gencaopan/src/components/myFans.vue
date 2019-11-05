<template>
  <div>
    <div class="list">
        <div class="imgs"><img src="../img/132.jpg" class="img"></div>
        <div class="count">
            <p>灰太狼</p>
            <p class="count_c"><span>0</span>篇笔记&nbsp;被打赏<span>0元</span></p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
}
</script>

<style lang="less" scoped="scoped">
    .list{
        display: flex;
        padding: 12px 0;
        border-bottom: 1px solid rgb(231, 227, 227);
        .imgs{
            width: 15%;
            text-align: center;
            .img{
                width: 35px;
                height: 35px;
            }
        }
        .count{
            width: 85%;
            .count_c{
                font-size: 12px;
                line-height: 18px;
                color: rgb(160, 156, 156);
                span{
                    color: rgb(250, 6, 6,0.7);
                }
            }
        }
    }
</style>