import styles from "./grid.module.css";
import LoaderCard from "../card/card";

const LOADERS = [
  { id: 1, label: "Option 01", file: "Loader-1.lottie" },
  { id: 2, label: "Option 02", file: "Loader-2.lottie" },
  { id: 3, label: "Option 03", file: "Loader-3.lottie" },
  { id: 4, label: "Option 04", file: "Loader-4.lottie" },
  { id: 5, label: "Option 05", file: "Loader-5.lottie" },
  { id: 6, label: "Option 06", file: "Loader-6.lottie" },

];

export default function LoaderGrid() {
  return (
    <div className={styles.grid}>
      {LOADERS.map((loader) => (
        <LoaderCard key={loader.id} label={loader.label} file={loader.file} />
      ))}
    </div>
  );
}
