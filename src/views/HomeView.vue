<template>
  <div class="home">
    <CustomMovieRow v-if="mostPopular" :listOfMovie="mostPopular" :category="movieCategories.mostPopular"/>
    <CustomMovieRow v-if="bestDrama" :listOfMovie="bestDrama" :category="movieCategories.drama"/>    
    <CustomMovieRow v-if="bestFrom2000" :listOfMovie="bestFrom2000" :category="movieCategories.bestFrom2000"/>
    <CustomMovieRow v-if="topImbd" :listOfMovie="topImbd" :category="movieCategories.topImbd"/>
    <CustomMovieRow v-if="kids" :listOfMovie="kids" :category="movieCategories.kids"/>    
  </div>
</template>

<script lang="ts">


 // @ is an alias to /src
import CustomMovieRow from '@/components/CustomMovieRow.vue';
import { IMoviesRecord } from '@/store/movies/types';
import { Component, Vue } from 'vue-property-decorator';
import {IMovieCategoryValue} from '../models/models';
// import {WrappedActions as MoviesActions} from '../store/movies/movies.constants';
// import {Action} from 'vuex-class';

@Component({
  components: {
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

  get mostPopular(): IMoviesRecord[] {  
    console.log("===========mostPopular: ", this.$store.getters.mostPopular);
    return this.$store.getters.mostPopular;
  }

  get kids(): IMoviesRecord[] {  
    console.log("===========kids: ", this.$store.getters.kids);
    return this.$store.getters.kids;
  }

  get topImbd(): IMoviesRecord[] {  
    console.log("===========topImbd: ", this.$store.getters.topImbd);
    return this.$store.getters.topImbd;
  }

  get bestFrom2000(): IMoviesRecord[] {  
    console.log("===========bestFrom2000: ", this.$store.getters.bestFrom2000);
    return this.$store.getters.bestFrom2000;
  }

  get movieCategories(): typeof IMovieCategoryValue {
    return IMovieCategoryValue;
  }

  get bestDrama(): typeof IMovieCategoryValue {
    return this.$store.getters.bestDrama;
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