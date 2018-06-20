<template>
  <div>
    <leadImage/>

    <div class="body-content">
      <div class="row">
        <h2 class="text-center" v-html="pageTitle.intro.title"></h2>
        <div class="column large-6 small-12">
          <div class="trap-img margin-btm-tiny opacity" v-inview:animate="'slideInLeft'">
            <img src="~assets/img/deliver/success.svg">
          </div>
        </div>

        <div class="column large-6 small-12 shrunk-right opacity" v-inview:animate="'slideInUp'">
          <p v-html="pageTitle.intro.right.para1"></p>
          <p v-html="pageTitle.intro.right.para2"></p>
          <p v-html="pageTitle.intro.right.para3"></p>
        </div>
      </div>

      <div class="row">
        <div class="large-9 small-centered columns text-center"  v-inview:animate="'slideInUp'">
          <h2 class="opacity" v-html="pageTitle.approach.intro.title"></h2>
          <p v-html="pageTitle.approach.intro.para1"></p>
        </div>
      </div>

      <!-- Approach -->

      <div class="row opacity margin-btm-small" v-inview:animate="'slideInUp'">
        <div class="columns large-5 shrunk-left text-center">
          <img class="states-images" v-bind:src="pageTitle.approach.states.one.img">
          <h4 class="text-center padding-top-small " v-html="pageTitle.approach.states.one.title"></h4>
          <p class="padding-top-tiny text-left" v-html="pageTitle.approach.states.one.description"></p>
        </div>
        <div class="columns large-2">
          <img src="~/assets/img/deliver/arrow-1.svg">
        </div>
        <div class="columns large-5 shrunk-right text-center">
          <img class="states-images" v-bind:src="pageTitle.approach.states.two.img">
          <h4 class="text-center padding-top-small" v-html="pageTitle.approach.states.two.title"></h4>
          <p class="padding-top-tiny text-left" v-html="pageTitle.approach.states.two.description"></p>
        </div>
      </div>

      <div class="row margin-both-none">
        <div class="columns large-5 text-center">
          <img src="~/assets/img/deliver/arrow-4.svg">
        </div>
        <div class="columns large-2"></div>
        <div class="columns large-5 text-center">
          <img src="~/assets/img/deliver/arrow-2.svg">
        </div>
      </div>

      <div class="row opacity margin-top-small" v-inview:animate="'slideInUp'">
        <div class="columns large-5 shrunk-left text-center">
          <img class="states-images" v-bind:src="pageTitle.approach.states.three.img">
          <h4 class="text-center padding-top-small" v-html="pageTitle.approach.states.three.title"></h4>
          <p class="padding-top-tiny text-left" v-html="pageTitle.approach.states.three.description"></p>
        </div>
        <div class="columns large-2">
          <img src="~/assets/img/deliver/arrow-3.svg">
        </div>
        <div class="columns large-5 shrunk-right text-center">
          <img class="states-images" v-bind:src="pageTitle.approach.states.four.img">
          <h4 class="text-center padding-top-small" v-html="pageTitle.approach.states.four.title"></h4>
          <p class="padding-top-tiny text-left" v-html="pageTitle.approach.states.four.description"></p>
        </div>
      </div>

      <div class="row text-center" v-inview:animate="'slideInUp'">
        <a href="about.html" class="button-large">Read More</a>
      </div>

      <div class="row expanded why-footer opacity" v-inview:animate="'slideInUp'">
        <img v-bind:src="pageTitle.image2">
      </div>

    <div class="row">
        <h2 class="text-center" v-html="pageTitle.who.title" v-inview:animate="'slideInUp'"></h2>
      <div class="column large-6 small-12">
        <p v-html="pageTitle.who.left" class="large-bulk shrunk margin-btm-small opacity" v-inview:animate="'slideInUp'"></p>
      </div>

      <div class="column large-6 small-12 shrunk-right opacity" v-inview:animate="'slideInUp'">
        <p v-html="pageTitle.who.right.para1"></p>
        <p v-html="pageTitle.who.right.para2"></p>
      </div>
    </div>

    <div class="row text-center" v-inview:animate="'slideInUp'">
      <a href="about.html" class="button-large">Get in touch</a>
    </div>

    <div class="row" v-inview:animate="'slideInUp'">
      <div class="large-9 small-centered columns text-center">
          <h2 class="opacity" v-html="pageTitle.work.title" v-inview:animate="'slideInUp'"></h2>
          <p v-html="pageTitle.work.para1" v-inview:animate="'slideInUp'"></p>
      </div>
    </div>

    <div class="row text-center">
      <div class="column large-3 client-list">
        <img src="~/assets/img/deliver/work/STC.svg">
      </div>
      <div class="column large-3 client-list">
        <img src="~/assets/img/deliver/work/KCL.svg">
      </div>
      <div class="column large-3 client-list">
        <img src="~/assets/img/deliver/work/UB.svg">
      </div>
      <div class="column large-3 client-list">
        <img src="~/assets/img/deliver/work/UNHCR.svg">
      </div>
    </div>

    <div class="row text-center">
      <div class="column large-3 client-list">
        <img src="~/assets/img/deliver/work/BVUK.svg">
      </div>
      <div class="column large-3 client-list">
        <img src="~/assets/img/deliver/work/Concern.svg">
      </div>
      <div class="column large-3 client-list">
        <img src="~/assets/img/deliver/work/Fair.svg">
      </div>
      <div class="column large-3 client-list">
        <img src="~/assets/img/deliver/work/Leeds.svg">
      </div>
    </div>

    <div class="row text-center">
      <div class="column large-3 client-list">
        <img src="~/assets/img/deliver/work/UCL.svg">
      </div>
      <div class="column large-3 client-list">
        <img src="~/assets/img/deliver/work/Care.svg">
      </div>
      <div class="column large-3 client-list">
        <img src="~/assets/img/deliver/work/GP.svg">
      </div>
      <div class="column large-3 client-list">
        <img src="~/assets/img/deliver/work/MC.svg">
      </div>
    </div>

    <div class="row text-center">
      <div class="column large-3 client-list">
        <img src="~/assets/img/deliver/work/BLF.svg">
      </div>
      <div class="column large-3 client-list">
        <img src="~/assets/img/deliver/work/Parkinsons.svg">
      </div>
      <div class="column large-3 client-list">
        <img src="~/assets/img/deliver/work/YMCA.svg">
      </div>
      <div class="column large-3 client-list">
        <img src="~/assets/img/deliver/work/IMP.svg">
      </div>
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
