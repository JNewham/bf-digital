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
      <deliver/>
      <think/>
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
