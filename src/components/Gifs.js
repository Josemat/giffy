import { Link } from "wouter";
const Gifs = ({ url, id, title, slug }) => {
  return (
    <>
      <div className="cuadradito">
        <Link to={`este/${slug}`} id={id} className="linkCuadradito">
          <small>{title} </small>
          <img src={url} alt={title} className="gifSize" />
        </Link>
      </div>
    </>
  );
};

export default Gifs;
