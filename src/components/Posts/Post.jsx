import React from "react";

import styles from "./Posts.module.css";

export function Post({ img, title, text, videoLink, audioLink }) {
  return (
    <div className={styles.post_container}>
      {title ? <p className={styles.post_title}>{title}</p> : null}
      {img ? <img className={styles.post_img} src={img} /> : null}
      {text ? <p className={styles.post_text}>{text}</p> : null}
      {videoLink ? (
        <iframe
          src={videoLink}
          width="420"
          height="345"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ) : null}
      {audioLink ? <audio controls src={audioLink}></audio> : null}
    </div>
  );
}
