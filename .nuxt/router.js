import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _e5cac7c2 = () => interopDefault(import('..\\pages\\artisan.vue' /* webpackChunkName: "pages_artisan" */))
const _2344fa32 = () => interopDefault(import('..\\pages\\assessor.vue' /* webpackChunkName: "pages_assessor" */))
const _01eab762 = () => interopDefault(import('..\\pages\\company.vue' /* webpackChunkName: "pages_company" */))
const _60563a48 = () => interopDefault(import('..\\pages\\provider.vue' /* webpackChunkName: "pages_provider" */))
const _fc4f01de = () => interopDefault(import('..\\pages\\publication.vue' /* webpackChunkName: "pages_publication" */))
const _c643d336 = () => interopDefault(import('..\\pages\\regulatorybody.vue' /* webpackChunkName: "pages_regulatorybody" */))
const _d255ebe6 = () => interopDefault(import('..\\pages\\trainee.vue' /* webpackChunkName: "pages_trainee" */))
const _d0e788cc = () => interopDefault(import('..\\pages\\trainer.vue' /* webpackChunkName: "pages_trainer" */))
const _0bc5c077 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/artisan",
      component: _e5cac7c2,
      name: "artisan"
    }, {
      path: "/assessor",
      component: _2344fa32,
      name: "assessor"
    }, {
      path: "/company",
      component: _01eab762,
      name: "company"
    }, {
      path: "/provider",
      component: _60563a48,
      name: "provider"
    }, {
      path: "/publication",
      component: _fc4f01de,
      name: "publication"
    }, {
      path: "/regulatorybody",
      component: _c643d336,
      name: "regulatorybody"
    }, {
      path: "/trainee",
      component: _d255ebe6,
      name: "trainee"
    }, {
      path: "/trainer",
      component: _d0e788cc,
      name: "trainer"
    }, {
      path: "/",
      component: _0bc5c077,
      name: "index"
    }],

    fallback: false
  })
}
