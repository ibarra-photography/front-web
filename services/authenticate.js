const authenticate = async (credentials) => {
  const options = {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await (
    await fetch("http://localhost:4000/api/v1/authenticate", options)
  ).json();

  return res;
};

export default authenticate;
