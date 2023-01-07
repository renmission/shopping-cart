import React from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { ShoppingCardProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCardProvider>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/store" element={<Store />} />
        </Routes>
      </Container>
    </ShoppingCardProvider>
  );
}

export default App;
