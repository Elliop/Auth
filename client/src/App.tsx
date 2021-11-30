import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import Logged from "./pages/Logged";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logged" element={<ProtectedRoute />}>
          <Route path="/logged" element={<Logged />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
