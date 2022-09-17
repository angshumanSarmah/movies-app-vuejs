import { GetterTree } from "vuex";
import { IRootStoreState } from "../types";
import { IMoviesRecord, IMoviesState } from "./types";

export const getters: GetterTree<IMoviesState, IRootStoreState> = {
    getMovies(state): IMoviesRecord[] {
        return state.moviesRecord
    }
}