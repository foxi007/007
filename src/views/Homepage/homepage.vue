<template>
  <div class="homepage">
    <div class="header">
      <h3>好吃好喝</h3>
      <p>一家只卖当日菜的社区电商</p>
    </div>
    <div class="search">
      <div class="new"></div>
    </div>
    <div class="login">
      <div class="botton"></div>
    </div>
    <div class="eye">
      <div class="e-top">
        <div class="konw">
          <div class="ear">1</div>
          <p>今日新品</p>
        </div>
        <div class="konw">
          <div class="ear">2</div>
          <p>水果区</p>
        </div>
        <div class="konw">
          <div class="ear">3</div>
          <p>蔬菜区</p>
        </div>
        <div class="konw">
          <div class="ear">4</div>
          <p>水产区</p>
        </div>
        <div class="konw">
          <div class="ear">5</div>
          <p>肉类区</p>
        </div>
      </div>
      <div class="e-top">
        <div class="konw">
          <div class="ear">1</div>
          <p>蛋类区</p>
        </div>
        <div class="konw">
          <div class="ear">2</div>
          <p>豆制区</p>
        </div>
        <div class="konw">
          <div class="ear">3</div>
          <p>零食区</p>
        </div>
        <div class="konw">
          <div class="ear">4</div>
          <p>海鲜类</p>
        </div>
        <div class="konw">
          <div class="ear">5</div>
          <p>生活区</p>
        </div>
      </div>
    </div>
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
      <div class="tow">
        <p>》》每日精选好货《《</p>
      </div>
      <div class="tow-a">
        <div class="tow-b"></div>
        <div class="tow-c"></div>
        <div class="tow-d"></div>
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

    <div class="div"></div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../../components/Footer";
export default {
  components: {
    Footer,
  },
};
</script>

<style lang="scss" socped>
.header {
  background: red;
  width: 100%;
  height: 100px;
  h3 {
    color: aliceblue;
    font-size: 20px;
    margin: 0 10px;
    padding: 15px 0;
  }
  p {
    color: aliceblue;
    font-size: 16px;
    margin: 0 10px;
  }
}
.search {
  width: 100%;
  height: 40px;
  background: red;
  .new {
    width: 90%;
    height: 30px;
    border: solid 1px #ebe8e3;
    margin-left: 5%;
    background: aliceblue;
    border-radius: 5px;
  }
}
.login {
  width: 100%;
  height: 80px;
  background: red;
  border-radius: 0 0 50% 50%;
  .botton {
    width: 90%;
    height: 140px;
    border: solid 1px #ebe8e3;
    margin-left: 5%;
    background: aliceblue;
    border-radius: 15px;
    position: relative;
  }
}
.eye {
  width: 100%;
  height: 180px;
  background: aqua;
  margin-top: 70px;
  .e-top {
    height: 90px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    .konw {
      display: flex;
      flex-direction: column;
      .ear {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: blanchedalmond;
        border: solid 1px #ebe8e3;
      }
    }
  }
}
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
.tow {
  width: 100%;
  height: 40px;
  p {
    line-height: 40px;
    text-align: center;
    font-size: 16px;
  }
}
.tow-a {
  width: 90%;
  height: 300px;
  background: blueviolet;
  margin-left: 5%;
  padding-top: 10px;
  margin-bottom: 10px;
  .tow-b {
    height: 290px;
    width: 49%;
    border-radius: 10px;
    background: aqua;
    margin-left: 5px;
    float: left;
  }
  .tow-c {
    width: 46%;
    height: 47%;
    float: right;
    background: bisque;
    border-radius: 10px;
    margin-bottom: 5px;
  }
  .tow-d {
    width: 46%;
    height: 47%;
    float: right;
    background: bisque;
    border-radius: 10px;
  }
}
.div {
  height: 100px;
}
</style>