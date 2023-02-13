import MovieInfo from "../components/MovieInfo";
import Row from "../components/Row";
import { requests } from "../services/Request";

const MovieDetails = () => {

  return (
    <>
      <MovieInfo />
      <Row rowID="6" title="Similar Movies" fetchURL={requests.requestSimilar} />
    </>
  );
};

export default MovieDetails;
