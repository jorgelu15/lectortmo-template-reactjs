import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import routers from "./helper/Routers";
import Groups from "./pages/Groups";
import Home from "./pages/Home";
import Library from "./pages/Library";
import LogIn from "./pages/LogIn";
import LogUp from "./pages/LogUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routers.home} element={<Home />} />
        <Route path={routers.library} element={<Library />} />
        <Route path={routers.groups} element={<Groups />} />
        <Route path={routers.login} element={<LogIn />} />
        <Route path={routers.logUp} element={<LogUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
