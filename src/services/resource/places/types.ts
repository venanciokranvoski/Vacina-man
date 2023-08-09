import { PlaceDTO } from "~/@types/dtos/place";

export interface GetPlacesRequest extends PlaceDTO{
    search ?: string;
}