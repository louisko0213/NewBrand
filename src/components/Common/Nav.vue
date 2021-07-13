<template>
  <div id="nav">
    <router-link to="/">
      <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
        <circle class="cls-1" cx="20" cy="20" r="20" />
        <path
          class="cls-2"
          d="M55.46,37.5A7.88,7.88,0,0,0,50,39.58l0,0,0,0a7.88,7.88,0,0,0-5.42-2.08c-4.16,0-7.54,3-7.54,6.81a6.64,6.64,0,0,0,3.25,5.59l0,10.89A1.73,1.73,0,0,0,42,62.5h2.52V61.26H42a.47.47,0,0,1-.48-.47V49.24l-.61-.38a5.44,5.44,0,0,1-2.67-4.55c0-3.08,2.82-5.57,6.29-5.57a6.59,6.59,0,0,1,4.56,1.74l.9.84.9-.84a6.59,6.59,0,0,1,4.56-1.74c3.47,0,6.29,2.49,6.29,5.57a5.44,5.44,0,0,1-2.67,4.55l-.61.38V60.79a.47.47,0,0,1-.48.47H48.28V57.4l7.35-8.6a.39.39,0,0,0,.06-.44.42.42,0,0,0-.38-.24H51.22l1.32-5.25a.42.42,0,0,0-.21-.48.44.44,0,0,0-.52.11l-7.44,8.7a.39.39,0,0,0-.06.44.41.41,0,0,0,.38.24h4.09l-1.34,5.27h0V62.5H58a1.72,1.72,0,0,0,1.73-1.71V49.92l0,0A6.64,6.64,0,0,0,63,44.31c0-3.76-3.38-6.81-7.54-6.81M49.73,52.14a.44.44,0,0,0-.08-.37.4.4,0,0,0-.33-.17H45.6l5.69-6.92-1,4.2a.47.47,0,0,0,.07.37.42.42,0,0,0,.34.17H54.4l-5.69,6.92Z"
          transform="translate(-30 -30)"
        />
      </svg>
    </router-link>
    <div id="member">
      <router-link to="/login"><p>會員登入</p></router-link>
      <router-link to="/search"><p>訂單查詢</p></router-link>
      <router-link to="/cart"><p>購物車</p></router-link>
    </div>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
  <router-view />
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
#nav {
  position: fixed;
  width: 100%;
  top: 0;
  background-color: rgb(241, 241, 241);
  height: 50px;
  z-index: 9;
  #logo {
    position: absolute;
    left: 10px;
    top: 5px;
  }

  #member {
    position: absolute;
    right: 0;
    top: 0px;
    > p {
      color: #7c7c7c;
    }
  }

  p {
    display: inline-block;
    padding: 0 30px;
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
svg {
  width: 40px;
  height: 40px;
  .cls-1 {
    fill: #cd312d;
  }
  .cls-2 {
    fill: #fff;
  }
}
</style>