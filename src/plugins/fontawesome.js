import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  faAdjust,
  faStar,
  faList,
  faThLarge,
  faPlus,
  faTimes
} from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch, faAdjust, faStar, faList, faThLarge, faPlus, faTimes, farStar)

export default {
  install(app) {
    app.component('FaIcon', FontAwesomeIcon)
  }
}
