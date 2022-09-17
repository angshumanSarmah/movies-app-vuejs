import { Module } from "vuex";
import { IRootStoreState } from "../types";
import { IMoviesState } from "./types";
import { getters } from "./getters";
import { actions } from "./actions";
import mutations from "./mutations";
import { MovieCategory } from "@/models/models";


const state: IMoviesState = {
    moviesApiCalled: false,
    moviesRecordByCategory: {
        [MovieCategory.mostPopular]: [],
        [MovieCategory.topImbd]: [],
        [MovieCategory.kids]: [],
        [MovieCategory.bestFrom2000]: [],
    }
}

export const movies: Module<IMoviesState, IRootStoreState> = {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations,
}