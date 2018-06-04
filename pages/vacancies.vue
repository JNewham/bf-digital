<template>

  <div>
    <leadImage/>
    <div class="body-content">


      <div class="row">
        <div class="columns large-12 vacancy shrunk">
          <h4>{{ pageTitle.job1.title }}</h4>
          <p><strong>{{ pageTitle.job1.description }}</strong></p>
          <div v-html="pageTitle.job1.content"></div>
          <p><strong>How to apply</strong></p>
          <p>If this sounds like you, please send your portfolio and CV to <a href="mailto:imelda.mcguigan@bluefroglondon.com">imelda.mcguigan@bluefroglondon.com</a></p>
          <a href="about.html" class="button margin-top-tiny">Learn More</a>
        </div>
      </div>

      <div class="row vacancy-spacer margin-both-none shrunk"></div>

      <div class="row">
        <div class="columns large-12 vacancy shrunk">
          <h4>{{ pageTitle.job1.title }}</h4>
          <p><strong>{{ pageTitle.job1.description }}</strong></p>
          <div v-html="pageTitle.job1.content"></div>
          <p><strong>How to apply</strong></p>
          <p>If this sounds like you, please send your portfolio and CV to <a href="mailto:imelda.mcguigan@bluefroglondon.com">imelda.mcguigan@bluefroglondon.com</a></p>
          <a href="about.html" class="button margin-top-tiny">Learn More</a>
        </div>
      </div>


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
