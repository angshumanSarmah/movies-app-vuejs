import { MutationTree } from "vuex";
import { IMoviesRecord, IMoviesState } from "./types";

const mutations: MutationTree<IMoviesState> = {
    setMovies(state, payload: IMoviesRecord[]) {
        console.log("payload to mutater: ", payload)
        state.moviesRecord = payload;
    },
    setMoviesLoaded(state, status = true) {
        state.moviesApiCalled = status;
    }
}

export default mutations;