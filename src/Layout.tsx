import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetailCountry from './Components/SinglePage/DetailCountry';
import RestCountries from "./Components/Countries/Countries.tsx";

export const Layout = () => (
        <Routes>
            <Route path='/' element={<RestCountries />} />
            <Route path='/country-details/:code' element={<DetailCountry />} />
        </Routes>
)