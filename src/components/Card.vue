<template>
  <div class="card">
    <router-link v-if="showDefaultData" :to="routeToDetails" >

      <span class="rating" style=""> {{Math.ceil(Math.random()*10)}}/10</span>
      <img
        src="../assets/ironman.jpg"
        alt=""
        class="image"
      />
      <div class="detail">
        <h3>Default Title</h3>

        <div class="more-info">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
          expedita a reiciendis ad eligendi odio voluptatibus id dolor
          repudiandae, pariatur et aut illo iusto, nulla distinctio debitis,
          placeat iure. Praesentium?
          </p>
          <button @click="watchNow">
            <font-awesome-icon :icon="['fas', 'fa-play']" />
            Watch now
          </button>

          <br />
          <button @click="addToWatchList">
            <font-awesome-icon :icon="['fas', 'fa-plus']" />
            Add to Watchlist
          </button>
        </div>
      </div>

    </router-link> 
    <router-link v-else :to="routeToDetails" :key="movieDetails?.title">
      <span class="rating" style="">{{ movieDetails?.vote_average }}/10</span>
      <img
        v-if="movieDetails?.poster_path"
        :src="movieDetails?.poster_path"
        alt=""
        class="image"
      />
      <div v-else class="image">
        <span>No Preview Found</span>
      </div>
      <div class="detail">
        <h3>{{ movieDetails?.title }}</h3>

        <div class="more-info">
          <p>
            {{ movieDetails?.overview }}
          </p>
          <button @click="watchNow">
            <font-awesome-icon :icon="['fas', 'fa-play']" />
            Watch now
          </button>

          <br />
          <button @click="addToWatchList">
            <font-awesome-icon :icon="['fas', 'fa-plus']" />
            Add to Watchlist
          </button>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { IMAGE_BASE_PATH } from "@/store/movies/actions";
import { Component, Prop, Vue } from "vue-property-decorator";
import cloneDeep from "lodash/cloneDeep";
import { IMoviesRecord } from "@/store/movies/types";
import { IMovieCategoryValue } from "@/models/models";
@Component
export default class Card extends Vue {
  @Prop() movie!: IMoviesRecord;
  @Prop() category!: IMovieCategoryValue;
  @Prop({default: false}) showDefaultData!: boolean

  movieData!: IMoviesRecord;

  // mounted() {
  //   this.movieData = cloneDeep(this.movie);
  //   console.log("this.movieData", this.movie)

  // }
  get movieDetails() {
    const movieDetails = cloneDeep(this.movie);
    if(this.movie) {
      movieDetails.poster_path = `${IMAGE_BASE_PATH}${this.movie?.poster_path}`;
    }
    return movieDetails || {};
  }

  get routeToDetails() {
    return {
      name: 'movieDetails',
      params: {details: this.movieDetails, category: this.category}
    }
  }

  addToWatchList(event: Event) {
    event.preventDefault();
  }

  watchNow(event: Event) {
    event.preventDefault();
  }
}
</script>

<style scoped lang="scss">
@mixin detail-basic-style {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.49) 10%,
    rgba(0, 0, 0, 0.69) 30%,
    rgba(0, 0, 0, 0.93) 50%
  );
  border-radius: 7px;
  padding: 16px;
  z-index: 1;
}

.card {
  width: 12em;
  height: 17em;
  margin: 0.3em;
  position: relative;
  &:hover {
    transform: scale(1.2);
    z-index: 10;
    transition-duration: 0.6s;

    //to show the details
    .detail {
      height: 5em;
      transition-duration: 0.6s;
      h3,
      h5 {
        display: none;
      }
      .more-info {
        visibility: visible;
        opacity: 1;
        color: #fff;
        font-size: xx-small;

        button {
          font-size: xx-small;
          width: 100%;
          cursor: pointer;
          margin-bottom: 5px;
        }

        p {
          white-space: nowrap;
          //for elipses on description above cards
          //for older browsers
          text-overflow: ellipsis;
          overflow: hidden;
          //for newer browsers
          @supports (-webkit-line-clamp: 4) {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: initial;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
    .rating {
      display: none;
    }
  }
  .image {
    color: #fff;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 7px;
    position: relative;
    z-index: 0;
  }

  // .detail {
  //   display: none
  // }
  .detail {
    display: block;
    height: 3em;
    @include detail-basic-style;

    h3 {
      color: #fff;
      text-align: center;
      margin-top: 12px;
      white-space: break-spaces;
      @supports (-webkit-line-clamp: 2) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: initial;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }

    h5 {
    }

    .more-info {
      visibility: hidden;
      opacity: 0;
      transition: visibility 0s, opacity 0.6s linear;
    }
  }

  .rating {
    float: right;
    position: absolute;
    z-index: 1;
    right: 0em;
    color: rgb(255, 230, 0);
    padding: 1em;
    font-weight: bold;
  }
}
</style>
