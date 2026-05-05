import styles from "./page.module.css";
import LoaderGrid from "../app/components/grid/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <p className={styles.label}>Executive Homes</p>
        <h1 className={styles.title}>APP LOADER OPTIONS</h1>
        <p className={styles.subtitle}>Updated: May 05, 2026</p>
      </header>
      <LoaderGrid />
    </main>
  );
}