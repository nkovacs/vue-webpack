import Vue from {{string 'vue'}}{{semi}}
import Router from {{string 'vue-router'}}{{semi}}
import Hello from {{string '@/components/Hello'}}{{semi}}

Vue.use(Router){{semi}}

{{indent 0 ~}}  export default new Router({
{{indent 1 ~}}    routes: [
{{indent 2 ~}}      {
{{indent 3 ~}}        path: {{#if_eq lintConfig "go"}}     {{/if_eq}}{{string '/'}},
{{indent 3 ~}}        name: {{#if_eq lintConfig "go"}}     {{/if_eq}}{{string 'Hello'}},
{{indent 3 ~}}        component: {{#if_eq lintConfig "go"}}{{/if_eq}}Hello,
{{indent 2 ~}}      },
{{indent 1 ~}}    ],
{{indent 0 ~}}  }){{semi}}
