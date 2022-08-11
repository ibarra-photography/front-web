import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import Button from "../../components/Button/Button";
import FullscreenPhoto from "components/FullscreenPhoto/FullscreenPhoto";
import LoadingComponent from "components/LoadingComponent/LoadingComponent";
import Spinner from "components/Spinner/Spinner";

import fetchApiData from "../../services/fetchApiData";
import b64toBlob from "../../services/base64toBlob";

import styles from "./../../styles/photo.module.css";

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

  const getPhoto = useCallback(async () => {
    setFetchingState("loading");
    try {
      const photos = await fetchApiData();
      setPhoto(photos.filter((photo) => photo._id == router.query.photo)[0]);
      setFetchingState("success");
    } catch (error) {
      setFetchingState("error");
      console.log("Error fetching photos: ", error);
    }
  }, [router.query.photo]);

  useEffect(() => {
    getPhoto();
  }, [getPhoto]);

  const renderPhoto = () => {
    return (
      <div className={styles.image}>
        {photo && (
          <div className={styles["image-limit"]}>
            <Image
              src={URL.createObjectURL(b64toBlob(photo.photo))}
              alt={photo.title}
              layout="responsive"
              width={200}
              height={200}
              className={styles["image-component"]}
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
            <>
              {!photo && <h2>Title</h2>}
              {photo && <h2>{photo.title}</h2>}
              {photo && <p>{photo.text}</p>}
              <div className={styles["button-container"]}>
                <Button path="/gallery">
                  <div className={styles["go-back"]}>Gallery</div>
                </Button>
                {/* <div
                  className={styles["request-button"]}
                  onClick={handleFormOpening}
                >
                  Ask for it
                </div> */}
              </div>
            </>
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
