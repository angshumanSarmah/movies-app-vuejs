import axios from "axios";
import { ActionTree } from "vuex";
import { IRootStoreState } from "../types";
import mutations from "./mutations";
import { IMoviesState } from "./types";

const BASE_URL = 'https://api.themoviedb.org/3';
const POPULAR_MOVIE_URL = '/discover/movie?sort_by=popularity.desc';
export const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/w500';


export const actions: ActionTree<IMoviesState, IRootStoreState> = {
    async loadPopularMovies({commit, state }) {
        try {
            if(!state.moviesApiCalled) {
                const data = await axios.get(`${BASE_URL}${POPULAR_MOVIE_URL}&api_key=${process.env.VUE_APP_API_KEY}`);
                const requiredDetails = data.data.results.map((result: any)=> {
                    const {title, overview, poster_path} = result;
                    return {title, overview, poster_path}
                });
                commit('setMovies', requiredDetails);
                commit('setMoviesLoaded');
            }

        } catch (err) {
            console.error("Error fetching data", err);
        }
    }
}