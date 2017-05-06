<template>
{{indent 1 ~}}  <div id="app">
{{indent 2 ~}}    <img src="./assets/logo.png">
    {{#router}}
{{indent 2 ~}}    <router-view></router-view>
    {{else}}
{{indent 2 ~}}    <hello></hello>
    {{/router}}
{{indent 1 ~}}  </div>
</template>

<script>
{{#unless router}}
import Hello from {{string './components/Hello'}}{{semi}}

{{/unless}}
{{indent 0 ~}}  export default {
{{indent 1 ~}}    name: {{string 'app'}}{{#router}},{{else}},
{{indent 1 ~}}    components: {
{{indent 2 ~}}      Hello,
{{indent 1 ~}}    },{{/router}}
{{indent 0 ~}}  }{{semi}}
</script>

<style>
{{indent 0 ~}}  #app {
{{indent 1 ~}}    font-family: 'Avenir', Helvetica, Arial, sans-serif;
{{indent 1 ~}}    -webkit-font-smoothing: antialiased;
{{indent 1 ~}}    -moz-osx-font-smoothing: grayscale;
{{indent 1 ~}}    text-align: center;
{{indent 1 ~}}    color: #2c3e50;
{{indent 1 ~}}    margin-top: 60px;
{{indent 0 ~}}  }
</style>
