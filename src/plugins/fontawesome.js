import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faAdjust } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch, faAdjust)

export default {
  install(app) {
    app.component('FaIcon', FontAwesomeIcon)
  }
}
