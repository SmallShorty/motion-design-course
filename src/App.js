import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Error } from "./pages/Error";
import { Navbar } from "./components/Navbar";
import { Components } from "./pages/Components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/components" element={<Components />} />
          <Route path="*" index element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
