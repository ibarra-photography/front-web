const fetchApiData = async () => {
  const endpoint = `${process.env.API_URL}/api/v1/photos`;

  const response = await fetch(endpoint);
  const data = await response.json();
  return await data;
};

export default fetchApiData;
