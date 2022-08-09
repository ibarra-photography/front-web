const uploadPhoto = async (data) => {
  const options = {
    method: "POST",
    body: data,
  };
  const apiUrl = process.env.API_URL || "http://localhost:4000";

  const res = await fetch(`${apiUrl}/api/v1/upload`, options);

  return res;
};

export default uploadPhoto;
