<template>
  <div id="main">
    <Header title="喵喵电影"></Header>
    <div id="content">
      <div class="movie_menu">
        <router-link tag="div" to="/movie/city" class="city_name">
          <span>大连</span><i class="iconfont icon-ico_arrows_unfold"></i>
        </router-link>
        <div class="hot_switch">
          <router-link tag="div" to="/movie/nowPlaying" class="hot_item">正在热映</router-link>
          <router-link tag="div" to="/movie/comingSoon" class="hot_item">即将上映</router-link>
        </div>
        <router-link tag="div" to="/movie/search" class="search_entry">
          <i class="iconfont icon-icon-sousuo"></i>
        </router-link>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
export default {
  name: "Movie",
  components: {
    Header,
    TabBar,
  },
};
</script>

<style lang="scss" scoped>
#content {
  // flex: 1;
  overflow: auto;
  // margin-bottom: 50px;
  position: relative;
  // display: flex;
  // flex-direction: column;
  .movie_menu {
    position: fixed;
    z-index: 999;
    // top: 50px;
    // left: 0;
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    .city_name {
      margin-left: 20px;
      height: 100%;
      line-height: 45px;
    }
    .city_name.active {
      color: #ef4238;
      border-bottom: 2px solid #ef4238;
    }
     .router-link-active {
      color: #ef4238;
      border-bottom: 2px solid #ef4238;
    }
    .hot_switch {
      display: flex;
      height: 100%;
      line-height: 45px;
    }
    .hot_item {
      font-size: 15px;
      color: #666;
      width: 88px;
      text-align: center;
      margin: 0 12px;
      font-weight: 700;
    }
    .hot_item.active {
      color: #ef4238;
      border-bottom: 2px solid #ef4238;
    }
    .search_entry {
      margin-right: 20px;
      height: 100%;
      line-height: 45px;
    }
    .search_entry.avtive {
      color: #ef4238;
      border-bottom: 2px solid #ef4238;
    }
    .search_entry i {
      font-size: 24px;
      color: red;
    }
  }
}
</style>