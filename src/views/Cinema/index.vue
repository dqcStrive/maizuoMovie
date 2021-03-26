<template>
  <div>
    <Header title="Cinema"></Header>
    <div id="content">
      <div class="cinema_menu">
        <router-link tag="div" to="/movie/city" class="city_name">
          <span>全城</span><i class="iconfont icon-ico_arrows_unfold"></i>
        </router-link>
        <router-link tag="div" to="/movie/city" class="brand_name">
          <span>品牌</span><i class="iconfont icon-ico_arrows_unfold"></i>
        </router-link>
        <router-link tag="div" to="/movie/city" class="feature">
          <span>特色</span><i class="iconfont icon-ico_arrows_unfold"></i>
        </router-link>
      </div>
    </div>
    <cinemaList></cinemaList>
    <TabBar></TabBar>
  </div>
</template>

<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import cinemaList from "@/components/CinemaList";
export default {
  name: "Cinema",
  components: {
    Header,
    TabBar,
    cinemaList
  },
};
</script>

<style lang="scss" scoped>
#content {
 .cinema_menu{
   position: fixed;
   height: 45px;
   top: 50px;
   z-index: 999;
   display: flex;
   justify-content: space-between;
   border-bottom: 1px solid #e6e6e6;
   background-color: #fff;
   width: 100%;
   height: 45px;
  .city_name,.brand_name,.feature{
    margin-left: 20px;
    margin-right: 20px;
    height: 100%;
    line-height: 45px;
  }
  .router-link-active {
      color: #ef4238;
      border-bottom: 2px solid #ef4238;
    }
 }
}
</style>