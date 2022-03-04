const fetchApiData = async () => {
  const endpoint = "http://localhost:4000/api/v1/photos";

  const response = await fetch(endpoint);
  const data = await response.json();
  return await data;
};

export default fetchApiData;
