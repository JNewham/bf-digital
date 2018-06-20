<template>

  <div>
    <leadImage/>
    <div class="body-content">
      <div class="row">
        <div v-inview:animate="'slideInUp'" class="column large-5 small-12 shrunk-left opacity">
            <p v-html="pageTitle.intro.left" class="large-bulk"></p>
        </div>
        <div v-inview:animate="'slideInUp'" class="column large-6 small-12 shrunk-right opacity">
          <p v-html="pageTitle.intro.right.para1"></p>
          <p v-html="pageTitle.intro.right.para2"></p>
        </div>
      </div>
    </div>

    <fourThings/>

    <div class="body-content">
      <div class="row">
          <h2 class="text-center" v-html="pageTitle.how.title" v-inview:animate="'slideInUp'"></h2>
        <div class="column large-6 small-12">
          <p v-html="pageTitle.how.left" class="large-bulk shrunk margin-btm-small opacity" v-inview:animate="'slideInUp'"></p>
        </div>

        <div class="column large-6 small-12 shrunk-right opacity" v-inview:animate="'slideInUp'">
          <p v-html="pageTitle.how.right.para1"></p>
          <p v-html="pageTitle.how.right.para2"></p>
        </div>
      </div>

      <div class="row text-center" v-inview:animate="'slideInUp'">
        <a href="about.html" class="button-large">Get in touch</a>
      </div>
    </div>

    <addendum/>
  </div>
</template>

<script>
import leadImage from '~/components/global/leadImage.vue'
import fourThings from '~/components/what/four-things.vue'
import deliver from '~/components/what/deliver.vue'
import think from '~/components/what/think.vue'
import addendum from '~/components/global/addendum.vue'
import hasPageTitle from '~/mixins/hasPageTitle'

export default {
  components: {
    leadImage,
    fourThings,
    deliver,
    think,
    addendum
  },
  mixins: [hasPageTitle]
}
</script>
