<template>
  <div>
    <h2>新品</h2>
    <router-link to="/purchase">
      <img src="@/assets/img/order.jpg" alt="" />
      <p id="product">充電奶酥</p>
      <p id="price">NT.390</p>
    </router-link>
  </div>
  <router-view />
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h2 {
  margin: 0 auto;
  border-bottom: 5px solid rgb(143, 142, 142);
  border-radius: 5px;
  width: 80px;
  margin-bottom: 20px;
}
img {
  width: 400px;
  height: 500px;
  object-fit: contain;
}
#product {
  color: rgb(143, 142, 142);
}
p {
  line-height: 10px;
}
#price {
  color: black;
}
a {
  text-decoration: none;
}
</style>