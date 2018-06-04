export default {
  computed: {
    pageTitle () {
      const name = this.$route.name
      return this.$contentJSON[name]
    }
  }
}
