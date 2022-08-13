const fetchApiData = async () => {
  const endpoint = `${process.env.API_URL}/api/v1/photos`;
  console.log("fetching appi data");
  return (await fetch(endpoint)).json();
};

export default fetchApiData;
