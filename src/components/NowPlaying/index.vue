<template>
  <div class="movie_body">
    <ul>
      <li v-for="(item) in movieList" :key="item.id">
        <div class="pic_show"><img :src="item.img | setWH('128.180')" alt="" /></div>
        <div class="info_list">
          <h2>
            {{ item.nm }}
            <span class="filmType" v-if="isShow(item)">2D</span>
            <span class="filmType" v-else>3D</span>
          </h2>
          <!-- <p>类型<span>{{item.category}}</span></p> -->
          <p>
            观众评<span class="grade">{{ item.sc }}</span>
          </p>
          <p>主演: {{ item.star }}</p>
          <p>{{item.showInfo}}</p>
        </div>
        <div class="btn_mall">购票</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieList: [],
      actors: [],
    };
  },
  name: "nowPlaying",
  mounted(){
    //https://m.maoyan.com/ajax/movieOnInfoList
    this.axios.get('/api/movieOnInfoList')
    .then(res => {
        this.movieList = res.data.movieList;
    })
  },
  methods: {
    isShow(data) {
      if (data.version === "") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.movie_body {
  // flex: 1;
  overflow: auto;
  ul {
    margin: 0 12px;
    margin-top: 45px;

    overflow: hidden;
    li {
      margin-top: 12px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #e6e6e6;
      padding-bottom: 10px;
    }
  }
  .pic_show {
    width: 64px;
    height: 90px;
    img {
      width: 100%;
    }
  }
  .info_list {
    margin-left: 10px;
    flex: 1;
    position: relative;
    h2 {
      margin: 0;
      font-size: 17px;
      line-height: 24px;
      width: 150px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    p {
      font-size: 13px;
      color: #666;
      line-height: 22px;
      width: 200px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      span {
        margin-left: 5px;
      }
    }
    .grade {
      font-weight: 700;
      color: #faaf00;
      font-size: 15px;
    }
    img {
      width: 50px;
      position: absolute;
      right: 10px;
      top: 5px;
    }
    .filmType {
      position: absolute;
      right: 20px;
      top: 6px;
      font-size: 9px;
      color: #fff;
      background-color: #d2d6dc;
      height: 14px;
      line-height: 14px;
      padding: 0 2px;
      border-radius: 2px;
    }
  }
  .btn_mall,
  .btn_pre {
    width: 47px;
    height: 27px;
    line-height: 28px;
    text-align: center;
    background-color: #f03d37;
    color: #fff;
    border-radius: 4px;
    font-size: 12px;
    cursor: pointer;
  }
  .btn_pre {
    background-color: #3c9fe6;
  }
}
</style>