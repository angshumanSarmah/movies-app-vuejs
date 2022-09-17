<template>
  <div class="container">
    Category: {{category}}
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
import { IMovieCategoryValue, MovieCategory} from '../models/models';
// import {WrappedActions as MoviesActions} from '../store/movies/movies.constants';
// import {Action} from 'vuex-class';

@Component({
  components: {
    Card,
    CustomMovieRow
  },
})
export default class MoreMovies extends Vue {
    @Prop() category!: MovieCategory;

    mounted() {
      console.log("category: ", this.category);
    }

  
}
</script>
<style lang="scss" scoped>
.container {
  height: inherit;
}
</style>