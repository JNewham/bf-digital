<template>
	<div>
		<div class="expanded row head">
			<transition enter-active-class="slideInDown" leave-active-class="slideOutUp">
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
			<div class="small-centered columns title">
				<h1>{{ pageTitle.title }}</h1>
				<p class="large-bulk">{{ pageTitle.subTitle }}</p>
			</div>
		</div>
		<div class="head-image"></div>
	</div>
</template>

<script>
import hasPageTitle from '~/mixins/hasPageTitle'
import burgerMenu from '~/components/global/burgerMenu.vue'

export default {
  data: () => ({
    show: false
  }),
  methods: {
    toggle: function () {
      this.show = !this.show
    }
  },
  components: {
    burgerMenu },
  mixins: [hasPageTitle]
}
</script>
