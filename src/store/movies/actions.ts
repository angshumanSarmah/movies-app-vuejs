import { MovieCategory } from "@/models/models";
import axios from "axios";
import { ActionTree } from "vuex";
import { IRootStoreState } from "../types";
import { IMoviesState } from "./types";

const BASE_URL = 'https://api.themoviedb.org/3';
const URLS = {
    POPULAR: '/discover/movie?sort_by=popularity.desc',
    TOPIMDB: '/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc',
    KIDS: '/discover/movie?certification_country=IN&certification.lte=G&sort_by=popularity.desc',
    BESTFROM2000: '/discover/movie?primary_release_year=2010&sort_by=vote_average.desc',
    BESTDRAMA: '/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10',
}
export const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/w500';


export const actions: ActionTree<IMoviesState, IRootStoreState> = {
    async fetchMovies({commit, state }, type: MovieCategory) {
        try {
            if(!state.moviesApiCalled) {
                const url = getUrl(type);
                const data = await axios.get(`${BASE_URL}${url}&api_key=${process.env.VUE_APP_API_KEY}`);
                const movieDetails = data.data.results.map((result: any)=> {
                    const {title, overview, poster_path, vote_average} = result;
                    return {title, overview, poster_path, vote_average}
                });
                commit('setMovies', {movieDetails, type});
                commit('setMoviesLoaded');
            }

        } catch (err) {
            console.error("Error fetching data", err);
        }
    }
}

function getUrl(type: string) {
    switch(type) {
        case MovieCategory.mostPopular : return  URLS.POPULAR;
        case MovieCategory.kids : return  URLS.KIDS;
        case MovieCategory.topImbd : return  URLS.TOPIMDB;
        case MovieCategory.bestFrom2000 : return  URLS.BESTFROM2000;
        case MovieCategory.drama : return  URLS.BESTDRAMA;

    }
}