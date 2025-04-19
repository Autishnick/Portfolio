import Page from "./Page";
import { Routes, Route } from "react-router-dom";
import Liked from "./Liked";
import Login from "./Login";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="/about" element={<Liked />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
