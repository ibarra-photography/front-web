import { useState, useEffect } from "react";
import { useRouter } from "node_modules/next/router";

import getPhotos from "services/getPhotos";

export const useCardsGrid = () => {
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
      console.log("error", error);
      setIsLoading("error");
    }
  };

  useEffect(() => {
    getPhotosHandler();
  }, [query]);

  //   useLayoutEffect(() => {
  //     getPhotosHandler();
  //   }, [query]);

  return { isLoading, photos, totalPages };
};
