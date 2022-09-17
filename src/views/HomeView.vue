<template>
  <div class="home">
    <CustomMovieRow :list-of-movie="currentMovieList" :category="movieCategories.mostPopular"/>
    <CustomMovieRow :list-of-movie="currentMovieList" :category="movieCategories.mostPopular"/>
    <!-- <CustomMovieRow :listOfMovie="currentMovieList" :category="movieCategories.mostPopular"/>
    <CustomMovieRow :listOfMovie="currentMovieList" :category="movieCategories.mostPopular"/> -->

    
  </div>
</template>

<script lang="ts">


 // @ is an alias to /src
import CustomMovieRow from '@/components/CustomMovieRow.vue';
import { IMoviesRecord } from '@/store/movies/types';
import { Component, Vue } from 'vue-property-decorator';
import Card from '../components/Card.vue';
import {MovieCategory} from '../models/models';
// import {WrappedActions as MoviesActions} from '../store/movies/movies.constants';
// import {Action} from 'vuex-class';

@Component({
  components: {
    Card,
    CustomMovieRow
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
    console.log("From Home getter: ", this.$store.getters.getMovies);
      
    return this.$store.getters.getMovies;
  }

  get movieCategories(): typeof MovieCategory {
    return MovieCategory;
  }
}
</script>
<style lang="scss" scoped>
.home {
  margin: 5px;
  // display: flex;
  // flex-direction: row;
  // flex-wrap: wrap;
  // align-items: center;
  // justify-content: center;
}
</style>