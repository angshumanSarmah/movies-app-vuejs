<template>
  <div id="app">
    <TopNavigation />
    <router-view/>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import TopNavigation from './views/TopNavigation.vue';

@Component({
  components: {
    TopNavigation,
  },
})
export default class App extends Vue {
  mounted() {
    // this.$store.dispatch("loadPopularMovies");
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-image: linear-gradient(to bottom, #141b29, #0c111b);
  background-attachment: fixed;
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
