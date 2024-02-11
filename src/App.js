import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, SingleHotel } from "./pages";
import { SearchResults } from "./pages/SearchResults/SearchResults";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/hotels/:name/:address/:state/:id/reserve"
        element={<SingleHotel />}
      />
      <Route path="/hotels/:address" element={<SearchResults />} />
    </Routes>
  );
}

export default App;
