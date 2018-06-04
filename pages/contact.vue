<template>
  <div>
    <div class="expanded row margin-btm-small">
      <transition name="drop-menu">
        <burgerMenu v-show="show"/>
      </transition>
      <div class="row nav-bar">
        <div class="small-6 columns">
            <button v-bind:class="{ 'rotate-fix' : show }" v-on:click="toggle()" id="burger-nav">
              <img src="~/assets/img/global/icon-menu.svg">
            </button>
          </transition>

          <transition name="fade-in">
            <div v-show="show" class="grey-out"></div>
          </transition>
        </div>
        <div class="small-6 columns logo">
          <img src="~/assets/img/global/logo-black.svg">
        </div>
      </div>
    </div>

    <div class="row margin-btm-small">
      <div class="columns large-6 medium-12 shrunk-left">
        <h1>Contact Us</h1>
        <div class="contact-info">
          <p>
            Phone - <a href="">XXX-XXX-XXX</a></br>
            Email - <a href="">things@bluefroglondon.com</a></br>
            Address - <a href="">Albert House, EC1V 9DD</a>
          </p>
        </div>
        <div class="contact-form">
        <input type="text" placeholder="Full Name">
        <input type="text" placeholder="Phone Number">
        <input type="text" placeholder="example@email.com">
        <textarea placeholder="None"></textarea>
        <a href="about.html" class="button">Submit</a>
        </div>
      </div>
      <div class="columns large-4 medium-0"></div>
    </div>
    <div class="contact-bg">
    </div>
  </div>
</template>

<script>
import burgerMenu from '~/components/global/burgerMenu.vue'

export default {
  components: {
    burgerMenu
  },
  data: () => ({
    show: false
  }),
  methods: {
    toggle: function () {
      this.show = !this.show
    }
  }
}
</script>
