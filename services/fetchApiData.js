const fetchApiData = async () => {
  const endpoint = `https://ibarra-photography.herokuapp.com/api/v1/photos`;

  const response = await fetch(endpoint);
  const data = await response.json();
  return await data;
};

export default fetchApiData;
