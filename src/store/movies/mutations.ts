import { MovieCategory } from "@/models/models";
import { MutationTree } from "vuex";
import { IMoviesRecord, IMoviesState } from "./types";

const mutations: MutationTree<IMoviesState> = {
    setMovies(state, payload: {movieDetails: IMoviesRecord[], type: MovieCategory }) {
        state.moviesRecordByCategory[MovieCategory[payload.type]] = payload.movieDetails;
    },
    setMoviesLoaded(state, status = true) {
        state.moviesApiCalled = status;
    }
}

export default mutations;