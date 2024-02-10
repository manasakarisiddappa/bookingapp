import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, SingleHotel } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/hotels/:name/:address/:state/:id/reserve"
        element={<SingleHotel />}
      />
    </Routes>
  );
}

export default App;
