const uploadPhoto = async (data) => {
  const options = {
    method: "POST",
    body: data,
  };

  const res = await (
    await fetch("http://localhost:4000/api/v1/upload", options)
  ).json();

  return res;
};

export default uploadPhoto;
