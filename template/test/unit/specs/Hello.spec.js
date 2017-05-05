{{indent 0 ~}}  import Vue from 'vue'{{semi}}
{{indent 0 ~}}  import Hello from '@/components/Hello'{{semi}}

{{indent 0 ~}}  describe('Hello.vue', function () {
{{indent 1 ~}}    it('should render correct contents', function () {
{{indent 2 ~}}      const Constructor = Vue.extend(Hello){{semi}}
{{indent 2 ~}}      const vm = new Constructor().$mount(){{semi}}
{{indent 2 ~}}      expect(vm.$el.querySelector('.hello h1').textContent).
{{indent 3 ~}}        to.equal('Welcome to Your Vue.js App'){{semi}}
{{indent 1 ~}}    }){{semi}}
{{indent 0 ~}}  }){{semi}}
