import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Error } from "./pages/Error";
import { HeaderPageMenu } from "./components/HeaderPageMenu";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderPageMenu />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" index element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
