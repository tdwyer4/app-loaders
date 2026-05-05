"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import styles from "./card.module.css";

// Dynamically import DotLottieReact to avoid SSR issues with WASM
const DotLottieReact = dynamic(
  () =>
    import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  { ssr: false }
);

interface LoaderCardProps {
  label: string;
  file: string;
}

export default function LoaderCard({ label, file }: LoaderCardProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.playerWrap}>
        {!hasError ? (
          <DotLottieReact
            src={`/${file}`}
            loop
            autoplay
            style={{ width: "50%", height: "50%" }}
          />
        ) : (
          <div className={styles.placeholder}>
            <span className={styles.placeholderIcon}>◌</span>
            <span className={styles.placeholderText}>
              Drop <code>{file}</code> in <code>/public</code>
            </span>
          </div>
        )}
      </div>
      <div className={styles.footer}>
        <span className={styles.cardLabel}>{label}</span>
        <span className={styles.filename}>{file}</span>
      </div>
    </div>
  );
}
