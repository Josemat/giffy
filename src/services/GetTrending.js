const GetTrending = async (limit = 9) => {
  const url = `https://api.giphy.com/v1/gifs/trending?api_key=uj6z9p9PI5L2KGk2GNq9tqI0AulfYYYL&limit=${limit}&rating=r`;
  try {
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    return resultado.data;
  } catch (error) {
    console.log(error);
  }
};

export default GetTrending;
