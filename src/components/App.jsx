import React from "react";
// import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import { Dashbaord } from "./Dashbaord";
import Layout from "./Layout";
import { Login } from "./Login";
import { PrivateRoute } from "./PrivateRoute";
import { Register } from "./Register";
import { ChatGpt } from "./ChatGpt";

function App() {
  return (
    
        <Router>
          <AuthProvider>
            <Layout>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <PrivateRoute>
                    <Dashbaord />
                  </PrivateRoute>
                }
              ></Route>
              <Route
                exact
                path="/chat-gpt"
                element={
                  <PrivateRoute>
                    <ChatGpt />
                  </PrivateRoute>
                }
              ></Route>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
            </Layout>
          </AuthProvider>
        </Router>
  );
}

export default App;
