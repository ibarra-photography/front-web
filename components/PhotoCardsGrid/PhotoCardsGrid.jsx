import Pagination from "components/Pagination/Pagination";

import { useCardsGrid } from "./useCardsGrid";

import styles from "./photo-cards-grid.module.css";
import { Skeletons } from "./Skeletons/Skeletons";
import { PhotoComponent } from "./PhotoComponent/PhotoComponent";

const PhotoCardsGrid = () => {
  const { isLoading, photos, totalPages } = useCardsGrid();
  return (
    <div className={styles["photo-card-grid-container"]}>
      <div className={styles["photo-card-grid-photo-container"]}>
        {isLoading === "done" ? <PhotoComponent photos={photos} /> : null}
        {isLoading === "pending" ? <Skeletons /> : null}
        {isLoading === "error" ? <p>An error ocurred</p> : null}
        {isLoading === "idle" ? <p>Idle</p> : null}
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default PhotoCardsGrid;
