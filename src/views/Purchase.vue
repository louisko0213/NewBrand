<template>
  <div>
    <Nav />
    <BigLogo id="big" />
    <p><small>充電奶酥 | 經典口味</small></p>
    <hr />
    <div id="route">
      <span
        ><router-link to="/"><fa icon="home" /> 首頁</router-link></span
      >
      <span> / </span>
      <span><router-link to="/purchase">奶酥抹醬</router-link></span>
      <span> / </span>
      <span><router-link to="/purchase">充電奶酥</router-link></span>
    </div>
    <Product id="product" />
    <hr />
    <Introduction />
    <Footer />
    <GoTop />
  </div>
</template>

<script>
import Nav from "@/components/Common/Nav.vue";
import BigLogo from "@/components/Home/BigLogo.vue";
import Product from "@/components/Purchase/Product.vue";
import Footer from "@/components/Common/Footer.vue";
import Introduction from "../components/Purchase/Introduction.vue";
import GoTop from "@/components/Common/GoTop.vue";
export default {
  components: {
    Nav,
    BigLogo,
    Product,
    Introduction,
    Footer,
    GoTop,
  },
};
</script>

<style lang="scss" scoped>
#big {
  margin-top: 50px;
}
hr {
  border: 0;
  margin: 20px auto;
  width: 90%;
  height: 1px;
  background: rgb(224, 224, 224);
}
#route {
  position: absolute;
  left: 5%;
}
span,
a {
  color: rgb(145, 145, 145);
  font-size: 12px;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
#product {
  margin-top: 70px;
}
</style>