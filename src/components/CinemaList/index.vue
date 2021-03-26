<template>
  <div class="cinema_body">
    <ul>
      <li>
        <div>
          <span>大地影院(澳东世纪)</span>
          <span class="q"><span class="price">22.9</span>元起</span>
        </div>
        <div class="address">
          <span>全州大连经济技术开发区澳东世纪3层</span>
          <span>1763.5km</span>
        </div>
        <div class="card">
          <div>小吃</div>
          <div>折扣卡</div>
        </div>
      </li>
      <li>
        <div>
          <span>大地影院(澳东世纪)</span>
          <span class="q"><span class="price">22.9</span>元起</span>
        </div>
        <div class="address">
          <span>全州大连经济技术开发区澳东世纪3层</span>
          <span>1763.5km</span>
        </div>
        <div class="card">
          <div>小吃</div>
          <div>折扣卡</div>
        </div>
      </li>
      <li>
        <div>
          <span>大地影院(澳东世纪)</span>
          <span class="q"><span class="price">22.9</span>元起</span>
        </div>
        <div class="address">
          <span>全州大连经济技术开发区澳东世纪3层</span>
          <span>1763.5km</span>
        </div>
        <div class="card">
          <div>小吃</div>
          <div>折扣卡</div>
        </div>
      </li>
      <li>
        <div>
          <span>大地影院(澳东世纪)</span>
          <span class="q"><span class="price">22.9</span>元起</span>
        </div>
        <div class="address">
          <span>全州大连经济技术开发区澳东世纪3层</span>
          <span>1763.5km</span>
        </div>
        <div class="card">
          <div>小吃</div>
          <div>折扣卡</div>
        </div>
      </li>
      <li>
        <div>
          <span>大地影院(澳东世纪)</span>
          <span class="q"><span class="price">22.9</span>元起</span>
        </div>
        <div class="address">
          <span>全州大连经济技术开发区澳东世纪3层</span>
          <span>1763.5km</span>
        </div>
        <div class="card">
          <div>小吃</div>
          <div>折扣卡</div>
        </div>
      </li>
      <li>
        <div>
          <span>大地影院(澳东世纪)</span>
          <span class="q"><span class="price">22.9</span>元起</span>
        </div>
        <div class="address">
          <span>全州大连经济技术开发区澳东世纪3层</span>
          <span>1763.5km</span>
        </div>
        <div class="card">
          <div>小吃</div>
          <div>折扣卡</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CinemaList",
};
</script>

<style lang="scss" scoped>
.cinema_body {
  // flex: 1;
  overflow: hidden;
  margin-top: 90px;
  // margin-bottom: 50px;
  ul {
    padding: 20px;
    li {
      border-bottom: 1px solid #e6e6e6;
      margin-bottom: 20px;
    }
  }
  div {
    margin-bottom: 10px;
  }
  .q {
    font-size: 18px;
  }
  .address {
    font-size: 13px;
    color: #666;
    span:nth-of-type(2) {
      float: right;
    }
  }
  .card {
    display: flex;
    div {
      padding: 0.3px;
      height: 15px;
      line-height: 15px;
      border-radius: 2px;
      color: #f90;
      border: 1px solid #f90;
      font-size: 13px;
      margin-right: 5px;
    }
    // div.or {
    //   color: #f90;
    //   border: 1px solid #f90;
    // }
    // div.bl {
    //   color: #589daf;
    //   border: 1px solid #589daf;
    // }
  }
}
</style>