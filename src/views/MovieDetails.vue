<template>
  <div>
    <div class="movie-details">
        <img
          :src="details?.poster_path || '../assets/ironman.jpg'"
          alt=""
          class="image"
        />   
        <div class="right-side">
          <h1>
            {{details?.title}} <span class="rating">({{details.vote_average}})</span>
          </h1>
          <div class="overview"> {{details.overview}}</div>
        </div>  
    </div>
    <CustomMovieRow :listOfMovie="moreFromTheSameCategory" :category="category"/>
  </div>

</template>

<script lang="ts">


 // @ is an alias to /src
import CustomMovieRow from '@/components/CustomMovieRow.vue';
import { IMAGE_BASE_PATH } from '@/store/movies/actions';
import { IMoviesRecord } from '@/store/movies/types';
import { cloneDeep } from 'lodash';
import { Component, Prop, Vue } from 'vue-property-decorator';
import Card from '../components/Card.vue';
import {IMovieCategoryKey, IMovieCategoryValue} from '../models/models';
// import {WrappedActions as MoviesActions} from '../store/movies/movies.constants';
// import {Action} from 'vuex-class';

@Component({
  components: {
    CustomMovieRow
  },
})
export default class MovieDetails extends Vue {
    @Prop() details!: IMoviesRecord;
    @Prop() category!: IMovieCategoryValue;


    mounted() {
      console.log("details: ", this.details);
      
    }

    
  get moreFromTheSameCategory(): IMoviesRecord[] {  
    console.log("===========mostPopular: ", this.$store.getters[this.movieCategoryKeyFromValue]);
    return this.$store.getters[this.movieCategoryKeyFromValue];
  }

  
  get movieCategories(): typeof IMovieCategoryValue {
    return IMovieCategoryValue;
  }

  get movieCategoryKeyFromValue() {
    return IMovieCategoryKey[this.category]
  }

  get movieDetails() {
    const movieDetails = cloneDeep(this.details);
    console.log("movieDetails: ", movieDetails);

    movieDetails.poster_path = `${IMAGE_BASE_PATH}${this.details.poster_path}`;
    return movieDetails;
  }
}
</script>
<style lang="scss" scoped>
.movie-details {
  display: flex;
  flex-direction: row;

img {
    height: 30em;
  }
  .right-side {
    margin-top: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    .rating {
      color: rgb(255, 230, 0);
      font-weight: bold;
    }

    .overview {
      font-size: small
    }
  }
}
</style>