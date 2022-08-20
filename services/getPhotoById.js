export const getPhotoById = async (id) => {
  const endpoint = new URL(`${process.env.API_URL}/api/v1/photoById`);
  endpoint.searchParams.append("id", id);

  return (await fetch(endpoint)).json();
};
