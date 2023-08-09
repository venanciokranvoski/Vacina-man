import api from "~/services/api";
import { GetPlacesRequest } from "./types";
import { PlaceDTO } from "~/@types/dtos/place";


export const GetPlaces = async(
    params:Partial<GetPlacesRequest>,
): Promise<Array<PlaceDTO>> => {
    const {data} = await api.get('/Vacina', {params});
    return data;
}