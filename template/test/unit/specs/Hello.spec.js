{{indent 0 ~}}  import Vue from {{string 'vue'}}{{semi}}
{{indent 0 ~}}  import Hello from {{string '@/components/Hello'}}{{semi}}

{{indent 0 ~}}  describe({{string 'Hello.vue'}}, function () {
{{indent 1 ~}}    it({{string 'should render correct contents'}}, function () {
{{indent 2 ~}}      const Constructor = Vue.extend(Hello){{semi}}
{{indent 2 ~}}      const vm = new Constructor().$mount(){{semi}}
{{indent 2 ~}}      expect(vm.$el.querySelector({{string '.hello h1'}}).textContent).
{{indent 3 ~}}        to.equal({{string 'Welcome to Your Vue.js App'}}){{semi}}
{{indent 1 ~}}    }){{semi}}
{{indent 0 ~}}  }){{semi}}
