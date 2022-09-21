<template>
  <div class="container">
    <div class="header">
      <span>More from: {{category}}</span>
    </div>
    <div v-if="loadDefaultCardData" class="movies">
        <span  v-for="el in 20" :key="el">
          <card :show-default-data="true"  class="card-holder" />
        </span>
    </div>
    <div v-else class="movies">
      <span  v-for="(movie, ind) in moreFromTheSameCategory" :key="ind">
        <Card :movie="movie" :category="category" class="card-holder"/>
      </span>
    </div>
  </div>
</template>

<script lang="ts">


 // @ is an alias to /src
import CustomMovieRow from '@/components/CustomMovieRow.vue';
import { IMoviesRecord } from '@/store/movies/types';
import { Component, Prop, Vue } from 'vue-property-decorator';
import Card from '../components/Card.vue';
import { IMovieCategoryKey, IMovieCategoryValue} from '../models/models';
// import {WrappedActions as MoviesActions} from '../store/movies/movies.constants';
// import {Action} from 'vuex-class';

@Component({
  components: {
    Card,
    CustomMovieRow
  },
})
export default class MoreMovies extends Vue {
    @Prop() category!: IMovieCategoryValue;

    mounted() {
      console.log("category: ", this.category);
    }

      get loadDefaultCardData() {    
    return this.$store.getters.onlyDefaultCards;
  }


      
  get moreFromTheSameCategory(): IMoviesRecord[] {  
    return this.$store.getters[this.movieCategoryKeyFromValue];
  }

  
  get movieCategories(): typeof IMovieCategoryValue {
    return IMovieCategoryValue;
  }

  get movieCategoryKeyFromValue() {
    return IMovieCategoryKey[this.category]
  }
  
}
</script>
<style lang="scss" scoped>
.container {
  color: #fff;
  .header {
    position: absolute;
    height: 2em;
    font-size: 2em;
    text-align: center;
  }
  .movies {
    position: absolute;
    top: 5em;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 1em;
  }
}
</style>