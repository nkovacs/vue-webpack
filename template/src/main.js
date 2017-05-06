{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from {{string 'vue'}}{{semi}}
import App from {{string './App'}}{{semi}}
{{#router}}
import router from {{string './router'}}{{semi}}
{{/router}}

Vue.config.productionTip = false{{semi}}

/* eslint-disable no-new */
{{indent 0 ~}}  new Vue({
{{indent 1 ~}}    el: {{#if_eq lintConfig "go"}}    {{#if_eq build "standalone"}}    {{/if_eq}}{{/if_eq}}{{string '#app'}},
  {{#router}}
{{indent 1 ~}}    router,
  {{/router}}
  {{#if_eq build "runtime"}}
{{indent 1 ~}}    render: {{#if_eq lintConfig "go"}}{{/if_eq}}h => h(App),
  {{/if_eq}}
  {{#if_eq build "standalone"}}
{{indent 1 ~}}    template: {{#if_eq lintConfig "go"}}  {{/if_eq}}{{string '<App/>'}},
{{indent 1 ~}}    components: {{#if_eq lintConfig "go"}}{{/if_eq}}{ App },
  {{/if_eq}}
{{indent 0 ~}}  }){{semi}}
