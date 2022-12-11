import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import FullscreenPhoto from "components/FullscreenPhoto/FullscreenPhoto";
import LoadingComponent from "components/LoadingComponent/LoadingComponent";
import Spinner from "components/Spinner/Spinner";

import b64toBlob from "../../services/base64toBlob";

import styles from "./../../styles/photo.module.css";
import { getPhotoById } from "services/getPhotoById";

const Photo = () => {
  const router = useRouter();
  const [isPhotoFullMode, setIsPhotoFullMode] = useState(false);
  const [photo, setPhoto] = useState({
    _id: "",
    photo: "",
    title: "Title",
    text: "text",
  });
  const [fetchingState, setFetchingState] = useState("idle");

  const onPhotoClickHandler = () => {
    setIsPhotoFullMode(true);
  };

  const closePhotoHandler = () => {
    setIsPhotoFullMode(false);
  };

  const goToGalleryHandler = () => {
    router.back();
  };

  const getPhoto = useCallback(async () => {
    setFetchingState("loading");
    try {
      const photoFromApi = await getPhotoById(router.query.photo);
      setPhoto(photoFromApi[0]);
      setFetchingState("success");
    } catch (error) {
      setFetchingState("error");
      console.log("Error fetching photos: ", error);
    }
  }, [router.query.photo]);

  useEffect(() => {
    getPhoto();
  }, [getPhoto]);

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  const renderPhoto = () => {
    return (
      <div className={styles.image}>
        {photo && (
          <div className={styles["image-limit"]}>
            <Image
              alt={photo.title}
              className={styles["image-component"]}
              height={200}
              layout="responsive"
              loader={myLoader}
              src={URL.createObjectURL(b64toBlob(photo.photo))}
              width={200}
            />
          </div>
        )}

        {!photo && <LoadingComponent>Loading...</LoadingComponent>}
      </div>
    );
  };

  return (
    <div className={styles["photo-page"]}>
      {fetchingState === "loading" && (
        <LoadingComponent style={{ width: "100vw" }}>
          <Spinner />
        </LoadingComponent>
      )}
      {fetchingState === "success" && (
        <div
          className={styles["photo-container"]}
          onClick={onPhotoClickHandler}
        >
          {renderPhoto()}
          <div className={styles.information}>
            {!photo && <h2>Title</h2>}
            {photo && <h2>{photo.title}</h2>}
            {photo && <p>{photo.text}</p>}
            <div className={styles["button-container"]}>
              <div onClick={goToGalleryHandler}>
                <div className={styles["go-back"]}>Gallery</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isPhotoFullMode && (
        <FullscreenPhoto
          onClose={closePhotoHandler}
          photoBlob={photo.photo}
          title={photo.title}
        />
      )}
    </div>
  );
};

export default Photo;
