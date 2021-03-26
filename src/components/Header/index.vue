<template>
  <header id="header">
    <h1>{{title}}</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props:{
    title:{
      type: String,
      default: '喵喵影院'
    }
  }

}
</script>

<style lang="scss" scoped>
#header{
  width: 100%;
  height: 50px;
  color: #fff;
  background: #e54847;
  border-bottom: 1px solid #e54847;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  h1{
    font-size: 18px;
    text-align: center;
    line-height: 50px;
    font-weight: normal;
  }
  i{
    position: absolute;
    left: 5px;
    top: 50%;
    margin-top: -13px;
    font-size: 26px;
  }
}
</style>