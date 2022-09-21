import { GetterTree } from "vuex";
import { IRootStoreState } from "../types";
import { IMoviesRecord, IMoviesState } from "./types";

export const getters: GetterTree<IMoviesState, IRootStoreState> = {
    
    topImbd(state): IMoviesRecord[] {
        return state.moviesRecordByCategory.topImbd;
    },
    kids(state): IMoviesRecord[] {
        return state.moviesRecordByCategory.kids;
    },
    mostPopular(state): IMoviesRecord[] {
        return state.moviesRecordByCategory.mostPopular;
    },
    bestFrom2000(state): IMoviesRecord[] {
        return state.moviesRecordByCategory.bestFrom2000;
    },
    drama(state): IMoviesRecord[] {
        return state.moviesRecordByCategory.drama;
    },
    onlyDefaultCards(state): boolean {
        return state.loadDefaultCards;
    }
}