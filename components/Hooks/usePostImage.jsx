import { useContext, useState } from "react";

import LoginContext from "store/login-context";

import uploadPhoto from "services/uploadPhotos";

const usePostImage = () => {
  const { credentials, logOut } = useContext(LoginContext);
  const [response, setResponse] = useState("");

  const uploadImage = async (photo, title, text) => {
    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("text", text);
    formData.append("title", title);
    formData.append("token", credentials.token);

    try {
      await uploadPhoto(formData);
      setResponse("success loading");
    } catch (error) {
      setResponse("error loading");
      logOut();
    }

    return response;
  };

  return { uploadImage };
};

export default usePostImage;
