import { useContext, useState } from "react";

import LoginContext from "store/login-context";

import uploadPhoto from "services/uploadPhotos";

const usePostImage = () => {
  const { credentials, logOut } = useContext(LoginContext);
  const [loadingStatus, setLoadingStatus] = useState("idle");
  const [response, setResponse] = useState("");

  const uploadImage = async (photo, title, text) => {
    setLoadingStatus("loading");
    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("text", text);
    formData.append("title", title);
    formData.append("token", credentials.token);

    try {
      const response = await uploadPhoto(formData);
      setLoadingStatus("success");
      setResponse("success loading");
    } catch (error) {
      setResponse("error loading");
      console.log("error", error);
      if (error?.response?.status === 401) {
        logOut();
        loadingStatus("error");
        throw new Error("Invalid credentials, login out");
      }
    }

    return response;
  };

  return { uploadImage };
};

export default usePostImage;
