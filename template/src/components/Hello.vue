<template>
{{indent 1 ~}}  <div class="hello">
{{indent 2 ~}}    <h1>\{{ msg }}</h1>
{{indent 2 ~}}    <h2>Essential Links</h2>
{{indent 2 ~}}    <ul>
{{indent 3 ~}}      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
{{indent 3 ~}}      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
{{indent 3 ~}}      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
{{indent 3 ~}}      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
{{indent 3 ~}}      <br>
{{indent 3 ~}}      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
{{indent 2 ~}}    </ul>
{{indent 2 ~}}    <h2>Ecosystem</h2>
{{indent 2 ~}}    <ul>
{{indent 3 ~}}      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
{{indent 3 ~}}      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
{{indent 3 ~}}      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
{{indent 3 ~}}      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
{{indent 2 ~}}    </ul>
{{indent 1 ~}}  </div>
</template>

<script>
{{indent 0 ~}}  export default {
{{indent 1 ~}}    name: 'hello',
{{indent 1 ~}}    data() {
{{indent 2 ~}}      return {
{{indent 3 ~}}        msg: 'Welcome to Your Vue.js App',
{{indent 2 ~}}      }{{semi}}
{{indent 1 ~}}    },
{{indent 0 ~}}  }{{semi}}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
{{indent 0 ~}}  h1, h2 {
{{indent 1 ~}}    font-weight: normal;
{{indent 0 ~}}  }
{{indent 0 ~}}
{{indent 0 ~}}  ul {
{{indent 1 ~}}    list-style-type: none;
{{indent 1 ~}}    padding: 0;
{{indent 0 ~}}  }
{{indent 0 ~}}
{{indent 0 ~}}  li {
{{indent 1 ~}}    display: inline-block;
{{indent 1 ~}}    margin: 0 10px;
{{indent 0 ~}}  }
{{indent 0 ~}}
{{indent 0 ~}}  a {
{{indent 1 ~}}    color: #42b983;
{{indent 0 ~}}  }
</style>
