<template>

  <div>
    <leadImage/>
    <div class="body-content">
      <div class="row opacity" v-inview:animate="'slideInUp'">
        <div class="large-9 small-centered columns text-center">
          <p v-html="pageTitle.para1"></p>
          <p v-html="pageTitle.para2"></p>
          <p v-html="pageTitle.para3"></p>
        </div>
      </div>

      <Work/>
    </div>

    <div>
      <addendum/>
    </div>
  </div>
</template>

<script>
import leadImage from '~/components/global/leadImage.vue'
import addendum from '~/components/global/addendum.vue'
import Work from '~/components/portfolio/Work.vue'
import hasPageTitle from '~/mixins/hasPageTitle'

export default {
  components: {
    leadImage,
    Work,
    addendum
  },
  mixins: [hasPageTitle]
}
</script>
