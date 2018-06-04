<template>
  <div>
    <div class="row nav-bar hide-large">
      <div class="small-12 columns logo">
        <img src="~/assets/img/index/logo-colour.svg">
      </div>
    </div>

    <div class="home-logo">
      <img src="~/assets/img/index/logo-colour.svg">
    </div>

    <div class="home-container">
      <div class="row text-center home-nav">
        <div class="columns large-3 small-12">
          <router-link to="why">Why Us</router-link>
        </div>
        <div class="columns large-3 small-12">
          <router-link to="what">What we do</router-link>
        </div>
        <div class="columns large-3 small-12">
          <router-link to="work">Our Work</router-link>
        </div>
        <div class="columns large-3 small-12">
          <router-link to="contact">Contact Us</router-link>
        </div>
      </div>
    </div>

    <div class="fullscreen-bg">
        <video loop muted autoplay poster="video/bg-video.png" class="fullscreen-bg__video">
          <source src="video/bg-video.mp4" type="video/mp4">
            <source src="video/bg-video.webm" type="video/webm">
        <!--    <source src="video/bg-video.ogv" type="video/ogg"> -->
        </video>
    </div>
  </div>
</template>

<script>
</script>
