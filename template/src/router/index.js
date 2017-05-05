import Vue from 'vue'{{semi}}
import Router from 'vue-router'{{semi}}
import Hello from '@/components/Hello'{{semi}}

Vue.use(Router){{semi}}

{{indent 0 ~}}  export default new Router({
{{indent 1 ~}}    routes: [
{{indent 2 ~}}      {
{{indent 3 ~}}        path: '/',
{{indent 3 ~}}        name: 'Hello',
{{indent 3 ~}}        component: Hello,
{{indent 2 ~}}      },
{{indent 1 ~}}    ],
{{indent 0 ~}}  }){{semi}}
