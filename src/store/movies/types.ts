import { MovieCategory } from "@/models/models"

export interface IMoviesState {
    moviesApiCalled: boolean,
    moviesRecordByCategory:  IMoviesRecordByCategory,
}

export type IMoviesRecordByCategory = {
    [key in MovieCategory]: IMoviesRecord[]
}

export interface IMoviesRecord {
    title: string,
    overview: string,
    poster_path: string,
    popularity: number
}