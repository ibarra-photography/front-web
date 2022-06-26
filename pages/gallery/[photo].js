import React, { useState, useEffect } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Image from "next/image";
import { useRouter } from "next/router";

import { PhotoContext } from "../../store/photo-context";

import Button from "../../components/Button/Button";

import fetchApiData from "../../services/fetchApiData";
import b64toBlob from "../../services/base64toBlob";

import styles from "./../../styles/photo.module.css";

const Photo = () => {
  const router = useRouter();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [photo, setPhoto] = useState();
  const { photos, setPhotos } = React.useContext(PhotoContext);

  const getPhoto = async () => {
    const response = await fetchApiData();
    setPhotos(response);
  };

  useEffect(() => {
    if (photos.length === 0 || photos === undefined) {
      getPhoto();
    } else {
      const id = router.query.photo;

      const photo = photos?.filter((photo) => photo._id == id);
      setPhoto(photo[0]);
    }
  }, [photos]);

  const handleFormOpening = () => {
    setIsFormOpen(true);
  };
  const handleFormClosing = () => {
    setIsFormOpen(false);
  };

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
      <div className={styles["photo-container"]}>
        {renderPhoto()}
        <div className={styles.information}>
          {!isFormOpen && (
            <Fragment>
              {!photo && <h2>Title</h2>}
              {photo && <h2>{photo.title}</h2>}
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
        </div>
      </div>
    </div>
  );
};

export default Photo;
