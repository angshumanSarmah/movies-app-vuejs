<template>
  <div class="home">
    <Toaster />
    <CustomMovieRow v-if="mostPopular.length" :listOfMovie="mostPopular" :category="movieCategories.mostPopular"/>
    <CustomMovieRow v-if="drama.length" :listOfMovie="drama" :category="movieCategories.drama"/>    
    <CustomMovieRow v-if="bestFrom2000.length" :listOfMovie="bestFrom2000" :category="movieCategories.bestFrom2000"/>
    <CustomMovieRow v-if="topImbd.length" :listOfMovie="topImbd" :category="movieCategories.topImbd"/>
    <CustomMovieRow v-if="kids.length" :listOfMovie="kids" :category="movieCategories.kids"/>
    <div class="no-records" v-if="noDataFound">
      <span> Something went wrong, No records found...</span>
    </div>  
  </div>
</template>

<script lang="ts">


 // @ is an alias to /src
import CustomMovieRow from '@/components/CustomMovieRow.vue';
import Toaster from '@/components/Toaster.vue';

import { IMoviesRecord } from '@/store/movies/types';
import { Component, Vue } from 'vue-property-decorator';
import {IMovieCategoryValue} from '../models/models';
// import {WrappedActions as MoviesActions} from '../store/movies/movies.constants';
// import {Action} from 'vuex-class';

@Component({
  components: {
    CustomMovieRow,
    Toaster
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

  get drama(): typeof IMovieCategoryValue {
    return this.$store.getters.drama;
  }

get noDataFound() {
    return !(this.mostPopular.length && this.kids.length && this.topImbd.length && this.bestFrom2000.length);
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
  .no-records {
    color: #fff;
    display: flex;
    justify-content: center;
  }
}
</style>