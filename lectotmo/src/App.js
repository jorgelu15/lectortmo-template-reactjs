import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import routers from "./helper/Routers";
import Groups from "./pages/Groups";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routers.home} element={<Home />} />
        <Route path={routers.library} element={<Library />} />
        <Route path={routers.groups} element={<Groups />} />
        <Route path={routers.profile} element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
