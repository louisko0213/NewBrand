<template>
  <div>
    <fa id="top" icon="arrow-circle-up" />
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup(props) {
    onMounted(() => {
      const top = document.getElementById("top");
      window.onscroll = () => {
        document.documentElement.scrollTop > 100
          ? (top.style.opacity = "0.9")
          : (top.style.opacity = "0");
      };
      top.onclick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
    });
  },
};
</script>

<style lang="scss" scoped>
#top {
  cursor: pointer;
  position: fixed;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  box-sizing: border-box;
  right: 40px;
  bottom: 20px;
  width: 50px;
  height: 50px;
  opacity: 0;
  transition: opacity ease 0.4s;
}
</style>