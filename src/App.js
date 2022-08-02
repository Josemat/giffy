import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import { Link, Route, useRoute } from "wouter";
import Links from "./components/Links";
import BusquedaInput from "./components/BusquedaInput";
import { GifProvider } from "./context/GifProvider";
import ClickedGif from "./components/ClickedGif";

function App() {
  const [match] = useRoute("/search/:id");
  const [matchBusqueda, paramsBusqueda] = useRoute("/search/gif/:id");
  return (
    <>
      <GifProvider>
        <div className="App">
          <section className="App-container">
            <div className="home">
              <Link className="link" to="/">
                <h2>Buscador de Gifs</h2>
              </Link>
              <BusquedaInput />
            </div>
            <Route path="/search/gif/:gif">
              <ClickedGif value={paramsBusqueda} />
            </Route>
            {!match && !matchBusqueda ? <Links limit={10} /> : null}

            <Route path="/search/:busqeda">
              {(params) => <ListOfGifs keyword={params.busqeda} />}
            </Route>
          </section>
        </div>
      </GifProvider>
    </>
  );
}

export default App;
