const uploadPhoto = async (data) => {
  const options = {
    method: "POST",
    body: data,
  };

  const res = await (
    await fetch(`${process.env.API_URL}/api/v1/upload`, options)
  ).json();

  return res;
};

export default uploadPhoto;
