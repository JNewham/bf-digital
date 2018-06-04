<template>
  <div>
    <div class="row collapse margin-btm-none">
      <div class="large-4 columns work-container">
        <a href="#">
          <div class="description">
            <h3>{{ pageTitle.work.client1.title }}</h3>
            <p class="small-text">{{ pageTitle.work.client1.description }}</p>
          </div>
          <img v-bind:src="pageTitle.work.client1.thumbnail">
        </a>
      </div>
      <div class="large-4 columns work-container">
        <div class="description">
          <h3>{{ pageTitle.work.client2.title }}</h3>
          <p class="small-text">{{ pageTitle.work.client2.description }}</p>
        </div>
        <img v-bind:src="pageTitle.work.client2.thumbnail">
      </div>
      <div class="large-4 columns work-container">
        <div class="description">
          <h3>{{ pageTitle.work.client3.title }}</h3>
          <p class="small-text">{{ pageTitle.work.client3.description }}</p>
        </div>
        <img v-bind:src="pageTitle.work.client3.thumbnail">
      </div>
    </div>
    <div class="row collapse margin-both-none">
      <div class="large-4 columns work-container">
        <div class="description">
          <h3>{{ pageTitle.work.client4.title }}</h3>
          <p class="small-text">{{ pageTitle.work.client4.description }}</p>
        </div>
        <img v-bind:src="pageTitle.work.client4.thumbnail">
      </div>
      <div class="large-4 columns work-container">
        <div class="description">
          <h3>{{ pageTitle.work.client5.title }}</h3>
          <p class="small-text">{{ pageTitle.work.client5.description }}</p>
        </div>
        <img v-bind:src="pageTitle.work.client5.thumbnail">
      </div>
      <div class="large-4 columns work-container">
        <div class="description">
          <h3>{{ pageTitle.work.client6.title }}</h3>
          <p class="small-text">{{ pageTitle.work.client6.description }}</p>
        </div>
        <img v-bind:src="pageTitle.work.client6.thumbnail">
      </div>
    </div>
    <div class="row collapse margin-top-none">
      <div class="large-4 columns work-container">
        <div class="description">
          <h3>{{ pageTitle.work.client7.title }}</h3>
          <p class="small-text">{{ pageTitle.work.client7.description }}</p>
        </div>
        <img v-bind:src="pageTitle.work.client7.thumbnail">
      </div>
      <div class="large-4 columns work-container">
        <div class="description">
          <h3>{{ pageTitle.work.client8.title }}</h3>
          <p class="small-text">{{ pageTitle.work.client8.description }}</p>
        </div>
        <img v-bind:src="pageTitle.work.client8.thumbnail">
      </div>
      <div class="large-4 columns work-container">
        <div class="description">
          <h3>{{ pageTitle.work.client9.title }}</h3>
          <p class="small-text">{{ pageTitle.work.client9.description }}</p>
        </div>
        <img v-bind:src="pageTitle.work.client9.thumbnail">
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
