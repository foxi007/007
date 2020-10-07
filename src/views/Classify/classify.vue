<template>
  <div class="classify">
    <el-tabs :tab-position="tabPosition" style="height: 620px">
      <el-tab-pane label="为你推荐">
        <div class="once">
          <div class="once-a">
            <div class="once-b"></div>
            <h3>语农 散装土鸡蛋 360枚 40斤</h3>
            <p>提货时间：10月30号</p>
            <span>￥28.8</span>
            <i>已售2020件</i>
            <div class="once-c">
              <p>+加入购物车</p>
            </div>
          </div>
          <div class="once-a">
            <div class="once-b"></div>
            <h3>语农 散装土鸡蛋 360枚 40斤</h3>
            <p>提货时间：10月30号</p>
            <span>￥28.8</span>
            <i>已售2020件</i>
            <div class="once-c">
              <p>+加入购物车</p>
            </div>
          </div>
          <div class="once-a">
            <div class="once-b"></div>
            <h3>语农 散装土鸡蛋 360枚 40斤</h3>
            <p>提货时间：10月30号</p>
            <span>￥28.8</span>
            <i>已售2020件</i>
            <div class="once-c">
              <p>+加入购物车</p>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="水果区"> 2 </el-tab-pane>
      <el-tab-pane label="蔬菜区"> 3 </el-tab-pane>
      <el-tab-pane label="家禽区">4</el-tab-pane>
      <el-tab-pane label="水产区">5</el-tab-pane>
      <el-tab-pane label="肉食区">6</el-tab-pane>
      <el-tab-pane label="蛋类区">7</el-tab-pane>
      <el-tab-pane label="豆制区">8</el-tab-pane>
      <el-tab-pane label="调味区">9</el-tab-pane>
      <el-tab-pane label="谜面粮油">10</el-tab-pane>
      <el-tab-pane label="餐食烘培">11</el-tab-pane>
      <el-tab-pane label="营养早餐">12</el-tab-pane>
      <el-tab-pane label="鲜奶制品">13</el-tab-pane>
      <el-tab-pane label="休闲食品">14</el-tab-pane>
      <el-tab-pane label="酒水饮料">15</el-tab-pane>
      <el-tab-pane label="家庭纸品">16</el-tab-pane>
      <el-tab-pane label="鲜奶制品">13</el-tab-pane>
      <el-tab-pane label="休闲食品">14</el-tab-pane>
      <el-tab-pane label="酒水饮料">15</el-tab-pane>
      <el-tab-pane label="家庭纸品">16</el-tab-pane>
    </el-tabs>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../../components/Footer";
export default {
  data() {
    return {
      tabPosition: "left",
    };
  },
  components: {
    Footer,
  },
};
</script>

<style  lang="scss" socped>
.once {
  width: 100%;
  min-height: 500px;
  background: chartreuse;
  padding-top: 10px;
  .once-a {
    width: 90%;
    height: 300px;
    margin-left: 5%;
    background: aliceblue;
    border-radius: 10px;
    margin-bottom: 10px;
    .once-b {
      height: 200px;
      background: cyan;
      border-radius: 10px;
    }
    h3 {
      margin-left: 5px;
    }
    p {
      font-size: 14px;
      margin-left: 5px;
    }
    span {
      color: red;
      font-size: 28px;
      font-weight: 600;
    }
    i {
      font-size: 16px;
    }
    .once-c {
      width: 100px;
      height: 30px;
      float: right;
      background: red;
      border-radius: 30px;
      margin-right: 5px;
      p {
        line-height: 30px;
        text-align: center;
        color: antiquewhite;
        font-size: 14px;
      }
    }
  }
}
</style>