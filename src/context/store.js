import { createContext } from "react";

const filmContext = createContext({
    movieID: 0,
    setMovieId: (id) => {}
  });
  
  export default filmContext;
