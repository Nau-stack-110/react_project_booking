import { Routes, Route } from 'react-router-dom';
import UserTable from './components/dashboard/userTable';
import StatsCards from './components/dashboard/statsCards';
import Dashboard from './components/dashboard/dashboard';
import ChartReservation from './components/dashboard/chartReservation';
import TaxibeCards from './components/dashboard/taxibeCard';


import Header from "./components/website/header";
import Notfound from "./components/website/notfound";
import Featuresa from "./components/website/featuresa";
import Faq from "./components/website/faq";
import SelectSeats from "./components/website/selectSeats";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import Home from "./components/website/home";
import PrivateRoute from './components/privatedRoute';
import AvailableTaxibe from './components/website/availableTaxibe';
import AdminRoute from './components/adminRoute';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Header/>} >
        <Route path= "/" index element={ <Home /> } />
        <Route path= "/available-taxibe" index element={<AvailableTaxibe />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/features" element={<Featuresa />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/select_seats" element={<SelectSeats />} />
      </Route>
      <Route path="*" element={<Notfound />} />
      <Route path="/dashboard" element={<PrivateRoute><AdminRoute><Dashboard /></AdminRoute></PrivateRoute>} >
        <Route path="/dashboard/users" element={<UserTable />} />
        <Route path="/dashboard/stats" element={<StatsCards />} />
        <Route path="/dashboard/chart" element={<ChartReservation />} />
        <Route path="/dashboard/taxibe" element={<TaxibeCards/>} />
      </Route>

    </Routes>
  );
};

export default App;




















