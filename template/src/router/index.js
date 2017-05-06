import Vue from {{string 'vue'}}{{semi}}
import Router from {{string 'vue-router'}}{{semi}}
import Hello from {{string '@/components/Hello'}}{{semi}}

Vue.use(Router){{semi}}

{{indent 0 ~}}  export default new Router({
{{indent 1 ~}}    routes: [
{{indent 2 ~}}      {
{{indent 3 ~}}        path: {{string '/'}},
{{indent 3 ~}}        name: {{string 'Hello'}},
{{indent 3 ~}}        component: Hello,
{{indent 2 ~}}      },
{{indent 1 ~}}    ],
{{indent 0 ~}}  }){{semi}}
