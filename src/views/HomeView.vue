<template>
  <div class="home">
    <!-- <div v-if="!currentMovieList || currentMovieList.length === 0">
      Loading data...
    </div>
    <div v-else v-for="(movie, key) in currentMovieList" :key="key">
      <card :movie="movie"/>
    </div> -->
      <card :movie="movie"/>
      <card :movie="movie"/>
      <card :movie="movie"/>
      <card :movie="movie"/>
      <card :movie="movie"/>
      <card :movie="movie"/>
      <card :movie="movie"/>
      <card :movie="movie"/>
      <card :movie="movie"/>
      <card :movie="movie"/>
      <card :movie="movie"/>
      <card :movie="movie"/>
      <card :movie="movie"/>
      <card :movie="movie"/>
      <card :movie="movie"/>


  </div>
</template>

<script lang="ts">


 // @ is an alias to /src
import { IMoviesRecord } from '@/store/movies/types';
import { Component, Vue } from 'vue-property-decorator';
import Card from '../components/Card.vue';
// import {WrappedActions as MoviesActions} from '../store/movies/movies.constants';
// import {Action} from 'vuex-class';

@Component({
  components: {
    Card
  },
})
export default class HomeView extends Vue {
  // @Action(MoviesActions.loadPopularMovies) loadPopularMovies!: ()=> IMoviesRecord;
  // currentMovieList = [];

  // async mounted() {
  //   this.currentMovieList = this.$store.getters.getMovies;
  //   console.log("this.currentMovieList: ", this.currentMovieList)
  // }

  get currentMovieList(): IMoviesRecord[] {
    return this.$store.getters.getMovies;
  }
}
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>