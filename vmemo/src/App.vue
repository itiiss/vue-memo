<template>
  <div id="app" class="app">
    <toolbar></toolbar>
    <memoList> </memoList>
    <editor></editor>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Toolbar from './components/Toolbar.vue';
import MemoList from './components/MemoList.vue';
import Editor from './components/Editor.vue';

@Component({
  components: {
    "toolbar" : Toolbar,
    "memoList": MemoList,
    "editor": Editor
  },
})
export default class App extends Vue {
  name: string =  'app'
}
</script>

<style>
  html {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    border: 0;
    height: 100%;
    max-height: 100%;
    position: relative;
  }

  .app {
    display: flex;
    align-items: stretch;
    height: 100vh;
  }
</style>
