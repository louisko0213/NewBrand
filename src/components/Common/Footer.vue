<template>
  <div>
    <!-- <hr /> -->
    <div id="content">
      <div id="info">
        <h4>Information</h4>
        <p>
          <small>品牌故事</small>
        </p>
        <p>
          <small>付款與運送</small>
        </p>
        <p><small>隱私權政策</small></p>
      </div>
      <div id="brand">
        <h4>CHARGE SCRUMPTIOUS</h4>
        <p><small>Since March 2021</small></p>
        <p>
          <span>
            <a
              href="https://www.facebook.com/%E5%85%85%E9%9B%BB%E5%A5%B6%E9%85%A5-331429024913590/"
              target="_blank"
              ><fa class="fa" :icon="['fab', 'facebook']" /></a
          ></span>
          <span>
            <a
              href="https://www.instagram.com/charge_scrumptious/"
              target="_blank"
              ><fa class="fa" :icon="['fab', 'instagram']" /></a
          ></span>
        </p>
        <p><b>©CHARGE SCRUMPTIOUS </b>/</p>
        <!-- <small>本公司已投保1000萬產品責任險</small> -->
      </div>
      <div id="facebook">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F%25E5%2585%2585%25E9%259B%25BB%25E5%25A5%25B6%25E9%2585%25A5-331429024913590&tabs=timeline&width=350&height=70&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
          width="350"
          height="70"
          style="border: none; overflow: hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
    <div id="copyright">
      <div><small>©2021 All Rights Reserved.</small></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// hr {
//   margin-top: 80px;
//   border-top: 1px solid rgb(177, 177, 177);
// }
#content {
  margin-top: 80px;
  border-top: 1px solid rgb(224, 224, 224);
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: rgb(241, 241, 241);
  > div {
    margin-top: 20px;
    flex: 4;
  }
  #facebook {
    margin-top: 40px;
  }
  span {
    margin: 10px;
    > a {
      color: rgb(54, 54, 54);
    }
    .fa {
      width: 25px;
      height: 25px;
    }
  }
}
#copyright {
  padding: 40px 0 40px 0;
  background-color: rgb(241, 241, 241);
  > div {
    background-color: rgb(226, 224, 224);
  }
}
</style>