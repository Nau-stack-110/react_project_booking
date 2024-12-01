import { Routes, Route } from 'react-router-dom';
import UserTable from './components/dashboard/userTable';
import StatsCards from './components/dashboard/statsCards';
import Dashboard from './components/dashboard/dashboard';
import ChartReservation from './components/dashboard/chartReservation';


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Dashboard />} >
            <Route path="/users" element={<UserTable />} />
            <Route path="/stats" element={<StatsCards />} />
            <Route path="/chart" element={<ChartReservation />} />
        </Route>
      </Routes>
  );
};

export default App;





















// import Header from "./components/website/header";
// import Login from "./components/auth/login";
// import Home from "./components/website/home";
// import {Routes, Route } from "react-router-dom";
// import Notfound from "./components/website/notfound";

// import Featuresa from "./components/website/featuresa";
// import Faq from "./components/website/faq";
// import AvailableTaxibe from "./components/website/availableTaxibe";
// import Register from "./components/auth/register";
// import Dashboard from "./components/dashboard/dashboard";
// const App = () => {
//   return (
//     <div>
//       <Header/>
//       <Routes>
//         <Route path="/" index element= {<Home/>}></Route>
//         <Route path="/faq" element={<Faq />}></Route>
//         <Route path="/features" element = { <Featuresa/> }></Route>
//         <Route path="/login" element= {<Login/>} ></Route>
//         <Route path="/register" element= {<Register/>} ></Route>
//         <Route path="*" element= {<Notfound/>} ></Route>
//         <Route path="/available_taxibe" element= {<AvailableTaxibe/>} ></Route>
//       </Routes>
//      <Dashboard/>

//     </div>
//   )
// }

// export default App;
