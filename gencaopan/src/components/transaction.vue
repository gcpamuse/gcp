<template>
  <div>
      <div class="table">
          <div class="heyue">合约</div>
          <div class="kaip">买/卖</div>
          <div class="div">成交价</div>
          <div class="div">成交额</div>
          <div class="kaip">开/平</div>
          <div class="heyue">平仓盈亏</div>
          <div class="time">成交时间</div>
      </div>
      <div class="content">
          <div class="heyue">
              <p>xxxxxx</p>
              <p>xxxxxx</p>
          </div>
          <div class="kaip">买</div>
          <div class="div">2300</div>
          <div class="div">30000</div>
          <div class="kaip">开</div>
          <div class="heyue">1200.00</div>
          <div class="time">2019-11-1</div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped="scoped">
.table,.content{
    display: flex;
    font-size: 12px;
    text-align: center;
    // line-height: 36px;
    padding: 5px 0;
    border-bottom: 1px solid #ccc;
    div{
        display: inline-block;
    }
    .div{
        width: 13%;
    }
    .heyue{
        width: 17%;
        // p{
        //     line-height: 18px;
        // }
    }
    .time{
        width: 20%;
    }
    .kaip{
        width: 10%;
    }
}
.table{
    font-weight: bold;
    padding: 8px 0;
}
.content{
    color: #666;
}
</style>