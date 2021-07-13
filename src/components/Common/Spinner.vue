<template>
  <div>
    <div class="spin"></div>
    <b>{{ number }}%</b>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup(props) {
    let number = ref(0);
    setInterval(() => {
      number.value < 100 ? (number.value += 1) : (number.value = 100);
    }, 30);
    return { number };
  },
};
</script>

<style lang="scss" scoped>
.spin {
  display: block;
  width: 110px;
  height: 110px;
  margin: 30px auto;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top-color: rgb(205, 49, 45);
  animation: spin 1s ease infinite;
  position: absolute;
  top: 35%;
  left: 45%;
}
b {
  position: absolute;
  top: 44%;
  left: 46.5%;
  font-size: 30px;
}
@keyframes spin {
  to {
    transform: rotateZ(360deg);
  }
}
</style>