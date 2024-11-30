import Header from "./components/website/header";
import Login from "./components/auth/login";
import Home from "./components/website/home";
import {Routes, Route } from "react-router";

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route index element= {<Home/>} ></Route>
        <Route element= {<Login/>} ></Route>
      </Routes>
    </div>
  )
}

export default App;
