const GetGifs = async ({ keyword, offset = 0, limit = 25 }) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=uj6z9p9PI5L2KGk2GNq9tqI0AulfYYYL&q=${keyword}&offset=${
    offset * limit
  }&limit=${limit}`;
  try {
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    const { data } = resultado;
    const gif = data.map((element) => ({
      imgOriginalUrl: element.images.original.url,
      slug: element.slug,
      url: element.images.downsized_medium.url,
      id: element.id,
      title: element.title,
    }));
    return gif;
  } catch (error) {
    console.error(error);
  }
};

export default GetGifs;
