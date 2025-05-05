import MainPage from "./pages/Main-page";
import AddExpense from "./pages/AddExpense";
import Login from "./pages/Login";
import Diagrams from "./pages/Diagrams";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/add_expense" element={<AddExpense />} />
      <Route path="/login" element={<Login />} />
      <Route path="/diagrams" element={<Diagrams />} />
    </Routes>
  );
}

export default App;
