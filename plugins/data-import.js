import contentJSON from '~/content.json'
import Vue from 'vue'

Vue.use(contentJSON)
Vue.prototype.$contentJSON = contentJSON

export default ({ app }) => (
  app.contentJSON = contentJSON
)
