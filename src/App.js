import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import { Link, Route, useRoute } from "wouter";
import Links from "./components/Links";
import BusquedaInput from "./components/BusquedaInput";

function App() {
  const [match, params] = useRoute("/search/:id");
  return (
    <>
      <div className="App">
        <section className="App-container">
          <div className="home">
            <Link className="link" to="/">
              <h2>Buscador de Gifs</h2>
            </Link>
            <BusquedaInput />
          </div>
          {!match ? (
            <div>
              <h3>Top trending</h3>
              <div className="contenedorTrending">
                <Links limit={10} />
              </div>
            </div>
          ) : null}
          <Route path="/search/:busqeda">
            {(params) => <ListOfGifs keyword={params.busqeda} />}
          </Route>
        </section>
      </div>
    </>
  );
}

export default App;
