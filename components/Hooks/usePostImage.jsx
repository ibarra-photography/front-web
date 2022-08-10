import { useContext } from "react";

import LoginContext from "store/login-context";

import uploadPhoto from "services/uploadPhotos";

const usePostImage = () => {
  const { credentials, logOut } = useContext(LoginContext);

  const uploadImage = async (photo, title, text) => {
    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("text", text);
    formData.append("title", title);
    formData.append("token", credentials.token);

    try {
      const res = await uploadPhoto(formData);
      if (res.status === 200) return "Success uploading photo";
      return "No 202";
    } catch (error) {
      console.log("error in upload image: ", error);
      logOut();
      return "error loading";
    }
  };

  return { uploadImage };
};

export default usePostImage;
