"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import styles from "./ImageFade.module.css";

export default function ImageFade({
  alt,
  className,
  onLoad,
  wrapperClassName,
  ...props
}: ImageProps & { wrapperClassName?: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`${styles.wrap} ${loaded ? styles.loaded : ""} ${
        wrapperClassName ?? ""
      }`}
    >
      <Image
        {...props}
        alt={alt}
        className={`${styles.img} ${className ?? ""}`}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
      />
    </div>
  );
}
