import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import routers from "./helper/Routers";
import Home from "./pages/Home";
import Library from "./pages/Library";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routers.home} element={<Home />} />
        <Route path={routers.library} element={<Library />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
