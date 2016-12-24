import Vue from 'vue'
import VueRx from 'vue-rx'
import Raven from 'raven-js'

import { Observable } from 'rxjs/Observable'

import 'rxjs/add/observable/combineLatest'
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/observable/forkJoin'
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/first'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/toArray'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/finally'

import { Subscription } from 'rxjs/Subscription'
import App from './App'
import './filters'

import 'semantic-ui-css/components/accordion.min.js'
import 'semantic-ui-css/components/checkbox.min.js'
import 'semantic-ui-css/components/dimmer.min.js'
import 'semantic-ui-css/components/dropdown.min.js'
import 'semantic-ui-css/components/embed.min.js'
import 'semantic-ui-css/components/modal.min.js'
import 'semantic-ui-css/components/transition.min.js'
import 'semantic-ui-css/components/progress.min.js'

import { Firebase } from './services'
import router from './router'

Raven
  .config('https://fda9f1b21cd04a4585b9f9051b37a466@sentry.io/103020')
  .install()

Vue.use(VueRx, { Observable, Subscription })
Firebase.init()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App
})
