import { Module } from "vuex";
import { IRootStoreState } from "../types";
import { IMoviesState } from "./types";
import { getters } from "./getters";
import { actions } from "./actions";
import mutations from "./mutations";


const state: IMoviesState = {
    moviesApiCalled: false,
    moviesRecord: []
}

export const movies: Module<IMoviesState, IRootStoreState> = {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations,
}