const uploadPhoto = async (data) => {
  const options = {
    method: "POST",
    body: data,
  };
  console.log("uploading on : ", process.env.API_URL);
  const apiUrl = "http://localhost:4000";

  const res = await fetch(`http://localhost:4000/api/v1/upload`, options);

  console.log("res: ", res);

  return res;
};

export default uploadPhoto;
