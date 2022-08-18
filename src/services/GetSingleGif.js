const GetSingleGif = async ({ id }) => {
  const url = `https://api.giphy.com/v1/gifs/${id}?api_key=uj6z9p9PI5L2KGk2GNq9tqI0AulfYYYL`;
  try {
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    const { data } = resultado;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default GetSingleGif;
