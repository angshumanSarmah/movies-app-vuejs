// import { ActionTree } from "vuex";

// import axios from 'axios';
// import { IMoviesState } from "./movies.model";
// import { IRootStoreState } from "@/store/store.model";
// import { Actions } from "./movies.constants";


// const BASE_URL = 'https://api.themoviedb.org/3';
// const POPULAR_MOVIE_URL = '/discover/movie?sort_by=popularity.desc';
// export const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/w500';

// const actions: ActionTree<IMoviesState, IRootStoreState> = {
//     [Actions.loadPopularMovies]: async ({commit, rootState}, payload: any)=>{
//         console.log("DAAAAAAAAAAAAAAAAAAA")
//         try {
//             const data = await axios.get(`${BASE_URL}${POPULAR_MOVIE_URL}&api_key=${process.env.VUE_APP_API_KEY}`);
//             console.log("Data: ", data);
//         }catch(err) {
//             console.error("Error fetching data", err);
//         }
//     }
// }

// export default actions;