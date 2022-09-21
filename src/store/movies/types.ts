import { MovieCategory } from "@/models/models"

export interface IMoviesState {
    moviesApiCalled: boolean,
    moviesRecordByCategory:  IMoviesRecordByCategory,
    loadDefaultCards: boolean,
}

export type IMoviesRecordByCategory = {
    [key in MovieCategory]: IMoviesRecord[]
}

export interface IMoviesRecord {
    title: string,
    overview: string,
    poster_path: string,
    vote_average: number
}