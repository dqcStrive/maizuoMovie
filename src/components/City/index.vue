<template>
  <div class="city_body">
    <div class="city_list">
      <div class="city_hot">
        <h2>热门城市</h2>
        <ul class="clearfix">
          <li v-for="item in hotList" :key="item.id">{{ item.nm }}</li>
        </ul>
      </div>
      <div class="city_sort" ref="city_sort">
        <div v-for="item in cityList" :key="item.index">
          <h2>{{ item.index }}</h2>
          <ul>
            <li v-for="itemList in item.list" :key="itemList.id">
              {{ itemList.nm }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="clearfix">
      <ul class="city_index">
        <li
          v-for="(itemIndex, index) in cityList"
          :key="itemIndex.index"
          @touchstart.stop.prevent="handleToIndex(index)"
        >
          {{ itemIndex.index }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityList: [],
      hotList: [],
      i:0
    };
  },
  name: "City",
  mounted() {
    this.axios.get("/data/cities.json").then((res) => {
      let cities = res.data.data;
      var {cityList,hotList} = this.formatCityList(cities);
      this.cityList = cityList;
      this.hotList = hotList;
    })
  },
  updated(){

  },
  methods: {
    formatCityList(cities) {
      var cityList = [];
      var hotList = [];

      for(var i = 0;i< 5;i++){
        hotList.push(cities[i])
      }

      for (var i = 0; i < cities.length; i++) {
        let firstLetter = cities[i].py.substring(0,1).toUpperCase();
        if (toCom(firstLetter)) {
          cityList.push({index: firstLetter,list: [{ nm: cities[i].nm, id: cities[i].id }],});
        } else {
          for (let j = 0; j < cityList.length; j++) {
            if (cityList[j].index === firstLetter) {
              cityList[j].list.push({ nm: cities[i].nm, id: cities[i].id });
            }
          }
        }
      }

      cityList.sort(function(n1,n2){
        if(n1.index > n2.index){
          return 1;
        }else if(n1.index < n2.index){
          return -1;
        }else{
          return 0;
        }
      })

      function toCom(firstLetter) {
        for (let i = 0; i < cityList.length; i++) {
          if (cityList[i].index === firstLetter) {
            return false;
          }
        }
        return true;
      }
      return {
        cityList,
        hotList 
      }
    },
    handleToIndex(index) {
      var h2 = this.$refs.city_sort.getElementsByTagName('h2');
      this.$refs.city_sort.addEventListener('scroll',() => {
        console.log(111);
      })
    },
  },
};
</script>

<style lang="scss" scoped>
.city_body {
  margin-top: 50px;
  // margin-bottom: 50px;
  display: flex;
  width: 100%;
  // position: absolute;
  // top: 0;
  // bottom: 0;
  overflow: scroll;

  .city_list {
    margin-right: 20px;
    flex: 1;
    overflow: scroll;
    background: #fcede5;
    .city_hot {
      h2 {
        padding-left: 15px;
        line-height: 30px;
        font-size: 14px;
        background: #f0f0f0;
        font-weight: normal;
      }
      ul {
        li {
          float: left;
          background: #fff;
          width: 29%;
          height: 33px;
          margin-top: 15px;
          margin-left: 3%;
          padding: 0.4px;
          border: 1px solid #e6e6e6;
          text-align: center;
          line-height: 33px;
        }
      }
      .clearfix::after {
        content: "";
        display: block;
        clear: both;
        *zoom: 1;
      }
    }
    .city_sort {
      div {
        margin-top: 20px;
      }
      h2 {
        padding-left: 15px;
        line-height: 30px;
        font-size: 14px;
        background: #f0f0f0;
        font-weight: normal;
      }
      ul {
        padding-left: 10px;
        margin-top: 10px;
        li {
          line-height: 30px;
        }
      }
    }
  }
  .city_list::-webkit-scrollbar {
    background-color: transparent;
    width: 0;
  }
  .city_index {
    margin-top: 10px;
    position: fixed;
    top: 50%;
    right: 2px;
    transform: translateY(-50%);
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-left: 1px #e6e6e6 solid;
  }
}
</style>