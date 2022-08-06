import { useContext, useState } from "react";

import LoginContext from "store/login-context";

import uploadPhoto from "services/uploadPhotos";

const usePostImage = () => {
  const { credentials, logOut } = useContext(LoginContext);
  const [loadingStatus, setLoadingStatus] = useState("idle");

  const uploadImage = async (photo, title, text) => {
    let status = "";
    setLoadingStatus("loading");
    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("text", text);
    formData.append("title", title);
    formData.append("token", credentials.token);

    try {
      await uploadPhoto(formData);
      setLoadingStatus("success");
      status = "success";
    } catch (error) {
      console.log("error", error);
      if (error?.response?.status === 401) {
        logOut();
        loadingStatus("error");
        status = "error";
        throw new Error("Invalid credentials, login out");
      }
    }

    return status;
  };

  return { uploadImage };
};

export default usePostImage;
