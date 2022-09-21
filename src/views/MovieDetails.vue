<template>
  <div>
    <div v-if="loadDefaultCardData" class="movie-details">
      <img
        src="../assets/ironman.jpg"
        alt=""
        class="image"
      />
      <div class="right-side">
        <h1>
          Default Title
          <span class="rating">({{Math.ceil(Math.random()*10)}})</span>
        </h1>
        <div class="overview">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis magnam deleniti repellat laboriosam. Fuga, iusto nihil nemo sed, voluptatum esse nulla earum quasi, alias sequi officiis laborum exercitationem hic eligendi.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis magnam deleniti repellat laboriosam. Fuga, iusto nihil nemo sed, voluptatum esse nulla earum quasi, alias sequi officiis laborum exercitationem hic eligendi.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis magnam deleniti repellat laboriosam. Fuga, iusto nihil nemo sed, voluptatum esse nulla earum quasi, alias sequi officiis laborum exercitationem hic eligendi.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis magnam deleniti repellat laboriosam. Fuga, iusto nihil nemo sed, voluptatum esse nulla earum quasi, alias sequi officiis laborum exercitationem hic eligendi.
        </div>
      </div>
    </div>
    <div v-else class="movie-details">
      <img
        v-if="details?.poster_path"
        :src="details?.poster_path"
        alt=""
        class="image"
      />
      <div class="right-side">
        <h1>
          {{ details?.title }}
          <span class="rating">({{ details.vote_average }})</span>
        </h1>
        <div class="overview">{{ details.overview }}</div>
      </div>
    </div>
    <CustomMovieRow
      v-if="moreFromTheSameCategory?.length || loadDefaultCardData"
      :listOfMovie="moreFromTheSameCategory"
      :category="category"
    />
    <div v-else class="no-records">
      <span> No records found...</span>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import CustomMovieRow from "@/components/CustomMovieRow.vue";
import { IMAGE_BASE_PATH } from "@/store/movies/actions";
import { IMoviesRecord } from "@/store/movies/types";
import { cloneDeep } from "lodash";
import { Component, Prop, Vue } from "vue-property-decorator";
import { IMovieCategoryKey, IMovieCategoryValue } from "../models/models";
// import {WrappedActions as MoviesActions} from '../store/movies/movies.constants';
// import {Action} from 'vuex-class';

@Component({
  components: {
    CustomMovieRow,
  },
})
export default class MovieDetails extends Vue {
  @Prop() details!: IMoviesRecord;
  @Prop() category!: IMovieCategoryValue;


  mounted() {
    console.log("details: ", this.details);
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
    return IMovieCategoryKey[this.category];
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
    color: #fff;
    margin-top: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    .rating {
      color: rgb(255, 230, 0);
      font-weight: bold;
    }

    .overview {
      font-size: large;
    }
  }

  .no-records {
    span {
      color: #fff;
    }
    display: flex;
    justify-content: center;
  }
}
</style>