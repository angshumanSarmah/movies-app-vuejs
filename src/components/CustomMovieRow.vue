<template>
  <div class="container">
    <div>
      <router-link class="category" :to="routeToMoreMovies">
        <h3>{{ showCategoryName }}</h3>
      </router-link>
    </div>
    <button v-if="scrollAmount > 0" @click="goLeft()" class="goto-left-btn">
      <div class="icon">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </div>
    </button>
    <div class="row" ref="row">
      <span v-if="loadDefaultCardData">
        <span v-for="el in 20" :key="el">
          <card :show-default-data="true"  class="card-holder" />
        </span>
      </span>
      <div class="loading-div" v-else-if="!currentMovieList || currentMovieList.length === 0">
        Loading data...
      </div>
      <span v-else v-for="(movie, ind) in currentMovieList" :key="ind">
        <Card :movie="movie" :category="category" class="card-holder" />
      </span>
    </div>
    <button
      class="goto-right-btn"
      v-if="scrollAmount <= 2000"
      @click="goRight()"
    >
      <div class="icon">
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </div>
    </button>
  </div>
</template>
<script lang="ts">
// @ is an alias to /src
import { IMovieCategoryValue } from "@/models/models";
import { IMoviesRecord } from "@/store/movies/types";
import { Ref } from "vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import Card from "../components/Card.vue";
// import {WrappedActions as MoviesActions} from '../store/movies/movies.constants';
// import {Action} from 'vuex-class';

@Component({
  components: {
    Card,
  },
})
export default class CustomMovieRow extends Vue {
  @Prop() listOfMovie!: IMoviesRecord[];
  @Prop() category!: IMovieCategoryValue;

  row!: Ref;
  scrollAmount = 0;

  mounted() {
    this.row = this.$refs.row;
  }

  goRight() {
    console.log(this.scrollAmount);

    if (this.scrollAmount <= 2000) {
      const toScroll = this.scrollAmount >= 2000 ? 500 : 1000;
      this.row.scrollTo({
        left: (this.scrollAmount += toScroll),
        behavior: "smooth",
      });
    }
  }

  goLeft() {
    if (this.scrollAmount > 0) {
      this.row.scrollTo({
        left: (this.scrollAmount -= 1000),
        behavior: "smooth",
      });
    }
  }

  get loadDefaultCardData() {    
    return this.$store.getters.onlyDefaultCards;
  }

  get currentMovieList(): IMoviesRecord[] {
    console.log("listOfMovie: ", this.listOfMovie);
    return this.listOfMovie;
  }

  get routeToMoreMovies() {
    return {
      name: "moreMovies",
      params: { category: this.category },
    };
  }

  get showCategoryName() {
    return this.category || this.loadDefaultCardData && ('Default data');
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  max-width: 180rem;
  height: 24rem;
  overflow-x: hidden;
  overflow-y: hidden;

  .row {
    bottom: 1em;
    transition-delay: 0.6s;

    position: relative;
    height: 22em;
    box-sizing: border-box;

    white-space: nowrap;
    overflow-x: hidden;
    overflow-y: hidden;

    .card-holder {
      display: inline-block;
      box-sizing: border-box;
      top: 2em;
    }
  }

  @mixin button-style {
    width: 5em;
    height: 20.6em;
    position: absolute;
    top: 6em;
    z-index: 11;
    opacity: 0.5;
    border: none;
    color: #fff;
    cursor: pointer;
    &:hover {
      transition-duration: 0.6s;
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }

    .icon {
      font-size: 3em;
    }
  }

  .goto-right-btn {
    @include button-style;
    right: 0em;
    background: linear-gradient(
      to right,
      transparent,
      rgba(12, 17, 27, 0.7),
      rgba(12, 17, 27, 0.9)
    );
  }

  .goto-left-btn {
    @include button-style;
    background: linear-gradient(
      to left,
      transparent,
      rgba(12, 17, 27, 0.7),
      rgba(12, 17, 27, 0.9)
    );
    left: 0em;
  }

  .category {
    color: #fff;
    
      &:hover {
        font-size:large;
        transition: .6s;
        color: rgb(59, 59, 231)
      }

    
  }

  .loading-div {
    color: #fff;
    display: flex;
    justify-content: center;

  }
}
</style>