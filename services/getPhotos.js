const getPhotos = async (page) => {
  const endpoint = new URL(`${process.env.API_URL}/api/v1/photos`);

  endpoint.searchParams.append("page", page);

  return (await fetch(endpoint)).json();
};

export default getPhotos;
