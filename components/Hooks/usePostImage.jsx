import { useContext, useState } from "react";
import { useRouter } from "node_modules/next/router";

import LoginContext from "store/login-context";

import uploadPhoto from "services/uploadPhotos";

const usePostImage = () => {
  const { credentials, logOut } = useContext(LoginContext);
  const [loadingStatus, setLoadingStatus] = useState("idle");

  const router = useRouter();

  const uploadImage = async (photo, title, text) => {
    if (loadingStatus === "loading") return;
    console.log("loading ...", photo);
    if (!photo) return;
    setLoadingStatus("loading");
    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("text", text);
    formData.append("title", title);
    formData.append("token", credentials.token);

    try {
      const res = await uploadPhoto(formData);
      if (res.status === 200) {
        setLoadingStatus("success");
        router.push("/");
      }
    } catch (error) {
      setLoadingStatus("error");
      logOut();
    }
  };

  return { uploadImage, loadingStatus };
};

export default usePostImage;
