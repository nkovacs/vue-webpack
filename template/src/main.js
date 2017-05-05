{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{semi}}
import App from './App'{{semi}}
{{#router}}
import router from './router'{{semi}}
{{/router}}

Vue.config.productionTip = false{{semi}}

/* eslint-disable no-new */
{{indent 0 ~}}  new Vue({
{{indent 1 ~}}    el: '#app',
  {{#router}}
{{indent 1 ~}}    router,
  {{/router}}
  {{#if_eq build "runtime"}}
{{indent 1 ~}}    render: h => h(App),
  {{/if_eq}}
  {{#if_eq build "standalone"}}
{{indent 1 ~}}    template: '<App/>',
{{indent 1 ~}}    components: { App },
  {{/if_eq}}
{{indent 0 ~}}  }){{semi}}
