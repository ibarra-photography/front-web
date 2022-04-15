import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";

import Button from "../../components/Button/Button";
import PhotoRequestForm from "../../components/PhotoRequestForm/PhotoRequestForm";

import fetchApiData from "../../services/fetchApiData";
import b64toBlob from "../../services/base64toBlob";

import styles from "./../../styles/photo.module.css";
import { Fragment } from "react/cjs/react.production.min";

const Photo = () => {
  const router = useRouter();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [photos, setPhotos] = useState(null);
  useEffect(() => {
    fetchApiData().then((response) => setPhotos(response));
  }, []);
  if (photos) {
  }

  const handleFormOpening = () => {
    setIsFormOpen(true);
  };
  const handleFormClosing = () => {
    setIsFormOpen(false);
  };

  const renderPhoto = () => {
    return (
      <div className={styles.image}>
        {photo &&
          photo.map((photo) => (
            <img
              key={photo.id}
              src={URL.createObjectURL(b64toBlob(photo.data))}
              alt=""
            />
          ))}
        {!photo && <p>Loading...</p>}
      </div>
    );
  };
  const id = router.query.photo;

  const photo = photos?.filter((photo) => photo._id == id);

  console.log("photo", photo);

  return (
    <div className={styles["photo-page"]}>
      <div className={styles["photo-container"]}>
        {renderPhoto()}
        <div className={styles.information}>
          {!isFormOpen && (
            <Fragment>
              <h1>Title</h1>
              <p>
                Some random Text: no conocere el miedo, el miedo mata a la
                mente, el miedo es la pequeña muerte que conduce a la
                destruccion total.
              </p>
              <div className={styles["button-container"]}>
                <Button path="/gallery">
                  <div className={styles["go-back"]}>Gallery</div>
                </Button>
                <div
                  className={styles["request-button"]}
                  onClick={handleFormOpening}
                >
                  Ask for it
                </div>
              </div>
            </Fragment>
          )}
          {isFormOpen && <PhotoRequestForm setIsFormOpen={handleFormClosing} />}
        </div>
      </div>
    </div>
  );
};

export default Photo;
