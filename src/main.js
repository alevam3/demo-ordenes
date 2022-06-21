import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as moment_ from 'moment'
const moment = moment_;

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)

app.config.globalProperties.$filters = {
    dateFormat (date, format = 'DD/MM/YYYY HH:ss') {
      return moment(date).format(format)
    }
  }

app.use(router)
app.mount('#app')
