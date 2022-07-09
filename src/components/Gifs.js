import { Link } from "wouter";
import useGif from "../hooks/useGif";
const Gifs = ({ url, id, title, slug, imgOriginalUrl }) => {
  // console.log(imgOriginalUrl);
  const { setGifURL } = useGif();
  return (
    <>
      <div className="cuadradito">
        <Link
          to={`gif/${slug}`}
          id={id}
          className="linkCuadradito"
          onClick={() => {
            setGifURL(imgOriginalUrl);
          }}
        >
          <small>{title} </small>
          <img src={url} alt={title} className="gifSize" />
        </Link>
      </div>
    </>
  );
};

export default Gifs;
