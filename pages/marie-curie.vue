<template>

  <div>
    <leadImage/>
    <div class="body-content">
      <div class="row opacity" v-inview:animate="'slideInUp'">
        <div class="column large-5 small-12 shrunk-left">
          <p v-html="pageTitle.intro.left" class="large-bulk"></p>
        </div>
        <div class="column large-6 small-12 shrunk-right">
          <p v-html="pageTitle.intro.right"></p>
        </div>
      </div>

      <div class="row">
        <div class="column large-12 opacity" v-inview:animate="'slideInUp'">
          <h2>{{ pageTitle.body.subTitle }}</h2>
        </div>
        <div class="column large-12 opacity" v-inview:animate="'slideInUp'">
          <img v-bind:src="pageTitle.body.image" class="trap-img">
        </div>
      </div>

      <div class="row opacity" v-inview:animate="'slideInUp'">
        <div class="large-9 small-centered columns text-center">
          <p class="opacity" v-inview:animate="'slideInUp'"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra mi tellus, in vulputate urna rhoncus sit amet. Nam hendrerit leo a metus dapibus pretium. Integer fringilla augue sit amet semper ullamcorper.</p>

          <p class="opacity" v-inview:animate="'slideInUp'">Etiam ut accumsan mi, ac imperdiet orci. Etiam finibus odio sit amet metus tempor vestibulum. Proin sit amet facilisis nisl. Ut gravida quam orci. Nulla dapibus at leo a vehicula. Nam sed diam ut erat consectetur lacinia a a nunc. Vestibulum vulputate mattis tortor non dignissim. Donec rutrum turpis a risus malesuada imperdiet.</p>

          <p class="opacity" v-inview:animate="'slideInUp'">Aliquam ut libero eu orci facilisis laoreet. Pellentesque facilisis diam vitae purus maximus luctus. Quisque ut rhoncus ligula. Nulla urna arcu, cursus a odio eu, feugiat eleifend urna. Nam eu volutpat purus. Nunc vulputate est purus, nec maximus velit eleifend in. Phasellus accumsan, ex et ultrices malesuada, quam lorem rutrum sem, ac condimentum dolor quam quis elit.</p>
        </div>
      </div>

      <div class="row shrunk text-center opacity" v-inview:animate="'slideInUp'">
        <div class="columns large-4 small-12">
          <img class="margin-btm-small infographic-img" v-bind:src="pageTitle.body.infographic.image1">
          <p v-html="pageTitle.body.infographic.para1"></p>
        </div>
        <div class="columns large-4 small-12">
          <img class="margin-btm-small infographic-img" v-bind:src="pageTitle.body.infographic.image2">
          <p v-html="pageTitle.body.infographic.para2"></p>
        </div>
        <div class="columns large-4 small-12">
          <img class="margin-btm-small infographic-img" v-bind:src="pageTitle.body.infographic.image3">
          <p v-html="pageTitle.body.infographic.para3"></p>
        </div>
      </div>

      <div class="row">
        <div class="column large-12">
          <h2 class="opacity" v-inview:animate="'slideInUp'">Lorem ipsum dolar sit amet</h2>
        </div>
        <div class="column large-6 small-12">
          <p class="shrunk margin-btm-tiny large-bulk opacity" v-inview:animate="'slideInUp'" v-html="pageTitle.body.para2"></p>
          <img class="trap-img margin-btm-small opacity" v-inview:animate="'slideInLeft'" v-bind:src="pageTitle.body.image2">
        </div>
        <div class="column large-6 small-12 shrunk-right opacity" v-inview:animate="'slideInUp'">
          <p v-html="pageTitle.body.para1"></p>
          <p v-html="pageTitle.body.para2"></p>
          <p v-html="pageTitle.body.para3"></p>
          <p v-html="pageTitle.body.para4"></p>
        </div>
      </div>
    </div>6

    <div>
      <addendum/>
    </div>
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
