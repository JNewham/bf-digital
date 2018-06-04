<template>
  <div>
    <leadImage/>

    <div class="body-content">
      <div class="row">
        <div class="column large-6 small-12">
          <p v-html="pageTitle.intro.left.para1" class="large-bulk shrunk margin-btm-small opacity" v-inview:animate="'slideInUp'"></p>
          <img class="trap-img margin-btm-tiny opacity" v-bind:src="pageTitle.intro.left.img" v-inview:animate="'slideInLeft'">
        </div>

        <div class="column large-6 small-12 shrunk-right opacity" v-inview:animate="'slideInUp'">
          <p v-html="pageTitle.intro.right.para1"></p>
          <p v-html="pageTitle.intro.right.para2"></p>
          <p v-html="pageTitle.intro.right.para3"></p>
        </div>
      </div>

      <div class="row">
        <h2 class="opacity" v-inview:animate="'slideInUp'">WHAT ARE THE DONOR NEED STATES?</h2>
        <div class="column large-5 small-12  shrunk-left opacity" v-inview:animate="'slideInUp'">
          <p v-html="pageTitle.donorNeeds.intro.left" class="large-bulk"></p>
        </div>
        <div class="column large-6 small-12 shrunk-right opacity" v-inview:animate="'slideInUp'">
          <p v-html="pageTitle.donorNeeds.intro.right.para1"></p>
          <p v-html="pageTitle.donorNeeds.intro.right.para2"></p>
        </div>
      </div>

      <div class="row opacity" v-inview:animate="'slideInUp'">
        <div class="columns large-6 shrunk-left text-center">
          <h4 class="text-center" v-html="pageTitle.donorNeeds.states.one.title"></h4>
          <img class="states-images" v-bind:src="pageTitle.donorNeeds.states.one.img">
          <p class="padding-top-tiny text-left" v-html="pageTitle.donorNeeds.states.one.description"></p>
        </div>
        <div class="columns large-6 shrunk-right text-center">
          <h4 class="text-center" v-html="pageTitle.donorNeeds.states.two.title"></h4>
          <img class="states-images" v-bind:src="pageTitle.donorNeeds.states.two.img">
          <p class="padding-top-tiny text-left" v-html="pageTitle.donorNeeds.states.two.description"></p>
        </div>
      </div>

      <div class="row opacity" v-inview:animate="'slideInUp'">
        <div class="columns large-6 shrunk-left text-center">
          <h4 class="text-center" v-html="pageTitle.donorNeeds.states.three.title"></h4>
          <img class="states-images" v-bind:src="pageTitle.donorNeeds.states.three.img">
          <p class="padding-top-tiny text-left" v-html="pageTitle.donorNeeds.states.three.description"></p>
        </div>
        <div class="columns large-6 shrunk-right text-center">
          <h4 class="text-center" v-html="pageTitle.donorNeeds.states.four.title"></h4>
          <img class="states-images" v-bind:src="pageTitle.donorNeeds.states.four.img">
          <p class="padding-top-tiny text-left" v-html="pageTitle.donorNeeds.states.four.description"></p>
        </div>
      </div>

      <div class="row expanded why-footer opacity" v-inview:animate="'slideInUp'">
        <img v-bind:src="pageTitle.image2">
      </div>
    </div>



    <addendum/>
  </div>
</template>

<script>
import leadImage from '~/components/global/leadImage.vue'
import addendum from '~/components/global/addendum.vue'
import hasPageTitle from '~/mixins/hasPageTitle'

export default {
  components: {
    leadImage,
    addendum
  },
  mixins: [hasPageTitle]
}
</script>
