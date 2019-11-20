<template>
  <div>
      <div class="table">
          <div class="heyue">合约</div>
          <div>买持仓</div>
          <div>买入价</div>
          <div>卖持仓</div>
          <div>卖出价</div>
          <div class="heyue">成交时间</div>
      </div>
      <div class="content">
          <div class="heyue">
              <p>xxxxxx</p>
              <p>xxxxxx</p>
          </div>
          <div>0.00</div>
          <div>2300</div>
          <div>0.00</div>
          <div>3000</div>
          <div class="heyue">2019-11-1</div>
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
    padding: 5px 0;
    border-bottom: 1px solid #ccc;
    div{
        width: 15%;
    }
    .heyue{
        width: 20%
    }
}
.table{
    font-weight: normal;
    padding: 8px 0;
}
.content{
    color: #666;
}
</style>