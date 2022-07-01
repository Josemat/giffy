const GetGifs = async ({ keyword }) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=uj6z9p9PI5L2KGk2GNq9tqI0AulfYYYL&q=${keyword}&limit=20`;
  try {
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    const { data } = resultado;
    // console.log(data);
    const gif = data.map((element) => ({
      slug: element.slug,
      url: element.images.downsized_medium.url,
      id: element.id,
      title: element.title,
    }));
    return gif;
  } catch (error) {
    console.log(error);
  }
};

export default GetGifs;
