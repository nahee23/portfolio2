import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { FoodProvider } from "./context/FoodContext";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <FoodProvider>
        <div className="flex flex-col justify-between h-screen">
          <Navbar title="RESTAURANT FINDER" />

          <main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </FoodProvider>
    </BrowserRouter>
  );
}

export default App;
