<template>
  <div>

    <!-- mobile -->
    <div class="row hide-large">
      <div class="columns large-6 opacity" v-inview:animate="'slideInUp'">
        <h4>{{ pageTitle.uplift.title }}</h4>
        <p v-html="pageTitle.uplift.para1"></p>
        <p v-html="pageTitle.uplift.para2"></p>
      </div>
      <div class="columns large-6 opacity" v-inview:animate="'slideInLeft'">
        <div class="trap-img trap-padding">
          <img v-bind:src="pageTitle.uplift.img">
        </div>
      </div>
    </div>

    <!-- large -->
    <div class="row hide-small">
      <div class="columns large-6 opacity" v-inview:animate="'slideInLeft'">
        <div class="trap-img">
          <img v-bind:src="pageTitle.uplift.img">
        </div>
      </div>
      <div class="columns large-6 shrunk-right opacity" v-inview:animate="'slideInUp'">
        <h4>{{ pageTitle.uplift.title }}</h4>
        <p v-html="pageTitle.uplift.para1"></p>
        <p v-html="pageTitle.uplift.para2"></p>
      </div>
    </div>


    <div class="row padding-top-small">
      <div class="column large-6 shrunk-left opacity" v-inview:animate="'slideInUp'">
        <h4>{{ pageTitle.grow.title }}</h4>
        <p v-html="pageTitle.grow.para1"></p>
        <p v-html="pageTitle.grow.para2"></p>
      </div>
      <div class="column large-6 opacity" v-inview:animate="'slideInRight'">
        <div class="trap-img trap-padding">
          <img v-bind:src="pageTitle.grow.img">
        </div>
      </div>
    </div>

    <div class="row padding-top-medium hide-large opacity" v-inview:animate="'slideInUp'">
      <div class="column large-6 ">
        <h4>{{ pageTitle.realise.title }}</h4>
        <p v-html="pageTitle.realise.para1"></p>
        <p v-html="pageTitle.realise.para2"></p>
      </div>
      <div class="column large-6 opacity" v-inview:animate="'slideInLeft'">
        <div class="trap-img trap-padding">
          <img v-bind:src="pageTitle.realise.img">
        </div>
      </div>
    </div>

    <div class="row padding-top-medium hide-small">
      <div class="column large-6 opacity" v-inview:animate="'slideInLeft'">
        <div class="trap-img">
          <img v-bind:src="pageTitle.realise.img">
        </div>
      </div>
      <div class="column large-6 shrunk-right opacity" v-inview:animate="'slideInUp'">
        <h4>{{ pageTitle.realise.title }}</h4>
        <p v-html="pageTitle.realise.para1"></p>
        <p v-html="pageTitle.realise.para2"></p>
      </div>
    </div>

    <div class="row padding-top-small">
      <div class="column large-6 shrunk-left opacity" v-inview:animate="'slideInUp'">
        <h4>{{ pageTitle.reveal.title }}</h4>
        <p v-html="pageTitle.reveal.para1"></p>
        <p v-html="pageTitle.reveal.para2"></p>
      </div>
      <div class="column large-6 opacity" v-inview:animate="'slideInRight'">
        <div class="trap-img trap-padding">
          <img v-bind:src="pageTitle.reveal.img">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import hasPageTitle from '~/mixins/hasPageTitle'

export default {
  mixins: [hasPageTitle]
}
</script>
