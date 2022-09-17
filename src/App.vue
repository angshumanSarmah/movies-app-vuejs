<template>
  <div id="app">
    <TopNavigation class="header"/>
    <router-view class="main-view"/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MovieCategory } from './models/models';
import TopNavigation from './views/TopNavigation.vue';

@Component({
  components: {
    TopNavigation,
  },
})
export default class App extends Vue {
  mounted() {
    Promise.all([
      this.$store.dispatch("fetchMovies", MovieCategory.mostPopular),
      this.$store.dispatch("fetchMovies", MovieCategory.kids),
      this.$store.dispatch("fetchMovies", MovieCategory.topImbd),
      this.$store.dispatch("fetchMovies", MovieCategory.bestFrom2000),  
      this.$store.dispatch("fetchMovies", MovieCategory.drama),      
    ])

  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
}

.main-view {
  top: 5em;
  position: relative;
}

.header {
  position: fixed;
  z-index: 100;
  width: 100%;
}

body {
  background-image: linear-gradient(to bottom, #141b29, #0c111b);
  background-attachment: fixed;
  margin: 0 !important;
}

/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #888; 
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: gray; 
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #4d4d4d; 
}

</style>
