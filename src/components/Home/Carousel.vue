<template>
  <div>
    <p>充電奶酥 | 經典口味</p>
    <div class="slideshow-container">
      <div class="mySlides fade">
        <img src="@/assets/img/first.jpg" />
      </div>
      <div class="mySlides fade">
        <img src="@/assets/img/second.jpg" />
      </div>
      <div class="mySlides fade">
        <img src="@/assets/img/third.jpg" />
      </div>
      <div class="mySlides fade">
        <img src="@/assets/img/forth.jpg" />
      </div>
      <div class="mySlides fade">
        <img src="@/assets/img/fifth.jpg" />
      </div>
      <div class="mySlides fade">
        <img src="@/assets/img/sixth.jpg" />
      </div>
      <div class="mySlides fade">
        <img src="@/assets/img/seventh.jpg" />
      </div>

      <a class="prev">&#10094;</a>
      <a class="next">&#10095;</a>
    </div>
    <br />

    <div id="dots">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup(props) {
    onMounted(() => {
      let slideIndex = 1;
      showSlides(slideIndex);
      for (let j = 0; j < document.getElementsByClassName("dot").length; j++) {
        document.getElementsByClassName("dot")[j].onclick = () => {
          showSlides((slideIndex = j + 1));
        };
      }
      document.getElementsByClassName("prev")[0].onclick = () => {
        showSlides((slideIndex -= 1));
      };
      document.getElementsByClassName("next")[0].onclick = () => {
        showSlides((slideIndex += 1));
      };

      function showSlides(j) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (j > slides.length) {
          slideIndex = 1;
        }
        if (j < 1) {
          slideIndex += slides.length;
        }
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        if (slideIndex > slides.length) {
          slideIndex = 1;
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
      }

      setInterval(() => {
        slideIndex++;
        showSlides(slideIndex);
      }, 2000);
    });
  },
};
</script>

<style lang="scss" scoped>
/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 15%;
  border-radius: 3px 0 0 3px;
}
.prev {
  left: 15%;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

img {
  object-fit: cover;
  height: 500px;
  width: 900px;
  vertical-align: middle;
}
* {
  box-sizing: border-box;
}
body {
  font-family: Verdana, sans-serif;
}
.mySlides {
  display: none;
}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  margin: auto;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 10px;
  width: 10px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

#dots {
  position: absolute;
  width: 100%;
  margin: -50px auto 0 auto;
}

.active {
  background-color: #ffffff;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
</style>