import { TvGenres } from "@/common/constants";

export interface TvShow {
  id: number;
  url: string;
  name: string;
  genres: TvGenres[];
  rating: TvRating;
  image: Image;
  summary: string;
}

interface TvRating {
  average: number;
}

interface Image {
  medium?: string;
  original?: string;
}
