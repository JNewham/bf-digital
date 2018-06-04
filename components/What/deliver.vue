<template>
  <div>
    <div class="row">
      <h2 class="opacity" v-inview:animate="'slideInUp'">What we deliver</h2>
      <div class="columns large-12 shrunk deliver">
        <ol>
          <li class="margin-top-none opacity" v-inview:animate="'slideInUp'" v-html="pageTitle.deliver.one"></li>
          <li class="opacity" v-inview:animate="'slideInUp'" v-html="pageTitle.deliver.two"></li>
          <li class="opacity" v-inview:animate="'slideInUp'" v-html="pageTitle.deliver.three"></li>
          <li class="opacity" v-inview:animate="'slideInUp'" v-html="pageTitle.deliver.four"></li>
          <li class="opacity" v-inview:animate="'slideInUp'" v-html="pageTitle.deliver.five"></li>
          <li class="opacity" v-inview:animate="'slideInUp'" v-html="pageTitle.deliver.six"></li>
          <li class="opacity" v-inview:animate="'slideInUp'" v-html="pageTitle.deliver.seven"></li>
        </ol>
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
