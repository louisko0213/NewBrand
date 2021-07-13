<template>
  <div>
    <div v-if="finish">
      <Spinner />
    </div>
    <div class="home" v-else>
      <Nav id="navbar" />
      <BigLogo id="big" />
      <Carousel id="carousel" />
      <OrderPic />
      <Footer />
      <GoTop />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Common/Nav.vue";
import BigLogo from "@/components/Home/BigLogo.vue";
import Carousel from "@/components/Home/Carousel.vue";
import OrderPic from "@/components/Home/OrderPic.vue";
import Footer from "@/components/Common/Footer.vue";
import GoTop from "@/components/Common/GoTop.vue";
import Spinner from "@/components/Common/Spinner.vue";

import { onMounted, ref } from "vue";
export default {
  name: "Home",
  components: { Nav, BigLogo, Carousel, OrderPic, Footer, GoTop, Spinner },

  setup(props) {
    var finish = ref(true);
    console.log(finish);
    setTimeout(() => {
      finish.value = false;
      console.log(finish);
    }, 3500);
    return { finish };
  },
};
</script>

<style lang="scss" scoped>
#big {
  margin-top: 50px;
}
#carousel {
  margin-top: 20px;
  position: relative;
  z-index: 1;
}
</style>
