import React, { Fragment, useEffect, useState, useCallback } from "react";

import Button from "../Button/Button";
import PhotoCard from "../PhotoCard/PhotoCard";

import getPhotos from "../../services/getPhotos";

import b64toBlob from "../../services/base64toBlob.js";
import Skeleton from "components/Skeleton/Skeleton";
import Pagination from "components/Pagination/Pagination";

import styles from "./photo-cards-grid.module.css";
import { useRouter } from "node_modules/next/router";

const PhotoCardsGrid = () => {
  const { query } = useRouter();
  const [isLoading, setIsLoading] = useState("idle");
  const [photos, setPhotos] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const getPhotosHandler = async () => {
    const page = query.page;
    if (!page) return;
    if (isLoading === "pending") return;
    try {
      setIsLoading("pending");
      const { data: photosFromApi, totalPages: totalPagesFromApi } =
        await getPhotos(page);
      setPhotos(photosFromApi);
      setTotalPages(totalPagesFromApi);
      setIsLoading("done");
    } catch (error) {
      setIsLoading("error");
    }
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     getPhotosHandler();
  //   }, 300);
  // }, [query]);

  React.useLayoutEffect(() => {
    getPhotosHandler();
  }, [query]);

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
      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default PhotoCardsGrid;
