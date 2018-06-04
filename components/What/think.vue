<template>
  <div class="row think">
    <h2 class="opacity" v-inview:animate="'slideInUp'">What we think</h2>
    <div class="columns large-6 small-12 shrunk-left opacity" v-inview:animate="'slideInUp'">
      <ul>
        <li v-html="pageTitle.think.one"></li>
        <li v-html="pageTitle.think.two"></li>
        <li v-html="pageTitle.think.three"></li>
        <li v-html="pageTitle.think.four"></li>
      </ul>
    </div>
    <div class="columns large-6 small-12 shrunk-right opacity" v-inview:animate="'slideInUp'">
      <ul>
        <li v-html="pageTitle.think.five"></li>
        <li v-html="pageTitle.think.six"></li>
        <li v-html="pageTitle.think.seven"></li>
        <li v-html="pageTitle.think.eight"></li>
        <li v-html="pageTitle.think.nine"></li>
      </ul>
    </div>
  </div>
</template>

<script>
import hasPageTitle from '~/mixins/hasPageTitle'

export default {
  mixins: [hasPageTitle]
}
</script>
