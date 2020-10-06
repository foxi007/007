<template>
  <div class="footer">
    <ul class="dess">
      <router-link tag='li' to='/homepage'>首页</router-link>
      <router-link tag='li' to='/classify'>分类</router-link>
      <router-link tag='li' to='/cart'>购物车</router-link>
      <router-link tag='li' to='/mine'>我的</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" socped>
* {
  margin: 0;
  padding: 0;
}
.footer ul li {
  list-style: none;
  flex: 1;
  height: 50px;
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: white;
  border-top: 2px #ebe8e3 solid;
}
.dess {
  display: flex;
  text-align: center;
  height: 50px;
  align-items: center;
  li{
    line-height: 50px;
    border-right: 1px solid #ebe8e3;
  }
}
.router-link-exact-active  {
  color: #f03d37;
  background: #ebe8e3;
}
</style>