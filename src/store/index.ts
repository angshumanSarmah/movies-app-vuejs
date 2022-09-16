import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { IRootStoreState } from './types';
import { movies } from '@/store/movies';


Vue.use(Vuex)

const store: StoreOptions<IRootStoreState> = {
// state: {
//   someData: ''
// },
// getters: {
// },
// mutations: {
// },
// actions: {
// },
  modules: {
    movies
  }
}

export default new Vuex.Store<IRootStoreState>(store);







// import { StoreOptions } from "vuex";
// import { IRootStoreState } from "../store.model";
// import { MoviesStore as movies} from "../store/movies/movies.store";

// const store: StoreOptions<IRootStoreState> = {
//     modules: {
//         movies,
//     }
// }

// export default store;