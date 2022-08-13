import React, { Fragment, useEffect, useState, useCallback } from "react";

import Button from "../Button/Button";
import PhotoCard from "../PhotoCard/PhotoCard";

import fetchApiData from "../../services/fetchApiData";

import b64toBlob from "../../services/base64toBlob.js";
import Skeleton from "components/Skeleton/Skeleton";

const PhotoCardsGrid = () => {
  const [isLoading, setIsLoading] = useState("idle");
  const [photos, setPhotos] = useState([]);

  const getPhotos = useCallback(async () => {
    if (isLoading === "pending") return;
    try {
      setIsLoading("pending");
      setPhotos(await fetchApiData());
      setIsLoading("done");
    } catch (error) {
      setIsLoading("error");
    }
  }, []);

  useEffect(() => {
    getPhotos();
  }, [getPhotos]);

  return (
    <Fragment>
      {isLoading === "done"
        ? photos.map((photo) => {
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
          })
        : null}
      {isLoading === "pending" ? (
        <Fragment>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </Fragment>
      ) : null}
    </Fragment>
  );
};

export default PhotoCardsGrid;
