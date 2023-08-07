
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RopaDetail from "./pages/RopaDetail";
import Login from "./pages/Login";
import Carrito from "./pages/Carrito";
import AppNavBar from "./components/AppNavBar";
import Loading from "./components/Loading";
import { useSelector } from "react-redux";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Registro from "./pages/Registro";

function App() {
  const loading = useSelector((state) => state.isLoading);

  return (
    <div className="App">
      <HashRouter>
        {loading && <Loading />}
        <AppNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ropas/:id" element={<RopaDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrate" element={<Registro/>}/>
          <Route element={<ProtectedRoutes />}>
            <Route path="/carrito" element={<Carrito />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
