
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Pagination, Stack } from '@mui/material';
import './RestCountries.css';
import useFetchCountriesQuery from "../../Hooks/useFetchCountriesQuery.tsx";
import {Country} from "../../Types/Country.ts";

// const ITEMS_PER_PAGE = 12;

const RestCountries = () => {
    const { isLoading, isError, data = [] } = useFetchCountriesQuery();
    // const [countries] = useState([]);
    // const [currentPage, setCurrentPage] = useState(() => {
    //     const storedPage = sessionStorage.getItem('currentPage');
    //     return storedPage ? parseInt(storedPage, 10) : 1;
    // });
    //
    // const totalPages = Math.ceil(countries.length / ITEMS_PER_PAGE);
    //
    // const paginatedCountries = countries.slice(
    //     (currentPage - 1) * ITEMS_PER_PAGE,
    //     currentPage * ITEMS_PER_PAGE
    // );

    // const handlePageChange = (page: number) => {
    //     setCurrentPage(page);
    //     sessionStorage.setItem('currentPage', page.toString());
    // };

    return (
        <div className='capitan'>
            <div className='countries'>
                {data.map((country: Country, index: number) => (
                    <Card key={index} sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <Link to={`/country-details/${country.cca3}`} className='countries-div' key={index}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={country.flags?.png || "/static/images/default-flag.png"}
                                    alt={`Flag of ${country.name.common}`}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {country.name.common}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Capital: {country.capital}
                                        <br />
                                        Region: {country.region}
                                    </Typography>
                                </CardContent>
                            </Link>
                        </CardActionArea>
                        <CardActions>
                            <Link to={`/country-details/${country.cca3}`} className='countries-div' key={index}>
                                <Button size="small" color="primary">
                                    More
                                </Button>
                            </Link>
                        </CardActions>
                    </Card>
                ))}
            </div>
            {/*<div className='pagination'>*/}
            {/*    <Stack spacing={2}>*/}
            {/*        <Pagination*/}
            {/*            count={totalPages}*/}
            {/*            page={currentPage}*/}
            {/*            onChange={(_, page) => handlePageChange(page)}*/}
            {/*            showFirstButton*/}
            {/*            showLastButton*/}
            {/*        />*/}
            {/*    </Stack>*/}
            {/*</div>*/}
        </div>
    );
};

export default RestCountries;
