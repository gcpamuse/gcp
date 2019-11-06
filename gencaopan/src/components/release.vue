<template>
  <div>
        <van-cell-group>
            <van-field
                value="请输入观点标题"
                label="标题"
            />
        </van-cell-group>
  </div>
</template>

<script>
export default {
    beforeCreate () {
        document.querySelector('body').setAttribute('style', 'background-color:#f2f2f2')
    },
    beforeDestroy () {
        document.querySelector('body').removeAttribute('style')
    },
    data(){
        return{

        }
    }
}
</script>

<style lang="less" scoped="scoped">
    .van-field__control {
        color: #ccc;
    }
</style>