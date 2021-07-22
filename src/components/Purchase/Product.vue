<template>
  <div id="product">
    <div id="pic">
      <img src="@/assets/img/purchase.jpg" alt="" />
    </div>
    <div id="spec">
      <p>P01</p>
      <p>充電奶酥</p>
      <hr />
      <p>NT.390</p>
      <p>
        <b><small>口味</small></b>
      </p>
      <p><input class="btn" type="button" value="經典口味抹醬" /></p>
      <p>
        <b><small>容量</small></b>
      </p>
      <p><input class="btn" type="button" value="淨重450g" /></p>
      <p>
        <b><small>數量</small></b>
      </p>
      <p>
        <span><button @click="handleMinus">−</button></span>
        <input id="number" type="text" :value="volumn" />
        <span
          ><button
            @click="
              {
                volumn++;
              }
            "
          >
            +
          </button></span
        >
      </p>
      <p>
        <button id="buy"><fa icon="check" /> 立即購買</button>
      </p>
      <p id="bot">
        <span>
          <button id="collection"><fa icon="heart" /> 加入收藏</button>
        </span>
        <span>
          <button id="cart"><fa icon="shopping-cart" /> 加入購物車</button>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup(props) {
    let volumn = ref(0);
    const handleMinus = () => {
      if (volumn.value > 0) {
        volumn.value -= 1;
      }
    };
    return { volumn, handleMinus };
  },
};
</script>

<style lang="scss" scoped>
#product {
  width: 100%;
  display: flex;
  flex-direction: row;
  > #pic {
    flex: 4;
    margin-left: 10%;
    > img {
      object-fit: contain;
      height: 500px;
    }
  }
  > #spec {
    flex: 4;
    margin-right: 10%;
    margin-top: -15px;
    width: 100%;
    > p {
      text-align: left;
      margin-left: 25px;
      > .btn {
        width: 100px;
        height: 40px;
        color: white;
        background: grey;
        border: 0;
        border-radius: 5px;
        cursor: pointer;
      }
      > .btn:hover {
        background: lightgray;
      }
      > #number {
        margin: 0 5px;
        width: 30px;
        text-align: center;
      }
      > #buy {
        width: 90%;
        height: 35px;
        color: white;
        background: rgb(82, 82, 82);
        border: 0;
        margin: 5px 0;
        cursor: pointer;
      }
    }
    > hr {
      border: 0;
      width: 90%;
      height: 1px;
      margin: 0 auto;
      background: rgb(224, 224, 224);
    }
    > #bot {
      height: 35px;
      width: 85%;
      > span {
        height: 35px;
        > #collection {
          height: 35px;
          width: 45%;
          margin: 5px 0;
          cursor: pointer;
        }
        > #cart {
          height: 35px;
          width: 45%;
          margin: 5px 0 5px 10%;
          cursor: pointer;
        }
      }
    }
  }
}
</style>