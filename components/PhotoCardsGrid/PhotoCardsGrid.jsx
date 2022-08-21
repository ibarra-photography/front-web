import React, { Fragment, useEffect, useState, useCallback } from "react";

import Button from "../Button/Button";
import PhotoCard from "../PhotoCard/PhotoCard";

import getPhotos from "../../services/getPhotos";

import b64toBlob from "../../services/base64toBlob.js";
import Skeleton from "components/Skeleton/Skeleton";
import Pagination from "components/Pagination/Pagination";

import styles from "./photo-cards-grid.module.css";

const PhotoCardsGrid = () => {
  const [isLoading, setIsLoading] = useState("idle");
  const [photos, setPhotos] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const getPhotosHandler = useCallback(async (pageTochange) => {
    if (isLoading === "pending") return;
    try {
      setIsLoading("pending");
      const {
        data: photosFromApi,
        page: pageFromApi,
        totalPages: totalPagesFromApi,
      } = await getPhotos(pageTochange);
      setPhotos(photosFromApi);
      setTotalPages(totalPagesFromApi);
      setIsLoading("done");
    } catch (error) {
      setIsLoading("error");
    }
  }, []);

  useEffect(() => {
    getPhotosHandler(1);
  }, [getPhotosHandler]);

  return (
    <div className={styles["photo-card-grid-container"]}>
      <div className={styles["photo-card-grid-photo-container"]}>
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
      </div>
      <Pagination pageHandler={getPhotosHandler} totalPages={totalPages} />
    </div>
  );
};

export default PhotoCardsGrid;
