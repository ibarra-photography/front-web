import React, { Fragment, useState, useEffect } from "react";
import { PhotoContext } from "../../store/photo-context";

import Button from "../Button/Button";
import PhotoCard from "../PhotoCard/PhotoCard";

import fetchApiData from "../../services/fetchApiData";

import b64toBlob from "../../services/base64toBlob.js";

const PhotoCardsGrid = () => {
  const [isLoading, setIsLoading] = useState("idle");
  const { photos, setPhoto } = React.useContext(PhotoContext);

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async () => {
    console.log("PhotoCTX", photos);
    if (photos.length !== 0) {
      setIsLoading("done");
      return;
    }
    console.log("in");
    try {
      setIsLoading("pending");
      const response = await fetchApiData();
      setPhoto(response);
      setIsLoading("done");
    } catch (error) {
      setIsLoading("error");
    }
  };

  return (
    <Fragment>
      {isLoading === "done" &&
        photos.map((photo) => {
          const blob = b64toBlob(photo.photo);
          const blobUrl = URL.createObjectURL(blob);
          return (
            <Button key={photo._id} path={`/gallery/${photo._id}`}>
              <PhotoCard
                key={photo._id}
                description=""
                link={blobUrl}
                title=""
              />
            </Button>
          );
        })}
      {isLoading === "pending" && <div>Loading...</div>}
    </Fragment>
  );
};

export default PhotoCardsGrid;
