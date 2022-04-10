import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { NotificationContainer } from 'react-notifications';
import React from "react";

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <NotificationContainer />
      </React.StrictMode>
    </div>
  );
}

export default App;
