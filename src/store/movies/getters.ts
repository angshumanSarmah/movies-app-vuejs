import { GetterTree } from "vuex";
import { IRootStoreState } from "../types";
import { IMoviesRecord, IMoviesState } from "./types";

export const getters: GetterTree<IMoviesState, IRootStoreState> = {
    getMovies(state): IMoviesRecord[] {
        console.log("state.moviesRecord in store: ", state.moviesRecord)
        return state.moviesRecord
    }
}