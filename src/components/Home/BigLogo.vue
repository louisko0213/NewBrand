<template>
  <div>
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 130">
      <path
        class="cls-1"
        d="M156.05,34.73c-11.89,0-23,3.83-31.27,10.8l-.23.19-.23-.19c-8.27-7-19.37-10.8-31.27-10.8-24,0-43.49,15.87-43.49,35.39,0,11.59,7,22.46,18.73,29.09l.15,56.64c0,4.9,4.49,8.88,10,8.88H93V158.3H78.44a2.61,2.61,0,0,1-2.75-2.45V95.76l-3.52-2c-9.63-5.44-15.38-14.29-15.38-23.66,0-16,16.27-29,36.26-29,10,0,19.37,3.21,26.3,9l5.2,4.38,5.21-4.38c6.92-5.83,16.26-9,26.29-9,20,0,36.27,13,36.27,29,0,9.37-5.76,18.22-15.4,23.66l-3.5,2v60.09a2.62,2.62,0,0,1-2.76,2.45h-56V138.21l42.44-44.7a2,2,0,0,0,.34-2.31A2.45,2.45,0,0,0,155.2,90H131.58l7.65-27.32A2.08,2.08,0,0,0,138,60.18a2.63,2.63,0,0,0-2.95.53L92.06,106a2,2,0,0,0-.35,2.3,2.46,2.46,0,0,0,2.2,1.26h23.63l-7.78,27.37s0,0,0,0v27.85h60.9c5.51,0,10-4,10-8.88V99.29l.16-.09c11.74-6.62,18.75-17.49,18.75-29.08,0-19.52-19.52-35.39-43.51-35.39M123,110.86a2.11,2.11,0,0,0-.44-1.94,2.52,2.52,0,0,0-1.91-.86H99.15l32.83-36-5.87,21.86a2.14,2.14,0,0,0,.43,1.93,2.53,2.53,0,0,0,1.92.86H150l-32.84,36Z"
        transform="translate(-49.56 -34.73)"
      />
    </svg>
    <p>HUNGRY BATTERY OUT</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.cls-1 {
  fill: #fff;
}
div {
  width: 100%;
  height: 300px;
  background: rgb(205, 49, 45);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  > #logo {
    padding-top: 30px;
    width: 100%;
    height: 190px;
  }
  > p {
    color: white;
    font-weight: bold;
    font-size: 30px;
  }
}
</style>