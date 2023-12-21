import {useQuery} from "@tanstack/react-query";
import {DetailCountries} from "../Types/DetailCountries.ts";

const useFetchCountryQuery = (code?: string) => useQuery({
    queryKey: ['country', code],
    queryFn: async () : Promise<DetailCountries[]> => {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
        const data = await response.json();
        return data;
    },
        enabled: !!code
})


export default useFetchCountryQuery;