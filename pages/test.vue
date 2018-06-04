<template>
  <div id="demo">
    <button v-on:click="toggle()">
      Toggle
    </button>
    <transition
      enter-active-class="bounceInLeft"
      leave-active-class="bounceOutRight"
    >
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
export default {
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
