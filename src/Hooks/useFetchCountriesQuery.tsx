import { useQuery } from "@tanstack/react-query";
import {Country} from "../Types/Country.ts";

const useFetchCountriesQuery = () => useQuery({
        queryKey: ['countries'],
        queryFn: async (): Promise<Country[]> => {
                const response = await fetch('https://restcountries.com/v3.1/all');
                const data = await response.json();
                return data;
        },
});

export default useFetchCountriesQuery;
