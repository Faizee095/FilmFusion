import React, { useState ,useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import filmContext from "./context/store";
import MovieDetails from "./pages/MovieDetails";

const App = () => {
  const [movieID, setMovieId] = useState([0]);
  const value = useMemo(() => ({ movieID, setMovieId }), [movieID]);
  return (
    <>
      <filmContext.Provider value={value}>
        {useMemo(
          () => (
            <>
              <Navbar />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
              </Routes>
            </>
          ),
          []
        )}
      </filmContext.Provider>
    </>
  );
};

export default App;
