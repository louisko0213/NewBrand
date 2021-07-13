<template>
  <div>
    <Nav />
    <h1>This is Login Page</h1>
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
};
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 50px;
}
</style>