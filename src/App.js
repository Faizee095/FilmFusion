import React, { useState, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import filmContext from "./context/store";
import MovieDetails from "./pages/MovieDetails";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Account from "./pages/Account";

const App = () => {
  const [movieID, setMovieId] = useState([0]);
  const value = useMemo(() => ({ movieID, setMovieId }), [movieID]);
  return (
    <>
      <AuthContextProvider>
        <filmContext.Provider value={value}>
          {useMemo(
            () => (
              <>
                <Navbar />
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/movie/:id" element={<MovieDetails />} />
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/signup" element={<Signup />} />
                  <Route
                    path="/account"
                    element={
                      <ProtectedRoute>
                        <Account />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </>
            ),
            []
          )}
        </filmContext.Provider>
      </AuthContextProvider>
    </>
  );
};

export default App;
