import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Users from './components/dashboard/Users';
import Taxibes from './components/dashboard/Taxibes';
import RoutesComponent from './components/dashboard/Routes';
import Cooperatives from './components/dashboard/Cooperatives';
import Charts from './components/dashboard/Charts';
import Trajets from './components/dashboard/trajets';
import Profile from './components/dashboard/profile';

import Header from "./components/website/header";
import Notfound from "./components/website/notfound";
import Featuresa from "./components/website/featuresa";
import Faq from "./components/website/faq";
import SelectSeats from "./components/website/selectSeats";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import Home from "./components/website/home";
import AvailableTaxibe from './components/website/availableTaxibe';

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

      <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Profile />} />
          <Route path="users" element={<Users />} />
          <Route path="profile" element={<Profile />} />
          <Route path="taxibes" element={<Taxibes />} />
          <Route path="routes" element={<RoutesComponent />} />
          <Route path="trajets" element={<Trajets/>} />
          <Route path="cooperatives" element={<Cooperatives />} />
          <Route path="charts" element={<Charts />} />
        </Route>

    </Routes>
  );
};

export default App;




















