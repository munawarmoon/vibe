import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/jsx/Header";
import Footer from "./components/jsx/Footer";
import Home from "./pages/Home/jsx/Home";
import Category from "./pages/Category/jsx/Category";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:gender" element={<Category />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
