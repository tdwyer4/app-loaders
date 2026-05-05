import styles from "./grid.module.css";
import LoaderCard from "../card/card";

const LOADERS = [
  { id: 1, label: "Option 01", file: "loader-1.lottie" },
  { id: 2, label: "Option 02", file: "loader-2.lottie" },
  { id: 3, label: "Option 03", file: "loader-3.lottie" },
  { id: 4, label: "Option 04", file: "loader-4.lottie" },
  { id: 5, label: "Option 05", file: "loader-5.lottie" },
  { id: 6, label: "Option 06", file: "loader-6.lottie" },
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
