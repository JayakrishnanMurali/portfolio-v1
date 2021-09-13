import React from "react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    </div>
  );
}

export default App;
