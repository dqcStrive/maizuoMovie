<template>
  <div class="cinema_body">
    <ul>
      <li v-for="item in cinemaList" :key="item.id">
        <div>
          <span>{{item.nm}}</span>
          <span class="q"><span class="price">{{item.sellPrice}}</span></span>
        </div>
        <div class="address">
          <span>{{item.addr}}</span>
          <span>{{item.distance}}</span>
        </div>
        <div class="card">
          <div v-if="item.snack == '1'">小吃</div>
          <div v-if="item.sell">折扣卡</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      cinemaList:[],
    }
  },
  name: "CinemaList",
  //https://m.maoyan.com/ajax/cinemaDetail?cinemaId=36620&optimus_uuid=ECA6BE9073F311EBA073A53790DC59F0E31D71A6652840688D31CC0DC8567302&optimus_risk_level=71&optimus_code=10
  //https://m.maoyan.com/ajax/cinemaDetail?cinemaId=890
  //https://m.maoyan.com/ajax/search?kw=b&cityId=238&stype=-1
  mounted(){
    this.axios.get('/api/search?kw=b&cityId=1&stype=-1').then(res => {
      this.cinemaList = res.data.cinemas.list;
      console.log(this.cinemaList);
    })
  }
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