import HttpClient from "../common/http/HttpClient";
import { TvShow } from "./TvShow";

const httpClient = new HttpClient({
  baseURL: process.env.VUE_APP_MAZE_API_URL,
});

export const getTvShows = async (): Promise<TvShow[]> => {
  return await httpClient.get<TvShow[]>("shows");
};

export const getTvShowById = async (showId: string): Promise<TvShow> => {
  return await httpClient.get<TvShow>(`shows/${showId}`);
};
