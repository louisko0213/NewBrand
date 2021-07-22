<template>
  <div>
    <Nav />
    <div id="page">
      <h2>登入</h2>
      <div id="login">
        <label for="account"><b>帳號</b></label>
        <input type="text" id="account" placeholder="e-mail" required />
        <label for="password"><b>密碼</b></label>
        <input type="password" id="password" required />
        <label> <input type="checkbox" /> 記住我 </label>
        <button type="submit" @click="log">登入</button>
        <div id="forgot">
          <a href="#"><fa icon="user" /> 註冊會員</a> |
          <a href="#"><fa icon="question-circle" /> 忘記密碼</a>
        </div>
      </div>
    </div>
    <Footer />
    <GoTop />
  </div>
</template>

<script>
import Nav from "@/components/Common/Nav";
import Footer from "@/components/Common/Footer.vue";
import GoTop from "@/components/Common/GoTop.vue";
export default {
  components: { Nav, Footer, GoTop },
  inject: ["reload"],
  setup(props) {},
  methods: {
    log() {
      this.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
#page {
  margin: 80px auto 0 auto;
  width: 400px;
  height: 500px;
  > #login {
    padding: 16px;
    text-align: left;
    > input {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }
    > button[type="submit"] {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      border: 1px solid #ccc;
      cursor: pointer;
      background: #04aa6d;
      color: white;
    }
    > #forgot {
      margin-top: 20px;
      text-align: center;
      > a {
        text-decoration: none;
        color: rgb(94, 94, 94);
      }
      > a:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>