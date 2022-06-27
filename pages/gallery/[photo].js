import React, { useState, useEffect } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Image from "next/image";
import { useRouter } from "next/router";

import Button from "../../components/Button/Button";

import fetchApiData from "../../services/fetchApiData";
import b64toBlob from "../../services/base64toBlob";

import styles from "./../../styles/photo.module.css";

const Photo = () => {
  const router = useRouter();
  const [photo, setPhoto] = useState({
    _id: "",
    photo: "",
    title: "Title",
    text: "text",
  });
  const [fetchingState, setFetchingState] = useState("idle");

  const getPhoto = async () => {
    setFetchingState("loading");
    try {
      const photos = await fetchApiData();
      console.log("Photos_response: ", photos);
      console.log(router.query.photo);
      setPhoto(photos.filter((photo) => photo._id == router.query.photo)[0]);
      setFetchingState("success");
    } catch (error) {
      setFetchingState("error");
      console.log("Error fetching photos: ", error);
    }
  };

  console.log("PHOTOS: ", photo);

  useEffect(() => {
    getPhoto();
  }, [router.query.photo]);

  // const handleFormOpening = () => {
  //   setIsFormOpen(true);
  // };
  // const handleFormClosing = () => {
  //   setIsFormOpen(false);
  // };

  const renderPhoto = () => {
    return (
      <div className={styles.image}>
        {photo && (
          <Image
            src={URL.createObjectURL(b64toBlob(photo.photo))}
            alt={photo.title}
            layout="intrinsic"
            width={650}
            height={500}
          />
        )}

        {!photo && <p>Loading...</p>}
      </div>
    );
  };

  return (
    <div className={styles["photo-page"]}>
      {fetchingState === "loading" && <p>LOADING</p>}
      {fetchingState === "success" && (
        <div className={styles["photo-container"]}>
          {renderPhoto()}
          <div className={styles.information}>
            <Fragment>
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
            </Fragment>
          </div>
        </div>
      )}
    </div>
  );
};

export default Photo;
